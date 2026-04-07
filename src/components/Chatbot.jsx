import React, { useState, useRef, useEffect } from 'react'
import { Send, User, Bot, Loader2, Trash2, Sparkles } from 'lucide-react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ReactMarkdown from 'react-markdown'

// Initialize the API (user will provide the key in .env)
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

const SYSTEM_PROMPT = `
Você é o assistente virtual do projeto "Semeando Saúde: Hortas Comunitárias para uma Alimentação Nutritiva" do IFSul Campus Passo Fundo.
Seu objetivo é auxiliar estudantes e a comunidade em dúvidas sobre cultivo, agroecologia e nutrição.
Mantenha as respostas concisas e profissionais.
`

const SUGGESTIONS = [
  "Como plantar tomate grape?",
  "Dicas para alface crescer rápido",
  "O que é agroecologia urbana?",
]

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', content: 'Olá! 👋 Sou o assistente do Semeando Saúde. Como posso ajudar com sua horta hoje?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatEndRef = useRef(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (suggestedText) => {
    // Se vier texto da sugestão, usa ele. Se não, usa o estado do input.
    const textToSend = typeof suggestedText === 'string' ? suggestedText : input

    if (!textToSend.trim() || loading) return

    const userMessage = { role: 'user', content: textToSend }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    if (!API_KEY) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: '⚠️ Erro: API Key não configurada. Por favor, adicione VITE_GEMINI_API_KEY ao seu arquivo .env.' }])
        setLoading(false)
      }, 1000)
      return
    }

    try {
      const model = genAI.getGenerativeModel({
        model: 'gemini-3-flash-preview',
        systemInstruction: SYSTEM_PROMPT
      })

      const chatHistory = messages
        .filter((m, i) => i !== 0)
        .map(m => ({
          role: m.role === 'bot' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))

      const chat = model.startChat({
        history: chatHistory
      })

      // Passamos a variável correta para o envio
      const result = await chat.sendMessage(textToSend)
      const response = await result.response
      const text = response.text()

      setMessages(prev => [...prev, { role: 'bot', content: text }])
    } catch (error) {
      console.error('Chat Gemini Error:', error)
      setMessages(prev => [...prev, { role: 'bot', content: 'Ops, tive um problema técnico. Pode repetir a pergunta?' }])
    } finally {
      setLoading(false)
    }
  }

  const clearChat = () => {
    setMessages([{ role: 'bot', content: 'Conversa reiniciada. Como posso ajudar?' }])
  }

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] pt-20 bg-spotify-black text-white relative">
      {/* Header do Chat */}
      <div className="max-w-4xl mx-auto w-full px-6 py-4 flex justify-between items-center bg-spotify-black/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-spotify-green rounded-full flex items-center justify-center shadow-heavy border border-white/10">
            <Bot className="text-black w-6 h-6" />
          </div>
          <div>
            <h2 className="font-black text-[13px] tracking-tight uppercase">Assistente Semeando Saúde</h2>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-spotify-green rounded-full animate-pulse shadow-[0_0_8px_#1ed760]"></span>
              <span className="text-[10px] text-spotify-silver font-bold uppercase tracking-widest">Ativo</span>
            </div>
          </div>
        </div>
        <button onClick={clearChat} className="p-2 hover:bg-white/5 rounded-full text-spotify-muted hover:text-white transition-all ring-1 ring-white/5">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center">
        <div className="max-w-3xl w-full space-y-8">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-5 ${m.role === 'user' ? 'flex-row-reverse' : ''} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
              <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-med ring-2 ring-white/5 ${m.role === 'bot' ? 'bg-spotify-mid' : 'bg-spotify-green'}`}>
                {m.role === 'bot' ? <Bot className="w-5 h-5 text-spotify-green" /> : <User className="w-5 h-5 text-black" />}
              </div>
              <div className={`max-w-[85%] rounded-2xl px-5 py-4 text-[15px] shadow-heavy ring-1 ring-white/5 whitespace-pre-wrap
                ${m.role === 'bot' ? 'bg-spotify-surface text-spotify-silver' : 'bg-spotify-green text-black font-bold'}`}>
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-4 animate-pulse">
              <div className="w-9 h-9 rounded-full bg-spotify-mid flex items-center justify-center ring-2 ring-white/5">
                <Loader2 className="w-5 h-5 text-spotify-green animate-spin" />
              </div>
              <div className="bg-spotify-surface text-spotify-muted rounded-2xl px-6 py-4 text-xs font-black uppercase tracking-[2px]">
                Pensando...
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input e Sugestões */}
      <div className="p-6 bg-gradient-to-t from-spotify-black via-spotify-black to-transparent">
        <div className="max-w-4xl mx-auto">
          {/* Sugestões */}
          {!loading && messages.length < 2 && (
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={() => handleSend(s)}
                  className="text-[11px] font-bold px-4 py-2 border border-white/10 rounded-full hover:bg-white/5 hover:border-spotify-green transition-all bg-spotify-surface">
                  {s}
                </button>
              ))}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pergunte sobre sua horta..."
              className="w-full bg-spotify-surface rounded-full py-4 pl-7 pr-16 text-[15px] font-medium border border-white/10 focus:border-spotify-green focus:outline-none transition-all placeholder:text-spotify-muted shadow-heavy ring-1 ring-white/5"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="absolute right-2.5 top-2.5 w-9 h-9 bg-spotify-green rounded-full flex items-center justify-center text-black hover:scale-105 disabled:opacity-50 transition-all shadow-heavy"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


