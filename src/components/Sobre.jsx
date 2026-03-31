import React from 'react'

const pilares = [
  { icon: '🥗', title: 'Alimentação Saudável', desc: 'Promover o consumo de alimentos orgânicos e saudáveis cultivados no próprio campus, incentivando hábitos alimentares melhores.' },
  { icon: '🌱', title: 'Educação Ambiental', desc: 'Ensinar técnicas de cultivo orgânico e conscientizar a comunidade acadêmica sobre sustentabilidade e agroecologia urbana.' },
  { icon: '🤝', title: 'Integração Comunitária', desc: 'Estimular a troca de saberes, a realização de oficinas e a integração entre estudantes, professores e comunidade.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-14">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Sobre o Projeto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            O que é o Semeando Saúde?
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Desenvolvido por estudantes voluntários do IFSul Campus Passo Fundo, o projeto capacita
            a comunidade acadêmica para planejar, implantar e manter uma horta sustentável,
            unindo tecnologia, nutrição e educação ambiental.
          </p>
        </div>

        {/* Cards dos pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pilares.map(p => (
            <div key={p.title} className="bg-green-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
