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
  { src: foto2, legenda: 'Plantio inicial das hortaliças', data: '30/Set' },
  { src: foto3, legenda: 'Oficina com a comunidade', data: '07/Out' },
  { src: foto5, legenda: 'Semana Acadêmica IFSul', data: '14/Out' },
  { src: foto6, legenda: 'Plantio dos tomates', data: '21/Out' },
  { src: foto7, legenda: 'Estrutura de suporte dos tomates', data: '11/Nov' },
  { src: foto8, legenda: 'Coleta de resultados da horta vertical', data: '18/Nov' },
]

export default function Galeria() {
  const [ampliada, setAmpliada] = useState(null)

  return (
    <section id="galeria" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Registros</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Galeria de Fotos</h2>
          <p className="text-gray-500 mt-3">Momentos reais do projeto Semeando Saúde.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {fotos.map((foto, i) => (
            <button key={i} onClick={() => foto.src && setAmpliada(foto)}
              className="group relative rounded-2xl overflow-hidden bg-green-100 aspect-square flex items-center justify-center border border-gray-200 hover:shadow-lg transition-all">

              {foto.src ? (
                // Foto real
                <img src={foto.src} alt={foto.legenda}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              ) : (
                // Placeholder enquanto não há foto
                <div className="flex flex-col items-center gap-2 text-green-400 p-4">
                  <span className="text-4xl">📷</span>
                  <span className="text-xs text-center font-medium text-green-600">{foto.legenda}</span>
                </div>
              )}

              {/* Legenda sobre a foto */}
              {foto.src && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium">{foto.legenda}</p>
                  <p className="text-white/70 text-xs">{foto.data}</p>
                </div>
              )}

              {/* Badge de data no placeholder */}
              {!foto.src && (
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {foto.data}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Modal de foto ampliada */}
      {ampliada && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setAmpliada(null)}>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={ampliada.src} alt={ampliada.legenda} className="w-full rounded-2xl shadow-2xl" />
            <div className="text-center mt-3">
              <p className="text-white font-medium">{ampliada.legenda}</p>
              <p className="text-white/60 text-sm">{ampliada.data}</p>
            </div>
            <button onClick={() => setAmpliada(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">✕</button>
          </div>
        </div>
      )}
    </section>
  )
}
