'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Heart, User, Menu, X, Search, Paintbrush, Sun, Moon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState('default')

  // Estado para simular si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Cargar el tema desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'default'
    setTheme(savedTheme)
    if (savedTheme === 'alt') {
      document.documentElement.classList.add('theme-alt')
    } else {
      document.documentElement.classList.remove('theme-alt')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'default' ? 'alt' : 'default'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('theme-alt')
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Paintbrush className="h-6 w-6 text-[#00cb9a]" />
            <span className="text-xl font-bold">INK3D</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:ml-8 space-x-8">
            <Link href="/shop" className="text-sm font-medium hover:text-[#00cb9a] transition-colors">
              Tienda
            </Link>
            <Link href="/magazine" className="text-sm font-medium hover:text-[#00cb9a] transition-colors">
              Magazine
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-[#00cb9a] transition-colors">
              Comunidad
            </Link>
            <Link href="/trends" className="text-sm font-medium hover:text-[#00cb9a] transition-colors">
              Tendencias
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Botones de búsqueda */}
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full max-w-[200px] md:max-w-[300px]"
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>
            )}

            {/* Icono de carrito siempre visible */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Si el usuario está autenticado, mostrar los iconos de favoritos y usuario */}
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>

                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </>
            ) : (
              <>
                {/* Si no está autenticado, mostrar los botones de login y registro */}
                <Link href="/auth/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
                  Iniciar Sesión
                </Link>
                <Link href="/auth/register" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
                  Registrarse
                </Link>
              </>
            )}

            {/* Botón de cambio de tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-primary text-black dark:text-white hover:bg-secondary transition duration-300"
            >
              {theme === 'default' ? <Moon size={24} /> : <Sun size={24} />}
            </button>

            {/* Botón de menú móvil */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-dark">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-background/95 backdrop-blur">
          <Link href="/shop" className="text-dark hover:text-primary">Tienda</Link>
          <Link href="/magazine" className="text-dark hover:text-primary">Magazine</Link>
          <Link href="/community" className="text-dark hover:text-primary">Comunidad</Link>
          <Link href="/auth/login" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
            Iniciar Sesión
          </Link>
          <Link href="/auth/register" className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-primary transition">
            Registrarse
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
