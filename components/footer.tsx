import Link from 'next/link'
import { Paintbrush } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Paintbrush className="h-6 w-6 text-[#00cb9a]" />
              <span className="text-xl font-bold">INK3D</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tu destino para moda asiática única y comunidad.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tienda</h3>
            <ul className="space-y-2">
              <li><Link href="/shop/new-arrivals" className="text-sm text-muted-foreground hover:text-foreground">Novedades</Link></li>
              <li><Link href="/shop/bestsellers" className="text-sm text-muted-foreground hover:text-foreground">Más vendidos</Link></li>
              <li><Link href="/shop/collections" className="text-sm text-muted-foreground hover:text-foreground">Colecciones</Link></li>
              <li><Link href="/shop/sale" className="text-sm text-muted-foreground hover:text-foreground">Ofertas</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Comunidad</h3>
            <ul className="space-y-2">
              <li><Link href="/community/forum" className="text-sm text-muted-foreground hover:text-foreground">Foro</Link></li>
              <li><Link href="/community/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="/community/events" className="text-sm text-muted-foreground hover:text-foreground">Eventos</Link></li>
              <li><Link href="/community/gallery" className="text-sm text-muted-foreground hover:text-foreground">Galería de Estilo</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li><Link href="/support/contact" className="text-sm text-muted-foreground hover:text-foreground">Contáctanos</Link></li>
              <li><Link href="/support/faq" className="text-sm text-muted-foreground hover:text-foreground">Preguntas Frecuentes</Link></li>
              <li><Link href="/support/shipping" className="text-sm text-muted-foreground hover:text-foreground">Información de Envío</Link></li>
              <li><Link href="/support/returns" className="text-sm text-muted-foreground hover:text-foreground">Devoluciones</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 INK3D. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Política de Privacidad</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Términos de Servicio</Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">Política de Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
