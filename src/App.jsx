import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Timeline from './components/Timeline'
import Catalogo from './components/Catalogo'
import Galeria from './components/Galeria'
import Resultados from './components/Resultados'
import Receitas from './components/Receitas'
import Dicas from './components/Dicas'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Timeline />
      <Catalogo />
      <Galeria />
      <Resultados />
      <Receitas />
      <Dicas />
      <Footer />
    </div>
  )
}
