import React from 'react'
import { Droplets, Sun, Maximize, Scissors } from 'lucide-react'

const dicas = [
  { icon: Droplets, titulo: 'Irrigação', desc: 'Regue cedo ou ao entardecer na base das plantas.' },
  { icon: Sun, titulo: 'Luz Solar', desc: 'Hortaliças precisam de 4 a 6 horas de sol direto.' },
  { icon: Maximize, titulo: 'Espaço', desc: 'Respeite a distância para evitar competição.' },
  { icon: Scissors, titulo: 'Poda', desc: 'Retire folhas velhas para estimular novas.' },
]

export default function Dicas() {
  return (
    <section id="dicas" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">06 / Melhores Práticas</span>
          <h2 className="section-title">Dicas de Cultivo</h2>
          <p className="text-spotify-silver max-w-2xl font-bold uppercase tracking-widest text-[11px] mt-2">Pequenos cuidados que fazem grande diferença na sua horta.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dicas.map(d => (
            <div key={d.titulo} className="flex gap-5 p-6 rounded-lg bg-spotify-surface border border-white/5 hover:bg-spotify-card transition-all duration-300 group shadow-med items-center ring-1 ring-white/5">
              <div className="bg-spotify-mid p-3 rounded-md group-hover:bg-spotify-green transition-colors duration-300">
                <d.icon className="w-6 h-6 text-spotify-green group-hover:text-black transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 tracking-tight">{d.titulo}</h3>
                <p className="text-spotify-silver text-[13px] leading-snug font-bold">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


