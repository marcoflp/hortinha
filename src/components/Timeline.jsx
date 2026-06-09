import React from 'react'

const etapas = [
  { data: 'Set 2025', titulo: 'Início do Projeto', desc: 'Planejamento e confecção dos litrões.', status: 'done' },
  { data: 'Out 2025', titulo: 'Plantio e Oficinas', desc: 'Plantio de alfaces e início do desenvolvimento do app.', status: 'done' },
  { data: 'Nov 2025', titulo: 'Estruturas Finais', desc: 'Finalização dos suportes dos tomateiros.', status: 'done' },
  { data: '10/Fev 2026', titulo: 'Conversa e Planejamento', desc: 'Reunião entre turmas de Práticas e preparação do cronograma.', status: 'done' },
  { data: '24/Fev 2026', titulo: 'Remoção de Estruturas', desc: 'Remoção da estrutura de tomates para novo ciclo.', status: 'done' },
  { data: '03/Mar 2026', titulo: 'Preparação dos Baldes', desc: 'Preparação dos baldes para cultivo de novas espécies.', status: 'done' },
  { data: '10/Mar 2026', titulo: 'Plantio de Coqueiros e Hortaliças', desc: 'Plantio de coqueiros no lago e novas hortaliças.', status: 'done' },
  { data: '17/Mar 2026', titulo: 'Manutenção da Horta', desc: 'Primeira manutenção completa da horta.', status: 'done' },
  { data: '24/Mar 2026', titulo: 'Manutenção e Reestruturação', desc: 'Manutenção da horta e reestruturação do site.', status: 'done' },
  { data: '31/Mar 2026', titulo: 'Desenvolvimento do Site', desc: 'Manutenção da horta e continuação do desenvolvimento do site.', status: 'done' },
  { data: '07/Abr 2026', titulo: 'Evolução do Site', desc: 'Manutenção da horta e continuação do desenvolvimento do site.', status: 'done' },
  { data: '14/Abr 2026', titulo: 'Novas Funcionalidades', desc: 'Manutenção da horta e desenvolvimento de novas funcionalidades.', status: 'done' },
  { data: '28/Abr 2026', titulo: 'Expansão de Features', desc: 'Manutenção da horta e desenvolvimento de novas funcionalidades.', status: 'done' },
  { data: '05/Mai 2026', titulo: 'Primeira Colheita', desc: 'Colheita das hortaliças e preparação do Coffee Break.', status: 'done' },
  { data: '12/Mai 2026', titulo: 'Segunda Colheita', desc: 'Nova colheita das hortaliças e preparação do Coffee Break.', status: 'done' },
  { data: 'Jun 2026', titulo: 'Finalização do Site', desc: 'Análise final e conclusão do chatbot de IA.', status: 'upcoming' },
  { data: 'Jul 2026', titulo: 'Apresentação Final', desc: 'Exposição e avaliação final do projeto.', status: 'upcoming' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">02 / Nossa Jornada</span>
          <h2 className="section-title">Histórico do Projeto</h2>
          <p className="text-spotify-silver max-w-2xl font-medium">Do planejamento à colheita — tudo que foi feito e o que vem por aí.</p>
        </div>

        {/* Linha do tempo vertical (Spotify style) */}
        <div className="relative pl-12">
          {/* Vertical line with gradient */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-spotify-green via-spotify-mid to-spotify-surface opacity-30" />

          <div className="space-y-10">
            {etapas.map((e, i) => (
              <div key={i} className="relative group">
                {/* Dot */}
                <div className={`absolute -left-12 mt-1 w-6 h-6 rounded-full border-2 z-10 transition-all duration-300
                  ${e.status === 'done' ? 'bg-spotify-green border-spotify-green shadow-[0_0_12px_#1ed760]' : 'bg-spotify-black border-spotify-mid shadow-none'}`}>
                  {e.status === 'done' && <div className="text-[10px] text-black font-black flex items-center justify-center h-full">✓</div>}
                </div>

                {/* Content Card */}
                <div className="bg-spotify-surface rounded-lg p-6 hover:bg-spotify-card transition-all duration-300 border border-white/5 shadow-med group-hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[11px] font-black tracking-widest text-spotify-green uppercase">{e.data}</span>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-sm uppercase tracking-widest
                      ${e.status === 'done' ? 'bg-spotify-green/20 text-spotify-green' : 'bg-spotify-mid text-spotify-silver'}`}>
                      {e.status === 'done' ? 'Concluído' : 'Próximo'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-spotify-green transition-colors">{e.titulo}</h3>
                  <p className="text-spotify-silver text-sm font-medium leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

