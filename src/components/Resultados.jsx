import React from 'react'
import { Microscope, Users, Smartphone, Calendar, CheckCircle2 } from 'lucide-react'

const resultados = [
  { icon: Microscope, titulo: 'Horta Implantada', desc: 'Espaço de aprendizagem prática no campus com horta vertical e canteiros otimizados.' },
  { icon: Users, titulo: 'Oficinas Ativas', desc: 'Capacitação sobre sustentabilidade e agroecologia para toda a comunidade acadêmica.' },
  { icon: Smartphone, titulo: 'Inovação Digital', desc: 'Desenvolvimento de assistente inteligente para suporte ao cultivo sustentável.' },
]

const proximosCiclo = [
  { periodo: 'Fev/2026', acao: 'Replanejamento e novas espécies' },
  { periodo: 'Mar/2026', acao: 'Preparação e replantio' },
  { periodo: 'Abr–Mai/26', acao: 'Manutenção contínua' },
  { periodo: 'Jun/2026', acao: 'Finalização do aplicativo' },
]

export default function Resultados() {
  return (
    <section id="resultados" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">05 / Impacto</span>
          <h2 className="section-title">Resultados Alcançados</h2>
        </div>

        {/* Cards de resultados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resultados.map(r => (
            <div key={r.titulo} className="bg-spotify-surface rounded-lg p-10 text-center hover:bg-spotify-card transition-all duration-300 shadow-med group ring-1 ring-white/5">
              <div className="w-20 h-20 bg-spotify-mid rounded-full flex items-center justify-center mb-8 mx-auto group-hover:bg-spotify-green transition-colors duration-300 shadow-heavy">
                <r.icon className="w-10 h-10 text-spotify-green group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-black text-white mb-4 text-xl tracking-tight uppercase">{r.titulo}</h3>
              <p className="text-spotify-silver text-sm leading-relaxed font-bold">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Próximo ciclo (Spotify style card) */}
        <div className="bg-spotify-mid rounded-xl p-10 border border-white/10 shadow-heavy max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-10">
             <Calendar className="w-6 h-6 text-spotify-green" />
             <h3 className="text-xl font-black text-white tracking-tighter uppercase">
               Planejamento Segundo Ciclo (2026)
             </h3>
          </div>
          <div className="space-y-6">
            {proximosCiclo.map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <span className="bg-spotify-green text-black text-[10px] font-black px-4 py-2 rounded-sm shrink-0 min-w-[110px] text-center uppercase tracking-widest shadow-[0_0_15px_rgba(30,215,96,0.3)]">
                  {item.periodo}
                </span>
                <div className="h-px bg-white/10 flex-grow group-hover:bg-spotify-green/30 transition-colors"></div>
                <div className="flex items-center gap-3">
                   <CheckCircle2 className="w-4 h-4 text-spotify-muted group-hover:text-spotify-green transition-colors" />
                   <p className="text-white text-sm font-black tracking-tight uppercase opacity-80 group-hover:opacity-100">{item.acao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


