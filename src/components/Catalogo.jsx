import React, { useState } from 'react'
import { MessageSquareText, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

// Importando as imagens reais da horta
import imgAlface from '../img/alface.jpg'
import imgHortalicas from '../img/rucula.jpg'
import imgTomate from '../img/tomate.jpg'
import imgBeterraba from '../img/beterraba.jpg'
import imgManjericao from '../img/manjericao.jpg'
import imgHortaVertical from '../img/8.jpg'

const cultivos = [
  { nome: 'Alface', categoria: 'Folhosas', imagem: imgAlface, status: 'Colhida', desc: 'Plantada em 07/Out. Cultivada nos litrões da horta vertical do campus.' },
  { nome: 'Hortaliças', categoria: 'Folhosas', imagem: imgHortalicas, status: 'Colhida', desc: 'Plantio inicial realizado em 30/Set com variedades diversas.' },
  { nome: 'Tomate Grape', categoria: 'Frutas', imagem: imgTomate, status: 'Colhida', desc: 'Plantado em 21/Out em baldes. Suporte finalizado em 11/Nov.' },
  { nome: 'Manjericão', categoria: 'Temperos', imagem: imgManjericao, status: 'Colhida', desc: 'Cultivado para uso em receitas. Aromático e versátil.' },
  { nome: 'Beterraba', categoria: 'Raízes', imagem: imgBeterraba, status: 'Crescendo', desc: 'Plantada neste semestre. Rica em ferro e antioxidantes.' },
  { nome: 'Horta Vertical', categoria: 'Estrutura', imagem: imgHortaVertical, status: 'Ativa', desc: 'Estrutura criada com garrafas PET reutilizadas (Litrões).' },
]

const categorias = ['Todos', 'Folhosas', 'Frutas', 'Raízes', 'Temperos', 'Estrutura']

export default function Catalogo() {
  const [filtro, setFiltro] = useState('Todos')
  const filtrados = filtro === 'Todos' ? cultivos : cultivos.filter(c => c.categoria === filtro)

  return (
    <section id="catalogo" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">03 / Nosso Acervo</span>
          <h2 className="section-title">O que cultivamos</h2>
          <p className="text-spotify-silver max-w-2xl font-bold uppercase tracking-widest text-[11px] mt-2">Cultivos reais capturados pela nossa equipe no IFSul.</p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categorias.map(cat => (
            <button key={cat} onClick={() => setFiltro(cat)}
              className={`px-4 py-1.5 rounded-pill font-bold transition-all duration-200
                ${filtro === cat ? 'bg-white text-black text-xs' : 'bg-spotify-mid text-white hover:bg-spotify-card text-xs'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtrados.map(c => (
            <div key={c.nome} className="bg-spotify-surface rounded-xl p-5 hover:bg-spotify-card transition-all duration-300 group cursor-default shadow-med flex flex-col h-full ring-1 ring-white/5 overflow-hidden">
              <div className="relative aspect-[16/10] mb-6 rounded-lg overflow-hidden shadow-heavy">
                 <img 
                    src={c.imagem} 
                    alt={c.nome} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-spotify-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-bold text-white mb-2 tracking-tight text-xl">{c.nome}</h3>
              <p className="text-spotify-silver text-[13px] line-clamp-2 font-bold leading-relaxed mb-6 flex-grow">{c.desc}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-sm
                  ${c.status === 'Colhida' ? 'bg-spotify-green/20 text-spotify-green' : 'bg-spotify-warning/20 text-spotify-warning'}`}>
                  {c.status}
                </span>
                <span className="text-[10px] font-bold text-spotify-muted uppercase tracking-[2px]">{c.categoria}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-spotify-surface to-spotify-mid rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 border border-white/10 shadow-heavy overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-spotify-green/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="w-24 h-24 md:w-32 md:h-32 bg-spotify-black rounded-3xl flex items-center justify-center shadow-heavy shrink-0 border border-white/5 relative z-10">
            <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-spotify-green" />
          </div>
          <div className="text-center md:text-left flex-grow relative z-10">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">AI Assistente Semeando Saúde</h3>
            <p className="text-spotify-silver text-lg font-bold max-w-2xl leading-relaxed mb-8">
              Dúvidas sobre o plantio destas espécies? Nossa inteligência artificial 
              está pronta para orientar seu cultivo acadêmico.
            </p>
            <Link to="/chat" className="btn-spotify-green flex items-center gap-2 w-fit mx-auto md:mx-0 shadow-heavy">
               <MessageSquareText className="w-5 h-5" />
               ABRIR CHATBOT IA
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}



