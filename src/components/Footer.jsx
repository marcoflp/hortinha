import React from 'react'
import { Leaf, Globe, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-spotify-black text-spotify-silver py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <div className="flex items-center gap-2 font-black text-white text-2xl mb-4 tracking-tighter uppercase">
            <Leaf className="text-spotify-green w-8 h-8" />
            Semeando <span className="text-spotify-green"> Saúde</span>
          </div>
          <p className="text-spotify-silver text-[11px] font-black mb-4 uppercase tracking-[2px]">IFSul Passo Fundo</p>
          <p className="text-spotify-muted text-sm font-bold leading-relaxed max-w-sm">
            Educação Pública, Gratuita e de Qualidade. <br />
            Projeto de Extensão em Agroecologia Urbana e Tecnologia Sustentável.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-[2]">
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[2px] text-white mb-6">Equipe Projeto</h4>
            <ul className="space-y-4 text-sm font-bold">
              {['Frederico', 'Marco', 'Murilo', 'Victor'].map(n => (
                <li key={n} className="hover:text-spotify-green cursor-default transition-colors">{n}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[2px] text-white mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm font-bold">
              {['Sobre', 'Cultivos', 'Receitas', 'Dicas'].map(item => (
                <li key={item}>
                  <a href={`/#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[2px] text-white mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li>
                <a 
                  href="http://passofundo.ifsul.edu.br/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Portal IFSul
                </a>
              </li>
              <li>
                <a 
                  href="http://passofundo.ifsul.edu.br/fale-conosco" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-black text-spotify-muted uppercase tracking-[2px] flex items-center gap-2">
          © {new Date().getFullYear()} PROJETO SEMEANDO SAÚDE
        </div>
      </div>
    </footer>
  )
}


