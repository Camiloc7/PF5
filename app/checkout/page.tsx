// "use client"

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { Wallet } from '@mercadopago/sdk-react'
// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import { useToast } from '@/components/ui/use-toast'
// import { supabase } from '@/lib/supabase'

// interface CartItem {
//   id: string
//   name: string
//   price: number
//   quantity: number
// }

// export default function Checkout() {
//   const router = useRouter()
//   const { toast } = useToast()
//   const [preferenceId, setPreferenceId] = useState<string>('')
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const loadCart = async () => {
//       const { data: { session } } = await supabase.auth.getSession()
//       if (!session) {
//         router.push('/auth/sign-in')
//         return
//       }

//       // Get cart items from your cart table or local storage
//       // This is a placeholder - implement according to your cart storage method
//       const items = [] // Load your cart items here
//       setCartItems(items)
      
//       if (items.length > 0) {
//         try {
//           const response = await fetch('/api/create-preference', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               items,
//               userId: session.user.id,
//             }),
//           })

//           const data = await response.json()
//           if (data.preferenceId) {
//             setPreferenceId(data.preferenceId)
//           } else {
//             throw new Error('No preference ID received')
//           }
//         } catch (error) {
//           toast({
//             variant: "destructive",
//             title: "Error",
//             description: "Could not initialize payment",
//           })
//         }
//       }
//       setIsLoading(false)
//     }

//     loadCart()
//   }, [router, toast])

//   if (isLoading) {
//     return (
//       <div className="container mx-auto py-8">
//         <Card className="p-6">
//           <div className="text-center">Loading checkout...</div>
//         </Card>
//       </div>
//     )
//   }

//   if (cartItems.length === 0) {
//     return (
//       <div className="container mx-auto py-8">
//         <Card className="p-6">
//           <div className="text-center">
//             <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
//             <Button onClick={() => router.push('/shop')}>
//               Continue Shopping
//             </Button>
//           </div>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <Card className="p-6">
//         <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
//         <div className="mb-8">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex justify-between py-2">
//               <span>{item.name} x {item.quantity}</span>
//               <span>${item.price * item.quantity}</span>
//             </div>
//           ))}
//           <div className="border-t mt-4 pt-4">
//             <div className="flex justify-between font-bold">
//               <span>Total</span>
//               <span>
//                 ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}
//               </span>
//             </div>
//           </div>
//         </div>

//         {preferenceId && (
//           <div className="w-full flex justify-center">
//             <Wallet 
//               initialization={{ preferenceId }}
//               customization={{ texts: { valueProp: 'smart_option' } }}
//             />
//           </div>
//         )}
//       </Card>
//     </div>
//   )
// }



"use client";


import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Wallet } from '@mercadopago/sdk-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { supabase } from '@/lib/supabase'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

export default function Checkout() {
  const router = useRouter()
  const { toast } = useToast()
  const [preferenceId, setPreferenceId] = useState<string>('')
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadCart = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/auth/sign-in')
        return
      }

      // Get cart items from your cart table or local storage
      // This is a placeholder - implement according to your cart storage method
      const items: CartItem[] = [] // Declaramos explícitamente el tipo de 'items' como un arreglo de 'CartItem'
      setCartItems(items)
      
      if (items.length > 0) {
        try {
          const response = await fetch('/api/create-preference', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              items,
              userId: session.user.id,
            }),
          })

          const data = await response.json()
          if (data.preferenceId) {
            setPreferenceId(data.preferenceId)
          } else {
            throw new Error('No preference ID received')
          }
        } catch (error) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "Could not initialize payment",
          })
        }
      }
      setIsLoading(false)
    }

    loadCart()
  }, [router, toast])

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-6">
          <div className="text-center">Loading checkout...</div>
        </Card>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-8">
        <Card className="p-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <Button onClick={() => router.push('/shop')}>
              Continue Shopping
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>
                ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}
              </span>
            </div>
          </div>
        </div>

        {preferenceId && (
          <div className="w-full flex justify-center">
            <Wallet 
              initialization={{ preferenceId }}
              customization={{ texts: { valueProp: 'smart_option' } }}
            />
          </div>
        )}
      </Card>
    </div>
  )
}
