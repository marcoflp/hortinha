import React from 'react'

export default function Hero() {
  return (
    // Gradiente verde como fundo do hero
    <section className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex items-center justify-center text-white px-4">
      <div className="max-w-3xl text-center">
        {/* Badge institucional */}
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          IFSul Passo Fundo · Educação Pública 100% Gratuita
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Semeando <br />
          <span className="text-green-200">Saúde</span>
        </h1>

        <p className="text-lg md:text-xl text-green-100 mb-10 max-w-xl mx-auto">
          Cultivando saúde, sustentabilidade e tecnologia no IFSul Campus Passo Fundo.
          Uma horta acadêmica que une comunidade, alimentação saudável e inovação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#sobre"
            className="bg-white text-green-700 font-semibold px-8 py-3 rounded-xl hover:bg-green-50 transition-colors shadow-lg">
            Saiba Mais
          </a>
          <a href="#catalogo"
            className="border-2 border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors">
            Ver Cultivos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce text-white/60 text-2xl">↓</div>
      </div>
    </section>
  )
}
