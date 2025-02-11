"use client";


import { redirect } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { XCircle } from 'lucide-react'

export default function CheckoutFailure() {
  return (
    <div className="container mx-auto py-16">
      <Card className="max-w-md mx-auto p-8 text-center">
        <div className="flex justify-center mb-4">
          <XCircle className="h-16 w-16 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
        <p className="text-muted-foreground mb-8">
          We couldn&apos;t process your payment. Please try again or contact support if the problem persists.
        </p>
        <div className="space-y-4">
          <Button 
            className="w-full"
            onClick={() => redirect('/checkout')}
          >
            Try Again
          </Button>
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => redirect('/support')}
          >
            Contact Support
          </Button>
        </div>
      </Card>
    </div>
  )
}