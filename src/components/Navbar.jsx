import React, { useState, useEffect } from 'react'
import { Leaf, MessageSquareText, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Histórico', href: '/#timeline' },
  { label: 'Cultivos', href: '/#catalogo' },
  { label: 'Galeria', href: '/#galeria' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Receitas', href: '/#receitas' },
  { label: 'Dicas', href: '/#dicas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isChat = location.pathname === '/chat'

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isChat ? 'bg-spotify-black/95 backdrop-blur-md shadow-heavy' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-white text-xl">
          <Leaf className="text-spotify-green w-6 h-6" />
          <span className="tracking-tight">Semeando<span className="text-spotify-green font-black"> Saúde</span></span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-[13px] font-bold text-spotify-silver hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/chat" className={`flex items-center gap-2 px-6 py-2 rounded-pill text-[13px] font-bold transition-all ${isChat ? 'bg-spotify-green text-black' : 'bg-white text-black hover:scale-105'}`}>
              <MessageSquareText className="w-4 h-4" />
              IA Horta
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white transition-colors hover:text-spotify-green" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-spotify-surface border-t border-white/10 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-lg font-bold text-spotify-silver hover:text-white transition-colors capitalize">
              {l.label}
            </a>
          ))}
          <Link to="/chat" onClick={() => setOpen(false)} className="bg-spotify-green text-black text-center py-4 rounded-pill font-black flex items-center justify-center gap-2">
            <MessageSquareText className="w-5 h-5" />
            CONVERSAR COM IA
          </Link>
        </div>
      )}
    </nav>
  )
}


