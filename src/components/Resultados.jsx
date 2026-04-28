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
      </div>
    </section>
  )
}


