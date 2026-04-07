import React from 'react'

const etapas = [
  { data: 'Set 2025', titulo: 'Início do Projeto', desc: 'Planejamento e confecção dos litrões.', status: 'done' },
  { data: 'Out 2025', titulo: 'Plantio e Oficinas', desc: 'Plantio de alfaces e início do desenvolvimento do app.', status: 'done' },
  { data: 'Nov 2025', titulo: 'Estruturas Finais', desc: 'Finalização dos suportes dos tomateiros.', status: 'done' },
  { data: 'Fev 2026', titulo: 'Segundo Ciclo', desc: 'Replanejamento e novas espécies.', status: 'done' },
  { data: 'Jun 2026', titulo: 'Finalização do App', desc: 'Análise final e chatbot de IA concluído.', status: 'upcoming' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-spotify-black px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14">
          <span className="section-label">07 / Nossa Jornada</span>
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

