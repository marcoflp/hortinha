import React from 'react'

const dicas = [
  { icon: '💧', titulo: 'Irrigação Correta', desc: 'Regue pela manhã ou ao entardecer para evitar evaporação. Prefira irrigação na base das plantas.' },
  { icon: '☀️', titulo: 'Luz Solar', desc: 'A maioria das hortaliças precisa de 4 a 6 horas de sol direto por dia para um crescimento saudável.' },
  { icon: '🌱', titulo: 'Espaçamento', desc: 'Respeite o espaço entre plantas para evitar competição por nutrientes e facilitar a circulação de ar.' },
  { icon: '✂️', titulo: 'Poda Regular', desc: 'Retire folhas amareladas e faça podas periódicas para estimular o crescimento de novas folhas.' },
]

export default function Dicas() {
  return (
    <section id="dicas" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Boas Práticas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Dicas de Cultivo</h2>
          <p className="text-gray-500 mt-3">Pequenos cuidados que fazem grande diferença na sua horta.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dicas.map(d => (
            <div key={d.titulo} className="flex gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all">
              <div className="text-3xl shrink-0">{d.icon}</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1">{d.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
