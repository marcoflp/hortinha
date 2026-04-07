import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Chatbot from './components/Chatbot'

function MainContent() {
  return (
    <>
      <Hero />
      <Sobre />
      <Timeline />
      <Catalogo />
      <Galeria />
      <Resultados />
      <Receitas />
      <Dicas />
    </>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-spotify-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
      {/* Ocultar footer no chat para foco total */}
      {location.pathname !== '/chat' && <Footer />}
    </div>
  )
}

