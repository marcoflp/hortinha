import React from 'react'
import { ArrowRight, Sprout } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-spotify-black flex items-center justify-center text-white px-6 pt-20 overflow-hidden">
      {/* Background gradient effect like Spotify */}
      <div className="absolute inset-0 bg-gradient-to-b from-spotify-green/20 via-transparent to-transparent pointer-events-none"></div>

      {/* Abstract geometric shapes for a technical feel */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-spotify-green/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl text-center">
        {/* Badge institucional */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-spotify-silver text-[11px] font-black px-5 py-2 rounded-full mb-10 tracking-[2px] uppercase border border-white/10 shadow-heavy">

          IFSul - Campus Passo Fundo
        </div>

        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-10 tracking-tighter text-white">
          Semeando Saúde: <br />
          <span className="text-spotify-green">Hortas Comunitárias</span>
        </h1>

        <p className="text-lg md:text-2xl text-spotify-silver mb-12 max-w-3xl mx-auto font-bold leading-relaxed">
          Alimentação Nutritiva e Tecnologia Sustentável <br />
          <span className="text-white/60 font-medium text-lg">Unindo a comunidade acadêmica através do cultivo inteligente.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#sobre" className="btn-spotify-green min-w-[200px] flex items-center justify-center gap-2 group">
            Conhecer Projeto
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link to="/chat" className="btn-spotify-outline min-w-[200px] flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
            Falar com a IA
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 animate-bounce text-spotify-muted flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] font-black uppercase tracking-[3px]">Explorar</span>
          <ArrowRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  )
}


