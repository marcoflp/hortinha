import React, { useState, useEffect } from 'react'
import foto1 from '../img/1.jpg'
import foto2 from '../img/2.jpg'
import foto3 from '../img/3.jpg'
import foto5 from '../img/5.jpg'
import foto6 from '../img/6.jpg'
import foto7 from '../img/7.jpg'
import foto8 from '../img/8.jpg'
import foto12 from '../img/12.jpg'
import foto9 from '../img/9.jpg'
import foto11 from '../img/11.jpg'
import foto150 from '../img/150.jpg'
import foto10 from '../img/10.jpg'
import funcionalidades from '../img/funcionalidades.jpg'
import colheita1 from '../img/colheita1.jpg'
import colheita2 from '../img/colheita2.jpg'
import coffeebreak from '../img/coffeebreak.jpg'
import remocao from '../img/remocao.jpg'
import desenvolvimento from '../img/desenvolvimento.png'
import desenvolvimento2 from '../img/desenvolviment_o.png'
import desenvolvimento3 from '../img/desenvolvimen_to.png'

const fotos = [
  { src: foto1, legenda: 'Confecção dos litrões', data: '23/Set/2025' },
  { src: foto2, legenda: 'Plantio inicial', data: '30/Set/2025' },
  { src: foto3, legenda: 'Oficina comunitária', data: '07/Out/2025' },
  { src: foto5, legenda: 'Semana Acadêmica', data: '14/Out/2025' },
  { src: foto6, legenda: 'Plantio dos tomates', data: '21/Out/2025' },
  { src: foto7, legenda: 'Suporte dos tomates', data: '11/Nov/2025' },
  { src: foto8, legenda: 'Coleta de resultados', data: '18/Nov/2025' },
  { src: foto150, legenda: 'Preparação dos baldes', data: '03/Mar/2026' },
  { src: foto9, legenda: 'Plantio de coqueiros', data: '10/Mar/2026' },
  { src: foto11, legenda: 'Plantio de hortaliças', data: '10/Mar/2026' },
  { src: foto10, legenda: 'Manutenção da horta', data: '17/Mar/2026' },
  { src: foto12, legenda: 'Desenvolvimento do site', data: '24/Mar/2026' },
  { src: funcionalidades, legenda: 'Novas funcionalidades', data: '14/Abr/2026' },
  { src: colheita1, legenda: 'Primeira colheita', data: '05/Mai/2026' },
  { src: coffeebreak, legenda: 'Coffee Break', data: '05/Mai/2026' },
  { src: colheita2, legenda: 'Segunda colheita', data: '12/Mai/2026' },
  { src: desenvolvimento, legenda: 'Desenvolvimento do site', data: '19/Mai/2026' },
  { src: desenvolvimento2, legenda: 'Desenvolvimento do site', data: '26/Mai/2026' },
  { src: desenvolvimento3, legenda: 'Desenvolvimento do site', data: '02/Jun/2026'},
  { src: remocao, legenda: 'Remoção das estruturas', data: '09/Jun/2026' }
]

export default function Galeria() {
  const [indiceAmpliada, setIndiceAmpliada] = useState(null)

  const irProxima = () => {
    setIndiceAmpliada((prev) => (prev + 1) % fotos.length)
  }

  const irAnterior = () => {
    setIndiceAmpliada((prev) => (prev - 1 + fotos.length) % fotos.length)
  }

  // Controle via teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (indiceAmpliada === null) return
      
      if (e.key === 'ArrowRight') {
        irProxima()
      } else if (e.key === 'ArrowLeft') {
        irAnterior()
      } else if (e.key === 'Escape') {
        setIndiceAmpliada(null)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [indiceAmpliada])

  return (
    <section id="galeria" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">04 / Momentos</span>
          <h2 className="section-title">Galeria de Fotos</h2>
          <p className="text-spotify-silver max-w-2xl font-medium">Registros das atividades realizadas durante o projeto Semeando Saúde em 2025 e 2026.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fotos.map((foto, i) => (
            <button key={i} onClick={() => setIndiceAmpliada(i)}
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
      {indiceAmpliada !== null && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col items-center justify-center p-8 backdrop-blur-sm animate-in fade-in" onClick={() => setIndiceAmpliada(null)}>
          <button className="absolute top-8 right-8 text-white text-4xl hover:text-spotify-green transition-colors">✕</button>
          
          <div className="max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <div className="relative group w-full bg-spotify-surface rounded-2xl overflow-hidden shadow-heavy">
               <img src={fotos[indiceAmpliada].src} alt={fotos[indiceAmpliada].legenda} className="w-full max-h-[70vh] object-contain" />
               
               {/* Botões de navegação */}
               <button 
                 onClick={irAnterior}
                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-spotify-green/90 hover:bg-spotify-green text-black p-3 rounded-full text-2xl font-bold transition-all duration-200 hover:scale-110">
                 ‹
               </button>
               <button 
                 onClick={irProxima}
                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-spotify-green/90 hover:bg-spotify-green text-black p-3 rounded-full text-2xl font-bold transition-all duration-200 hover:scale-110">
                 ›
               </button>

               {/* Indicador de posição */}
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full text-spotify-green font-bold text-sm">
                 {indiceAmpliada + 1} de {fotos.length}
               </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{fotos[indiceAmpliada].legenda}</h3>
              <p className="text-spotify-green font-black uppercase tracking-[2px] text-sm">{fotos[indiceAmpliada].data} · IFSul Passo Fundo</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

