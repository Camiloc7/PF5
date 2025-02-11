"use client";


import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function CheckoutSuccess() {
  return (
    <div className="container mx-auto py-16">
      <Card className="max-w-md mx-auto p-8 text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-16 w-16 text-[#00cb9a]" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been processed successfully.
        </p>
        <div className="space-y-4">
          <Button 
            className="w-full"
            onClick={() => redirect('/orders')}
          >
            View Order
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => redirect('/shop')}
          >
            Continue Shopping
          </Button>
        </div>
      </Card>
    </div>
  )
}