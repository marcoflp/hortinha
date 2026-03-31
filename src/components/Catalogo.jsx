import React, { useState } from 'react'

// Cultivos reais plantados no projeto Semeando Saúde
const cultivos = [
  { nome: 'Alface', categoria: 'Folhosas', emoji: '🥬', status: 'Colhida', dias: 0, desc: 'Plantada em 07/Out. Cultivada nos litrões da horta vertical do campus.' },
  { nome: 'Hortaliças Diversas', categoria: 'Folhosas', emoji: '🌿', status: 'Colhida', dias: 0, desc: 'Plantio inicial realizado em 30/Set com variedades diversas de hortaliças.' },
  { nome: 'Tomate', categoria: 'Frutas', emoji: '🍅', status: 'Crescendo', dias: 60, desc: 'Plantado em 21/Out em baldes pintados. Estrutura de suporte finalizada em 11/Nov.' },
  { nome: 'Beterraba', categoria: 'Raízes', emoji: '🫚', status: 'Crescendo', dias: 45, desc: 'Plantada neste semestre. Rica em ferro e antioxidantes, ótima para sucos e saladas.' },
  { nome: 'Manjericão', categoria: 'Temperos', emoji: '🌱', status: 'Ativa', dias: 0, desc: 'Cultivado para uso em receitas como pesto e pizza. Aromático e versátil.' },
  { nome: 'Horta Vertical (Litrões)', categoria: 'Estrutura', emoji: '🪴', status: 'Ativa', dias: 0, desc: 'Estrutura criada com garrafas PET reutilizadas. Resultados coletados em 18/Nov.' },
]

const categorias = ['Todos', 'Folhosas', 'Frutas', 'Raízes', 'Temperos', 'Estrutura']

const statusColor = {
  'Colhida':   'bg-green-100 text-green-700',
  'Crescendo': 'bg-yellow-100 text-yellow-700',
  'Ativa':     'bg-blue-100 text-blue-700',
  'Planejado': 'bg-gray-100 text-gray-500',
}

export default function Catalogo() {
  const [filtro, setFiltro] = useState('Todos')

  const filtrados = filtro === 'Todos' ? cultivos : cultivos.filter(c => c.categoria === filtro)

  return (
    <section id="catalogo" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Catálogo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">O que cultivamos</h2>
          <p className="text-gray-500 mt-3">Cultivos reais do primeiro ciclo do projeto Semeando Saúde.</p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categorias.map(cat => (
            <button key={cat} onClick={() => setFiltro(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors
                ${filtro === cat ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-green-50'}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtrados.map(c => (
            <div key={c.nome} className="border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{c.emoji}</div>
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-800">{c.nome}</h3>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor[c.status]}`}>
                  {c.status}
                </span>
              </div>
              <p className="text-gray-500 text-xs mb-3">{c.desc}</p>
              {c.dias > 0 && (
                <p className="text-xs text-green-600 font-medium">⏱ {c.dias} dias estimados</p>
              )}
            </div>
          ))}
        </div>

        {/* Destaque do App */}
        <div className="mt-12 bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl">📱</div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">Aplicativo com Chatbot de IA</h3>
            <p className="text-gray-500 text-sm">
              Um dos resultados do projeto é o protótipo de aplicativo com chatbot inteligente para
              consultas sobre cultivo, desenvolvido paralelamente às atividades da horta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
