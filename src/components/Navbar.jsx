import React, { useState, useEffect } from 'react'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Histórico', href: '#timeline' },
  { label: 'Cultivos', href: '#catalogo' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Receitas', href: '#receitas' },
  { label: 'Dicas', href: '#dicas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-green-700 text-lg">
          <span className="text-2xl">🌱</span> Semeando Saúde
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-600" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-600 hover:text-green-600">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
