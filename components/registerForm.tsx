'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'

export default function Registro() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string
    const phone = Number(formData.get('phone'))
    const address = formData.get('address') as string
    const city = formData.get('city') as string
    const country = formData.get('country') as string
    const bio = formData.get('bio') as string

    if (password !== confirmPassword) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Las contraseñas no coinciden',
      })
      setIsLoading(false)
      return
    }

    try {
      const res = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, confirmPassword, phone, address, city, country, bio }),
      })

      if (!res.ok) {
        throw new Error('Error al crear la cuenta. Inténtalo de nuevo.')
      }

      toast({
        title: 'Cuenta creada',
        description: 'Por favor, inicia sesión con tu nueva cuenta',
      })

      router.push('/auth/login')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error instanceof Error ? error.message : 'Ocurrió un error inesperado',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[400px] p-8">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Crea una cuenta</h1>
          <p className="text-sm text-muted-foreground">Ingresa tus datos para registrarte</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" name="name" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" name="email" type="email" placeholder="m@example.com" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" name="password" type="password" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" name="phone" type="tel" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Input id="address" name="address" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Ciudad</Label>
            <Input id="city" name="city" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">País</Label>
            <Input id="country" name="country" required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">Biografía</Label>
            <Input id="bio" name="bio" required disabled={isLoading} />
          </div>
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? 'Creando cuenta...' : 'Registrarse'}
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          <Link href="/auth/login" className="text-[#00cb9a] hover:underline">
            ¿Ya tienes una cuenta? Inicia sesión
          </Link>
        </div>
      </Card>
    </div>
  )
}
