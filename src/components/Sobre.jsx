import React from 'react'
import { Microscope, Heart, Users } from 'lucide-react'

const pilares = [
  { icon: Heart, title: 'Alimentação Nutritiva', desc: 'Promovemos o consumo de alimentos orgânicos e saudáveis cultivados no próprio campus para uma dieta equilibrada.' },
  { icon: Microscope, title: 'Tecnologia Sustentável', desc: 'Aplicamos técnicas de agroecologia urbana e monitoramento inteligente para otimizar o cultivo acadêmico.' },
  { icon: Users, title: 'Hortas Comunitárias', desc: 'Estimulamos a troca de saberes e a integração entre estudantes e comunidade através do cuidado coletivo.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-spotify-black px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da seção */}
        <div className="mb-12">
          <span className="section-label">01 / Sobre o Projeto</span>
          <h2 className="section-title">O que é o Semeando Saúde?</h2>
          <p className="text-spotify-silver mt-4 max-w-3xl text-base font-medium leading-relaxed">
            Desenvolvido por estudantes voluntários do <span className="text-white font-bold">IFSul Campus Passo Fundo</span>, 
            o projeto une <span className="text-spotify-green">inovação tecnológica</span>, nutrição e educação ambiental para criar um ecossistema sustentável.
          </p>
        </div>

        {/* Cards dos pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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


