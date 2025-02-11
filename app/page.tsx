// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { TrendingUp, Users, ShoppingBag } from 'lucide-react'

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-[600px] flex items-center justify-center">
//         <div 
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
//           }}
//         >
//           <div className="absolute inset-0 bg-black/40" />
//         </div>
        
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">Descubre Tu Estilo</h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
//             Únete a nuestra comunidad de entusiastas de la moda y explora diseños únicos inspirados en Asia.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-[#00cb9a] hover:bg-[#00f1b5]">
//               Comprar Ahora
//             </Button>
//             <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
//               Unirse a la Comunidad
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="p-6 flex flex-col items-center text-center">
//               <ShoppingBag className="h-12 w-12 text-[#00cb9a] mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Colecciones Curadas</h3>
//               <p className="text-muted-foreground">
//                 Descubre piezas de moda asiática seleccionadas de diseñadores emergentes
//               </p>
//             </Card>
            
//             <Card className="p-6 flex flex-col items-center text-center">
//               <Users className="h-12 w-12 text-[#00cb9a] mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Comunidad Vibrante</h3>
//               <p className="text-muted-foreground">
//                 Conéctate con entusiastas de la moda y comparte tu viaje de estilo
//               </p>
//             </Card>
            
//             <Card className="p-6 flex flex-col items-center text-center">
//               <TrendingUp className="h-12 w-12 text-[#00cb9a] mb-4" />
//               <h3 className="text-xl font-semibold mb-2">Últimas Tendencias</h3>
//               <p className="text-muted-foreground">
//                 Mantente actualizado con las nuevas tendencias y estilos de moda asiática
//               </p>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Featured Products Preview */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Lo Más Tendencia</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[1, 2, 3, 4].map((item) => (
//               <Link href={`/shop/product-${item}`} key={item} className="group">
//                 <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
//                   <img
//                     src={`https://images.unsplash.com/photo-151657533448${item}-f85287c2c82d?auto=format&fit=crop&w=500&q=80`}
//                     alt={`Producto destacado ${item}`}
//                     className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="font-medium mb-2">Producto Destacado {item}</h3>
//                 <p className="text-muted-foreground">$99.99</p>
//               </Link>
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <Button size="lg">Ver Todos los Productos</Button>
//           </div>
//         </div>
//       </section>

//       {/* Community Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               Conéctate con entusiastas de la moda, comparte tu estilo y déjate inspirar por otros en nuestra comunidad en crecimiento.
//             </p>
//             <Button size="lg" className="bg-[#00cb9a] hover:bg-[#00f1b5]">
//               Explorar Comunidad
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }





import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TrendingUp, Users, ShoppingBag } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-light text-dark dark:bg-black dark:text-white font-body transition-colors">
      {/* Hero Section (Banner) */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Descubre Tu Estilo</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de entusiastas de la moda y explora diseños únicos inspirados en Asia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00cb9a] hover:bg-[#00f1b5]">
              Comprar Ahora
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Unirse a la Comunidad
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center">
              <ShoppingBag className="h-12 w-12 text-[#00cb9a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Colecciones Curadas</h3>
              <p className="text-muted-foreground">
                Descubre piezas de moda asiática seleccionadas de diseñadores emergentes
              </p>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-[#00cb9a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comunidad Vibrante</h3>
              <p className="text-muted-foreground">
                Conéctate con entusiastas de la moda y comparte tu viaje de estilo
              </p>
            </Card>
            
            <Card className="p-6 flex flex-col items-center text-center">
              <TrendingUp className="h-12 w-12 text-[#00cb9a] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Últimas Tendencias</h3>
              <p className="text-muted-foreground">
                Mantente actualizado con las nuevas tendencias y estilos de moda asiática
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo Más Tendencia</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <Link href={`/shop/product-${item}`} key={item} className="group">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={`https://images.unsplash.com/photo-151657533448${item}-f85287c2c82d?auto=format&fit=crop&w=500&q=80`}
                    alt={`Producto destacado ${item}`}
                    width={500}
                    height={667}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2">Producto Destacado {item}</h3>
                <p className="text-muted-foreground">$99.99</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg">Ver Todos los Productos</Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conéctate con entusiastas de la moda, comparte tu estilo y déjate inspirar por otros en nuestra comunidad en crecimiento.
            </p>
            <Button size="lg" className="bg-[#00cb9a] hover:bg-[#00f1b5]">
              Explorar Comunidad
            </Button>
          </div>
        </div>
      </section>

      {/* Grid de Productos/Artículos */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-title text-center mb-8">Explora Nuestro Mundo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta Producto */}
          <div className="bg-light dark:bg-gray-800 p-4 shadow-lg rounded-lg transition-colors">
            <Image 
              src="/images/product1.jpg" 
              alt="Producto"
              width={300} 
              height={200} 
              className="rounded-lg" 
            />
            <h3 className="text-xl font-title mt-4">Producto Destacado</h3>
            <p className="text-sm text-dark dark:text-gray-300">Descripción breve del producto.</p>
            <Button className="mt-4 bg-primary text-white dark:bg-secondary dark:text-black">Ver Más</Button>
          </div>

          {/* Tarjeta Artículo */}
          <div className="bg-light dark:bg-gray-800 p-4 shadow-lg rounded-lg transition-colors">
            <Image 
              src="/images/article1.jpg" 
              alt="Artículo"
              width={300} 
              height={200} 
              className="rounded-lg" 
            />
            <h3 className="text-xl font-title mt-4">Artículo Destacado</h3>
            <p className="text-sm text-dark dark:text-gray-300">Breve descripción del artículo.</p>
            <Button className="mt-4 bg-secondary text-white dark:bg-primary dark:text-black">Leer Más</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
