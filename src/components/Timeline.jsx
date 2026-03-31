import React from 'react'

// Atividades reais conforme relatório final do projeto
const etapas = [
  {
    data: '23 Set 2025',
    titulo: 'Início do Projeto',
    desc: 'Planejamento, confecção dos litrões, montagem das estruturas e estudo preliminar de agroecologia urbana.',
    status: 'done',
  },
  {
    data: '30 Set 2025',
    titulo: 'Definição e Plantio Inicial',
    desc: 'Definição da oficina e da estrutura do aplicativo. Plantio inicial das hortaliças.',
    status: 'done',
  },
  {
    data: '07 Out 2025',
    titulo: 'Oficina e Plantio de Alfaces',
    desc: 'Realização de oficina com a comunidade, plantio de alfaces e início do desenvolvimento do aplicativo.',
    status: 'done',
  },
  {
    data: '14 Out 2025',
    titulo: 'Semana Acadêmica',
    desc: 'Participação e apresentação do projeto na Semana Acadêmica do IFSul Campus Passo Fundo.',
    status: 'done',
  },
  {
    data: '21 Out 2025',
    titulo: 'Plantio de Tomates',
    desc: 'Pintura dos baldes para plantio de tomates, plantio realizado e manutenção semanal da horta.',
    status: 'done',
  },
  {
    data: '28 Out 2025',
    titulo: 'Estrutura dos Tomates',
    desc: 'Fixação do poste de suporte para os tomateiros e manutenção semanal.',
    status: 'done',
  },
  {
    data: '04 Nov 2025',
    titulo: 'Construção das Estruturas',
    desc: 'Início da criação da estrutura de suporte para os tomates e continuidade do desenvolvimento do app.',
    status: 'done',
  },
  {
    data: '11 Nov 2025',
    titulo: 'Finalização das Estruturas',
    desc: 'Finalização das estruturas dos tomateiros e manutenção semanal da horta.',
    status: 'done',
  },
  {
    data: '18 Nov 2025',
    titulo: 'Coleta de Resultados',
    desc: 'Coleta de resultados da horta vertical, manutenção semanal e registros finais do primeiro ciclo.',
    status: 'done',
  },
  {
    data: 'Fev/2026',
    titulo: 'Segundo Ciclo — Replanejamento',
    desc: 'Replanejamento, seleção de novas espécies e aquisição de insumos para o novo ciclo.',
    status: 'done',
  },
  {
    data: 'Mar/2026',
    titulo: 'Replantio',
    desc: 'Preparação física do terreno e execução do replantio com novas espécies selecionadas.',
    status: 'done',
  },
  {
    data: 'Jun/2026',
    titulo: 'Finalização do App',
    desc: 'Coleta de dados finais, análise estatística e finalização do aplicativo com chatbot de IA.',
    status: 'upcoming',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gray-50 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Histórico</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Nossa Jornada</h2>
          <p className="text-gray-500 mt-3">Do planejamento à colheita — tudo que foi feito e o que vem por aí.</p>
        </div>

        {/* Linha do tempo vertical */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-200" />

          <div className="space-y-6">
            {etapas.map((e, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Marcador */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 text-sm font-bold
                  ${e.status === 'done' ? 'bg-green-600 text-white' :
                    e.status === 'current' ? 'bg-green-400 text-white ring-4 ring-green-100' :
                    'bg-white border-2 border-green-200 text-green-300'}`}>
                  {e.status === 'done' ? '✓' : e.status === 'current' ? '●' : '○'}
                </div>

                {/* Conteúdo */}
                <div className={`bg-white rounded-2xl p-5 flex-1 shadow-sm border
                  ${e.status === 'current' ? 'border-green-400' : 'border-gray-100'}`}>
                  <span className="text-xs text-green-600 font-semibold">{e.data}</span>
                  <h3 className="font-bold text-gray-800 mt-0.5">{e.titulo}</h3>
                  <p className="text-gray-500 text-sm mt-1">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
