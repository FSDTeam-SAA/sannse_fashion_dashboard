import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderDetailsProps {
  order: {
    id: string
    billingAddress: {
      name: string
      address: string
      email: string
      phone: string
    }
    shippingAddress: {
      name: string
      address: string
      email: string
      phone: string
    }
    paymentSummary: {
      orderId: string
      paymentMethod: string
      subtotal: string
      salesTax: string
      totalItems: string
      total: string
    }
    progress: {
      currentStep: number
      steps: string[]
    }
    products: {
      image: string
      description: string
      price: string
    }[]
  }
}

export function OrderDetails({ order }: OrderDetailsProps) {
  if (!order) {
    return <div className="p-6 text-center">Order not found.</div>
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Order Details</h1>
        <div className="text-sm text-muted-foreground">
          Dashboard {">"} Order {">"} Order Details
        </div>
      </div>
      <div className="border rounded-lg overflow-hidden p-6 bg-white dark:bg-gray-950">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{order.billingAddress.name}</p>
              <p>{order.billingAddress.address}</p>
              <p>{order.billingAddress.email}</p>
              <p>{order.billingAddress.phone}</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.email}</p>
              <p>{order.shippingAddress.phone}</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground grid gap-2">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span className="font-medium text-foreground">{order.paymentSummary.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span className="font-medium text-foreground">{order.paymentSummary.paymentMethod}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium text-foreground">{order.paymentSummary.subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Sales Tax:</span>
                <span className="font-medium text-foreground">{order.paymentSummary.salesTax}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Item:</span>
                <span className="font-medium text-foreground">{order.paymentSummary.totalItems}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold text-foreground">
                <span>Total:</span>
                <span>{order.paymentSummary.total}</span>
              </div>
            </CardContent>
          </Card>
        </div>

{/* order step  */}
        <div className="relative flex justify-between items-center mb-12 px-4">
          <div
            className="absolute left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 mx-auto"
            style={{ width: "calc(100% - 80px)" }}
          >
            <div
              className="h-full bg-red-500"
              style={{ width: `${((order.progress.currentStep - 1) / (order.progress.steps.length - 1)) * 100}%` }}
            />
          </div>
          {order.progress.steps.map((step, index) => (
            <div key={step} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 mb-[-50px] h-10 rounded-full flex items-center justify-center text-white font-bold
                  ${index + 1 <= order.progress.currentStep ? "bg-red-500" : "bg-gray-300 dark:bg-gray-600"}
                `}
              >
                {index + 1 <= order.progress.currentStep ? <CheckCircle className="h-6 w-6" /> : index + 1}
              </div>
              <span
                className={`mt-12 text-sm font-medium
                  ${index + 1 <= order.progress.currentStep ? "text-red-500" : "text-muted-foreground"}
                `}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {order.products.map((product, index) => (
            <Card key={index} className="flex items-center p-4 gap-4 bg-red-50 dark:bg-red-950/20">
              <Image
                src={product.image || "/placeholder.svg"}
                width={100}
                height={100}
                alt="Product image"
                className="rounded-md object-cover"
              />
              <div className="grid gap-1">
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <p className="font-bold text-lg">{product.price}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
