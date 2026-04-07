import React, { useState } from 'react'
import foto1 from '../img/1.jpg'
import foto2 from '../img/2.jpg'
import foto3 from '../img/3.jpg'
import foto5 from '../img/5.jpg'
import foto6 from '../img/6.jpg'
import foto7 from '../img/7.jpg'
import foto8 from '../img/8.jpg'

const fotos = [
  { src: foto1, legenda: 'Confecção dos litrões', data: '23/Set' },
  { src: foto2, legenda: 'Plantio inicial', data: '30/Set' },
  { src: foto3, legenda: 'Oficina comunitária', data: '07/Out' },
  { src: foto5, legenda: 'Semana Acadêmica', data: '14/Out' },
  { src: foto6, legenda: 'Plantio dos tomates', data: '21/Out' },
  { src: foto7, legenda: 'Suporte dos tomates', data: '11/Nov' },
  { src: foto8, legenda: 'Coleta de resultados', data: '18/Nov' },
]

export default function Galeria() {
  const [ampliada, setAmpliada] = useState(null)

  return (
    <section id="galeria" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">03 / Momentos</span>
          <h2 className="section-title">Galeria de Fotos</h2>
          <p className="text-spotify-silver max-w-2xl font-medium">Registros reais das atividades do projeto Semeando Saúde.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {fotos.map((foto, i) => (
            <button key={i} onClick={() => setAmpliada(foto)}
              className="group relative rounded-lg overflow-hidden bg-spotify-surface aspect-square flex items-center justify-center border border-white/5 hover:bg-spotify-card transition-all duration-300 shadow-med">

              <img src={foto.src} alt={foto.legenda}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />

              {/* Hover effect - Label like Spotify */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-white text-[11px] font-bold truncate tracking-tight">{foto.legenda}</p>
                <p className="text-spotify-green text-[10px] font-black uppercase tracking-widest">{foto.data}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Spotify Style */}
      {ampliada && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-8 backdrop-blur-sm animate-in fade-in" onClick={() => setAmpliada(null)}>
          <button className="absolute top-8 right-8 text-white text-4xl hover:text-spotify-green transition-colors">✕</button>
          
          <div className="max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="relative group w-full bg-spotify-surface rounded-2xl overflow-hidden shadow-heavy">
               <img src={ampliada.src} alt={ampliada.legenda} className="w-full max-h-[70vh] object-contain" />
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{ampliada.legenda}</h3>
              <p className="text-spotify-green font-black uppercase tracking-[2px] text-sm">{ampliada.data} · IFSul Passo Fundo</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

