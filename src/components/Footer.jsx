import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="flex items-center gap-2 font-bold text-white text-lg mb-1">
            <span>🌱</span> Semeando Saúde
          </div>
          <p className="text-green-300 text-sm">IFSul Campus Passo Fundo · Educação Pública 100% Gratuita</p>
          <p className="text-green-400 text-xs mt-1">Frederico · Marco · Murilo · Victor</p>
        </div>

        <div className="text-center text-sm text-green-400">
          <p>Cultivando saúde, sustentabilidade e tecnologia 💚</p>
          <p className="mt-1">© {new Date().getFullYear()} · Todos os direitos reservados</p>
        </div>

        <div className="flex gap-4 text-sm">
          {['Sobre', 'Cultivos', 'Receitas', 'Dicas'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-green-300 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
