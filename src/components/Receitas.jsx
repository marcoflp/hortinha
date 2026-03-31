import React, { useState } from 'react'

const receitas = [
  {
    nome: 'Pizza Margherita da Horta',
    emoji: '🍕',
    tempo: '40 min',
    porcoes: 4,
    ingredientes: ['Massa de pizza pronta', 'Tomates da horta', 'Manjericão fresco da horta', 'Mussarela', 'Azeite', 'Sal', 'Alho'],
    preparo: 'Pré-aqueça o forno a 220°C. Abra a massa e espalhe azeite com alho amassado. Fatie os tomates frescos da horta e distribua sobre a massa. Cubra com mussarela fatiada. Asse por 20 minutos até dourar. Retire do forno e finalize com folhas de manjericão fresco da horta e um fio de azeite. Sirva imediatamente.',
  },
  {
    nome: 'Macarrão ao Pesto de Manjericão',
    emoji: '🍝',
    tempo: '25 min',
    porcoes: 3,
    ingredientes: ['Macarrão (espaguete ou penne)', 'Manjericão fresco da horta', 'Alho', 'Azeite extra virgem', 'Parmesão ralado', 'Castanha de caju ou pinhão', 'Sal', 'Pimenta'],
    preparo: 'Cozinhe o macarrão al dente conforme o pacote. No processador, bata o manjericão fresco, alho, castanhas e azeite até formar uma pasta. Misture o parmesão ralado e tempere com sal e pimenta. Escorra o macarrão reservando um pouco da água do cozimento. Misture o pesto com a massa, adicionando a água reservada para dar cremosidade. Sirva com parmesão extra.',
  },
  {
    nome: 'Bruschetta de Tomate e Manjericão',
    emoji: '🥖',
    tempo: '15 min',
    porcoes: 4,
    ingredientes: ['Pão italiano ou baguete', 'Tomates da horta', 'Manjericão fresco da horta', 'Alho', 'Azeite', 'Sal', 'Pimenta-do-reino'],
    preparo: 'Fatie o pão e toste no forno ou frigideira até dourar. Esfregue alho cru nas fatias ainda quentes. Pique os tomates em cubinhos, tempere com azeite, sal e pimenta. Distribua sobre as fatias de pão. Finalize com folhas de manjericão fresco rasgadas e um fio de azeite. Sirva como entrada ou lanche.',
  },
  {
    nome: 'Salada de Beterraba com Alface',
    emoji: '🥗',
    tempo: '35 min',
    porcoes: 3,
    ingredientes: ['Beterraba da horta', 'Alface da horta', 'Azeite', 'Vinagre balsâmico', 'Sal', 'Queijo feta ou cottage', 'Nozes (opcional)'],
    preparo: 'Cozinhe a beterraba com casca em água fervente por 25 minutos até ficar macia. Deixe esfriar, descasque e corte em cubos ou fatias. Lave e rasgue as folhas de alface. Monte a salada com a alface na base, beterraba por cima e queijo esfarelado. Tempere com azeite, vinagre balsâmico e sal. Finalize com nozes para crocância.',
  },
  {
    nome: 'Suco de Beterraba com Limão',
    emoji: '🧃',
    tempo: '10 min',
    porcoes: 2,
    ingredientes: ['Beterraba da horta', 'Suco de 2 limões', 'Gengibre', 'Água', 'Mel ou açúcar a gosto'],
    preparo: 'Descasque e pique a beterraba crua em pedaços. Bata no liquidificador com água, suco de limão e um pedaço pequeno de gengibre. Coe bem e adoce com mel a gosto. Sirva gelado. Rico em ferro, antioxidantes e vitamina C. Ótimo para energia e disposição.',
  },
  {
    nome: 'Beterraba Assada com Alecrim',
    emoji: '🫕',
    tempo: '50 min',
    porcoes: 4,
    ingredientes: ['Beterraba da horta', 'Azeite', 'Alecrim fresco', 'Alho', 'Sal grosso', 'Pimenta'],
    preparo: 'Pré-aqueça o forno a 200°C. Descasque a beterraba e corte em gomos. Tempere com azeite, alho fatiado, alecrim, sal grosso e pimenta. Envolva em papel alumínio e asse por 40 minutos. Abra o papel nos últimos 10 minutos para caramelizar. Sirva como acompanhamento de carnes ou como prato vegetariano com arroz.',
  },
]

export default function Receitas() {
  const [selecionada, setSelecionada] = useState(null)

  return (
    <section id="receitas" className="py-20 bg-green-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Da Horta para a Mesa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Receitas com nossos cultivos</h2>
          <p className="text-gray-500 mt-3">Clique em uma receita para ver o modo de preparo completo.</p>
        </div>

        {/* Grid de receitas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {receitas.map(r => (
            <button key={r.nome} onClick={() => setSelecionada(r)}
              className="bg-white rounded-2xl p-6 text-left hover:shadow-lg transition-all hover:-translate-y-1 border border-transparent hover:border-green-200">
              <div className="text-5xl mb-4">{r.emoji}</div>
              <h3 className="font-bold text-gray-800 mb-2">{r.nome}</h3>
              <div className="flex gap-3 text-xs text-gray-400">
                <span>⏱ {r.tempo}</span>
                <span>👥 {r.porcoes} porções</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {r.ingredientes.slice(0, 3).map(ing => (
                  <span key={ing} className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full">{ing}</span>
                ))}
                {r.ingredientes.length > 3 && (
                  <span className="text-xs text-gray-400">+{r.ingredientes.length - 3}</span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal de detalhes da receita */}
      {selecionada && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelecionada(null)}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-4xl">{selecionada.emoji}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2">{selecionada.nome}</h3>
                <div className="flex gap-3 text-xs text-gray-400 mt-1">
                  <span>⏱ {selecionada.tempo}</span>
                  <span>👥 {selecionada.porcoes} porções</span>
                </div>
              </div>
              <button onClick={() => setSelecionada(null)} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-gray-700 mb-2">Ingredientes</h4>
              <ul className="space-y-1">
                {selecionada.ingredientes.map(ing => (
                  <li key={ing} className="text-sm text-gray-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />{ing}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Modo de Preparo</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{selecionada.preparo}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
