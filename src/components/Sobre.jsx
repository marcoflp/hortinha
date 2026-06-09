import React from 'react'
import { Microscope, Heart, Users } from 'lucide-react'

const pilares = [
  { icon: Heart, title: 'Objetivo Geral', desc: 'Capacitar a comunidade acadêmica do IFSul para planejar, implantar e manter uma horta sustentável, promovendo consumo de alimentos saudáveis e educação ambiental.' },
  { icon: Microscope, title: 'Cultivo Orgânico', desc: 'Ensinar técnicas básicas de cultivo orgânico e promover a conscientização sobre alimentação saudável na comunidade acadêmica.' },
  { icon: Users, title: 'Integração Comunitária', desc: 'Estimular a troca de saberes e a integração da comunidade, além de desenvolver um site com chatbot para consultas sobre cultivo.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-spotify-black px-6">
      <div className="max-w-full mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="mb-12 max-w-7xl mx-auto">
          <span className="section-label">01 / Sobre o Projeto</span>
          <h2 className="section-title">O que é o Semeando Saúde?</h2>
          <p className="text-spotify-silver mt-4 text-base font-medium leading-relaxed">
            Desenvolvido por estudantes voluntários do <span className="text-white font-bold">IFSul Campus Passo Fundo</span>, 
            o projeto capacita a comunidade acadêmica para planejar, implantar e manter uma horta sustentável, 
            promovendo <span className="text-spotify-green">alimentação saudável</span> e <span className="text-spotify-green">educação ambiental</span>.
          </p>
          <p className="text-spotify-silver mt-3 text-base font-medium leading-relaxed">
            <span className="text-white font-bold">Equipe executora:</span> Frederico Parise Taufer, Marco Antônio Dias Felipi, 
            Murilo Bertella Ossanes e Victor do Amarante dos Santos.
          </p>
        </div>

        {/* Cards dos pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pilares.map(p => (
            <div key={p.title} className="bg-spotify-surface rounded-lg p-8 hover:bg-spotify-card transition-all duration-300 group cursor-default shadow-med items-center text-center">
              <div className="w-16 h-16 bg-spotify-mid rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-spotify-green transition-colors duration-300">
                <p.icon className="w-8 h-8 text-spotify-green group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{p.title}</h3>
              <p className="text-spotify-silver text-sm leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


