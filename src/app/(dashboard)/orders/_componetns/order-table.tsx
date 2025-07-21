"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const initialOrders = [
  {
    id: "275936",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Shipping",
    date: "8 Dec, 2025",
  },
  {
    id: "275937",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Processing",
    date: "8 Dec, 2025",
  },
  {
    id: "275938",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Completed",
    date: "8 Dec, 2025",
  },
  {
    id: "275939",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Shipping",
    date: "8 Dec, 2025",
  },
  {
    id: "275940",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Processing",
    date: "8 Dec, 2025",
  },
  {
    id: "275941",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Completed",
    date: "8 Dec, 2025",
  },
  {
    id: "275942",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Shipping",
    date: "8 Dec, 2025",
  },
  {
    id: "275943",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Processing",
    date: "8 Dec, 2025",
  },
  {
    id: "275944",
    customer: {
      name: "Bessie Edwards",
      email: "darrellsteward@gmail.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$250",
    paymentMethod: "Stripe",
    status: "Completed",
    date: "8 Dec, 2025",
  },
]

export function OrderTable() {
  const [orders, setOrders] = useState(initialOrders)

  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Shipping":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Processing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return ""
    }
  }

  return (
    <div className="p-4 md:p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Order</h1>
        <div className="text-sm text-muted-foreground">Dashboard {">"} Order</div>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Order Id</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={order.id} className={index % 2 === 1 ? "bg-muted/50" : ""}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                      <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt="Avatar" />
                      <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-0.5">
                      <div className="font-medium">{order.customer.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">{order.customer.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={order.product.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={order.product.name}
                      className="rounded-md object-cover"
                    />
                    <span className="font-medium">{order.product.name}</span>
                  </div>
                </TableCell>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className={`h-auto px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Shipping")}>
                        Shipping
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Processing")}>
                        Processing
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Completed")}>
                        Completed
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Link href={`/orders/${order.id}`}>
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                      <span className="sr-only">View order details</span>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between p-4 border-t">
          <div className="text-sm text-muted-foreground">Showing 1 to 7 of 12 results</div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">...</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">17</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
