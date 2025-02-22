// 'use client'

// import { useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Link from 'next/link'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import { Card } from '@/components/ui/card'
// import { useToast } from '@/components/ui/use-toast'
// import { supabase } from '@/lib/supabase'

// export default function Login() {
//   const router = useRouter()
//   const { toast } = useToast()
//   const [isLoading, setIsLoading] = useState(false)

//   async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     setIsLoading(true)

//     const formData = new FormData(event.currentTarget)
//     const email = formData.get('email') as string
//     const password = formData.get('password') as string

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     })

//     if (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error.message,
//       })
//     } else {
//       router.push('/')
//       router.refresh()
//     }

//     setIsLoading(false)
//   }

//   return (
//     <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
//       <Card className="w-full max-w-[400px] p-8">
//         <div className="flex flex-col space-y-2 text-center mb-8">
//           <h1 className="text-2xl font-semibold tracking-tight">Bienvenido de nuevo</h1>
//           <p className="text-sm text-muted-foreground">
//             Ingresa tu correo para iniciar sesión en tu cuenta
//           </p>
//         </div>
//         <form onSubmit={onSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="email">Correo electrónico</Label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="m@example.com"
//               required
//               disabled={isLoading}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="password">Contraseña</Label>
//             <Input
//               id="password"
//               name="password"
//               type="password"
//               required
//               disabled={isLoading}
//             />
//           </div>
//           <Button className="w-full" type="submit" disabled={isLoading}>
//             {isLoading ? "Iniciando sesión..." : "Login"}
//           </Button>
//         </form>
//         <div className="mt-4 text-center text-sm">
//           <Link href="/auth/register" className="text-[#00cb9a] hover:underline">
//             ¿No tienes una cuenta? Regístrate
//           </Link>
//         </div>
//       </Card>
//     </div>
//   )
// }


import LoginForm from '@/components/loginForm'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  )
}
