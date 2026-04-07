import React, { useState } from 'react'
import { Pizza, Soup, Utensils, Salad, Clock, Users, X } from 'lucide-react'

const receitas = [
  {
    nome: 'Pizza Margherita',
    icon: Pizza,
    tempo: '40 min',
    porcoes: 4,
    ingredientes: ['Massa pronta', 'Tomates da horta', 'Manjericão fresco', 'Mussarela', 'Azeite', 'Sal', 'Alho'],
    preparo: 'Pré-aqueça o forno a 220°C. Abra a massa e espalhe azeite com alho. Fatie os tomates e distribua sobre a massa. Cubra com mussarela. Asse por 20 minutos até dourar. Finalize com manjericão fresco.',
  },
  {
    nome: 'Macarrão ao Pesto',
    icon: Soup,
    tempo: '25 min',
    porcoes: 3,
    ingredientes: ['Macarrão', 'Manjericão fresco', 'Alho', 'Azeite extra virgem', 'Parmesão ralado', 'Castanha', 'Sal'],
    preparo: 'Cozinhe o macarrão. No processador, bata o manjericão, alho, castanhas e azeite. Misture o parmesão e tempere. Misture o pesto com a massa quente.',
  },
  {
    nome: 'Bruschetta Especial',
    icon: Utensils,
    tempo: '15 min',
    porcoes: 4,
    ingredientes: ['Pão italiano', 'Tomates da horta', 'Manjericão fresco', 'Alho', 'Azeite', 'Sal', 'Pimenta'],
    preparo: 'Toste o pão. Esfregue alho cru. Pique os tomates, tempere com azeite, sal e pimenta. Distribua sobre o pão. Finalize com manjericão.',
  },
  {
    nome: 'Salada de Beterraba',
    icon: Salad,
    tempo: '35 min',
    porcoes: 3,
    ingredientes: ['Beterraba da horta', 'Alface da horta', 'Azeite', 'Vinagre balsâmico', 'Sal', 'Queijo feta'],
    preparo: 'Cozinhe a beterraba. Monte a salada com alface e beterraba em cubos. Tempere com azeite, vinagre balsâmico e sol. Finalize com queijo.',
  },
]

export default function Receitas() {
  const [selecionada, setSelecionada] = useState(null)

  return (
    <section id="receitas" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">04 / Culinária Acadêmica</span>
          <h2 className="section-title">Receitas com nossos cultivos</h2>
          <p className="text-spotify-silver max-w-2xl font-bold uppercase tracking-wider text-[11px] mt-2">Clique em uma receita para ver o modo de preparo completo.</p>
        </div>

        {/* Grid de receitas (Spotify style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {receitas.map(r => (
            <button key={r.nome} onClick={() => setSelecionada(r)}
              className="bg-spotify-surface rounded-lg p-6 text-left hover:bg-spotify-card transition-all duration-300 group shadow-med flex flex-col h-full ring-1 ring-white/5 active:scale-95">
              <div className="w-16 h-16 bg-spotify-mid rounded-xl flex items-center justify-center mb-6 group-hover:bg-spotify-green transition-colors duration-300 shadow-heavy">
                <r.icon className="w-8 h-8 text-spotify-green group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-bold text-white mb-2 tracking-tight line-clamp-1">{r.nome}</h3>
              <div className="flex gap-3 text-[11px] text-spotify-silver font-black uppercase tracking-widest mb-4">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {r.tempo}</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {r.porcoes} p</span>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                {r.ingredientes.slice(0, 2).map(ing => (
                  <span key={ing} className="bg-spotify-mid text-spotify-silver text-[10px] px-2 py-0.5 rounded-sm font-black uppercase">{ing}</span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal Spotify Style */}
      {selecionada && (
        <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-6 backdrop-blur-md animate-in zoom-in-95" onClick={() => setSelecionada(null)}>
          <div className="bg-spotify-surface rounded-xl max-w-xl w-full p-8 shadow-heavy border border-white/10" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-spotify-black rounded-2xl flex items-center justify-center shadow-heavy border border-white/5">
                  <selecionada.icon className="w-10 h-10 text-spotify-green" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tighter mb-2">{selecionada.nome}</h3>
                  <div className="flex gap-4 text-xs text-spotify-green font-black uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {selecionada.tempo}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {selecionada.porcoes} porções</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelecionada(null)} className="text-spotify-muted hover:text-white transition-colors">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[2px] text-spotify-silver mb-4">Ingredientes</h4>
                <ul className="space-y-3">
                  {selecionada.ingredientes.map(ing => (
                    <li key={ing} className="text-sm text-white font-bold flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-spotify-green rounded-full shadow-[0_0_8px_#1ed760]" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[2px] text-spotify-silver mb-4">Modo de Preparo</h4>
                <p className="text-sm text-spotify-silver leading-relaxed font-bold">{selecionada.preparo}</p>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 text-center">
              <button className="btn-spotify-green w-full font-black uppercase tracking-widest" onClick={() => setSelecionada(null)}>Bom Apetite!</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}


