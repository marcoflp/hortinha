import React from 'react'

const resultados = [
  {
    icon: '🌱',
    titulo: 'Horta Acadêmica Implantada',
    desc: 'Espaço de aprendizagem prática no campus com horta vertical em litrões e canteiros de tomates.',
  },
  {
    icon: '👩‍🏫',
    titulo: 'Oficinas Realizadas',
    desc: 'Momentos de socialização e capacitação sobre sustentabilidade, agroecologia e nutrição para a comunidade.',
  },
  {
    icon: '📱',
    titulo: 'Protótipo de App com IA',
    desc: 'Desenvolvimento de um aplicativo com chatbot de inteligência artificial para consultas sobre cultivo.',
  },
]

const proximosCiclo = [
  { periodo: 'Fev/2026', acao: 'Replanejamento e seleção de novas espécies' },
  { periodo: 'Mar/2026', acao: 'Preparação do terreno e replantio' },
  { periodo: 'Abr–Mai/2026', acao: 'Acompanhamento e manutenção contínua' },
  { periodo: 'Jun/2026', acao: 'Coleta de dados e finalização do aplicativo' },
  { periodo: 'Jul/2026', acao: 'Relatório final e avaliação do projeto' },
]

export default function Resultados() {
  return (
    <section id="resultados" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Primeiro Ciclo</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Resultados Alcançados</h2>
        </div>

        {/* Cards de resultados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resultados.map(r => (
            <div key={r.titulo} className="bg-green-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3 className="font-bold text-gray-800 mb-2">{r.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Próximo ciclo */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">
            🔭 O que esperamos do Segundo Ciclo (2026)
          </h3>
          <div className="space-y-3 max-w-xl mx-auto">
            {proximosCiclo.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shrink-0 min-w-[90px] text-center">
                  {item.periodo}
                </span>
                <p className="text-gray-600 text-sm">{item.acao}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
