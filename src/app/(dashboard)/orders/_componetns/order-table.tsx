// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { Eye } from "lucide-react"

// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

// const initialOrders = [
//   {
//     id: "275936",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Shipping",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275937",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Processing",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275938",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Completed",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275939",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Shipping",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275940",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Processing",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275941",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Completed",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275942",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Shipping",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275943",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Processing",
//     date: "8 Dec, 2025",
//   },
//   {
//     id: "275944",
//     customer: {
//       name: "Bessie Edwards",
//       email: "darrellsteward@gmail.com",
//       avatar: "/placeholder-user.jpg",
//     },
//     product: {
//       name: "Westwood Shirt Men's Black",
//       image: "/placeholder.svg?height=64&width=64",
//     },
//     total: "$250",
//     paymentMethod: "Stripe",
//     status: "Completed",
//     date: "8 Dec, 2025",
//   },
// ]

// export function OrderTable() {
//   const [orders, setOrders] = useState(initialOrders)

//   const handleStatusChange = (orderId: string, newStatus: string) => {
//     setOrders((prevOrders) =>
//       prevOrders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)),
//     )
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "Shipping":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//       case "Processing":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//       case "Completed":
//         return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//       default:
//         return ""
//     }
//   }

//   return (
//     <div className="p-4 md:p-6">
//       <div className="flex items-center justify-between mb-4">
//         <h1 className="text-2xl font-bold">Order</h1>
//         <div className="text-sm text-muted-foreground">Dashboard {">"} Order</div>
//       </div>
//       <div className="border rounded-lg overflow-hidden">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Customer</TableHead>
//               <TableHead>Product</TableHead>
//               <TableHead>Order Id</TableHead>
//               <TableHead>Total</TableHead>
//               <TableHead>Payment Method</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Date</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {orders.map((order, index) => (
//               <TableRow key={order.id} className={index % 2 === 1 ? "bg-muted/50" : ""}>
//                 <TableCell>
//                   <div className="flex items-center gap-3">
//                     <Avatar className="hidden h-9 w-9 sm:flex">
//                       <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt="Avatar" />
//                       <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
//                     </Avatar>
//                     <div className="grid gap-0.5">
//                       <div className="font-medium">{order.customer.name}</div>
//                       <div className="hidden text-sm text-muted-foreground md:inline">{order.customer.email}</div>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center gap-3">
//                     <Image
//                       src={order.product.image || "/placeholder.svg"}
//                       width={48}
//                       height={48}
//                       alt={order.product.name}
//                       className="rounded-md object-cover"
//                     />
//                     <span className="font-medium">{order.product.name}</span>
//                   </div>
//                 </TableCell>
//                 <TableCell>{order.id}</TableCell>
//                 <TableCell>{order.total}</TableCell>
//                 <TableCell>{order.paymentMethod}</TableCell>
//                 <TableCell>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className={`h-auto px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}
//                       >
//                         {order.status}
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                       <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Shipping")}>
//                         Shipping
//                       </DropdownMenuItem>
//                       <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Processing")}>
//                         Processing
//                       </DropdownMenuItem>
//                       <DropdownMenuItem onClick={() => handleStatusChange(order.id, "Completed")}>
//                         Completed
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </TableCell>
//                 <TableCell>{order.date}</TableCell>
//                 <TableCell>
//                   <Link href={`/orders/${order.id}`}>
//                     <Button variant="ghost" size="icon">
//                       <Eye className="h-4 w-4" />
//                       <span className="sr-only">View order details</span>
//                     </Button>
//                   </Link>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <div className="flex items-center justify-between p-4 border-t">
//           <div className="text-sm text-muted-foreground">Showing 1 to 7 of 12 results</div>
//           <Pagination>
//             <PaginationContent>
//               <PaginationItem>
//                 <PaginationPrevious href="#" />
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#" isActive>
//                   1
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">2</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">3</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">...</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink href="#">17</PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationNext href="#" />
//               </PaginationItem>
//             </PaginationContent>
//           </Pagination>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import categoryImage from "@/public/images/categoryImage.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyOrders = [
  {
    orderId: "ORD123456",
    customer: "John Doe",
    email: "john@example.com",
    product: "Westwood Shirt Men's Black",
    total: "$29.99",
    paymentMethod: "Credit Card",
    status: "Shipped",
    date: "2025-07-20",
    image: categoryImage,
  },
  {
    orderId: "ORD123457",
    customer: "Jane Smith",
    email: "jane@example.com",
    product: "Westwood Shirt Men's Black",
    total: "$49.99",
    paymentMethod: "PayPal",
    status: "Pending",
    date: "2025-07-21",
    image: categoryImage,
  },
  {
    orderId: "ORD123458",
    customer: "Mark Wilson",
    email: "mark@example.com",
    product: "Westwood Shirt Men's Black",
    total: "$59.00",
    paymentMethod: "Cash on Delivery",
    status: "Delivered",
    date: "2025-07-18",
    image: categoryImage,
  },
  {
    orderId: "ORD123459",
    customer: "Emily Carter",
    email: "emily@example.com",
    product: "Westwood Shirt Men's Black",
    total: "$35.50",
    paymentMethod: "Credit Card",
    status: "Cancelled",
    date: "2025-07-17",
    image: categoryImage,
  },
  {
    orderId: "ORD123460",
    customer: "Michael Brown",
    email: "michael@example.com",
    product: "Westwood Shirt Men's Black",
    total: "$15.00",
    paymentMethod: "Stripe",
    status: "Processing",
    date: "2025-07-22",
    image: categoryImage,
  },
];

const OrderPage = () => {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyOrders.length / itemsPerPage);
  const paginatedOrders = dummyOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getStatusBadge = (status: string) => {
    const isPositive = ["Delivered", "Shipped", "Completed"].includes(status);
    const colorClass = isPositive
      ? "bg-green-100 text-green-800 border border-green-200"
      : "bg-red-100 text-red-800 border border-red-200";

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="bg-gray-50/80 border-b border-gray-200">
              <TableHead className="px-6 py-4 text-left">Customer</TableHead>
              <TableHead className="text-center">Product</TableHead>
              <TableHead className="text-center">Order ID</TableHead>
              <TableHead className="text-center">Total</TableHead>
              <TableHead className="text-center">Payment</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={order.image}
                      alt="Product"
                      width={50}
                      height={50}
                      className="rounded-md border"
                    />
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-gray-500">{order.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">{order.product}</TableCell>
                <TableCell className="text-center">{order.orderId}</TableCell>
                <TableCell className="text-center">{order.total}</TableCell>
                <TableCell className="text-center">
                  {order.paymentMethod}
                </TableCell>
                <TableCell className="text-center">
                  {getStatusBadge(order.status)}
                </TableCell>
                <TableCell className="text-center">{order.date}</TableCell>
                <TableCell className="text-center">
                  <Link href={`/orders/${order.orderId}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 hover:bg-green-50 hover:text-green-600"
                      title="View"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-t">
        <p className="text-sm text-gray-600">
          Showing {paginatedOrders.length} of {dummyOrders.length} results
        </p>
        <div className="flex space-x-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 ${
                currentPage === page ? "bg-[#EF1A26] text-white" : ""
              }`}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
