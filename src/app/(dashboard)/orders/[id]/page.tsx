// import { OrderDetails } from "../_componetns/order-details"

// interface OrderDetailsPageProps {
//   params: {
//     id: string
//   }
// }

// const orders = [
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
//     status: "Processing",
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

// const getOrderDetails = (id: string) => {
//   const order = orders.find((o) => o.id === id)
//   if (!order) {
//     return null
//   }

//   return {
//     ...order,
//     billingAddress: {
//       name: "Brooklyn Simmons",
//       address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
//       email: "brooklynsimmons@gmail.com",
//       phone: "(58) 474748574",
//     },
//     shippingAddress: {
//       name: "Brooklyn Simmons",
//       address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
//       email: "brooklynsimmons@gmail.com",
//       phone: "(58) 474748574",
//     },
//     paymentSummary: {
//       orderId: `#${order.id}`,
//       paymentMethod: order.paymentMethod,
//       subtotal: "$7,000.00",
//       salesTax: "$50.00",
//       totalItems: "05",
//       total: "$48000.00",
//     },
//     progress: {
//       currentStep:
//         order.status === "Shipping" ? 3 : order.status === "Processing" ? 2 : order.status === "Completed" ? 4 : 1,
//       steps: ["Order", "Processing", "Shipping", "Completed"],
//     },
//     products: [
//       {
//         image: "/placeholder.svg?height=100&width=100",
//         description: "Lorem ipsum dolor sit amet, consectetur efficitur.",
//         price: "$254",
//       },
//       {
//         image: "/placeholder.svg?height=100&width=100",
//         description: "Lorem ipsum dolor sit amet, consectetur efficitur.",
//         price: "$254",
//       },
//     ],
//   }
// }

// export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
//   const order = getOrderDetails(params.id)

//   if (!order) {
//     return <div>Order not found.</div>
//   }

//   return <OrderDetails order={order} />
// }





import { OrderDetails } from "../_componetns/order-details";

interface OrderDetailsPageProps {
  params: {
    id: string;
  };
}

const orders = [
  {
    id: "ORD123456",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$29.99",
    paymentMethod: "Credit Card",
    status: "Shipped",
    date: "2025-07-20",
  },
  {
    id: "ORD123457",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      avatar: "/placeholder-user.jpg",
    },
    product: {
      name: "Westwood Shirt Men's Black",
      image: "/placeholder.svg?height=64&width=64",
    },
    total: "$49.99",
    paymentMethod: "PayPal",
    status: "Pending",
    date: "2025-07-21",
  },
];

const getOrderDetails = (id: string) => {
  const order = orders.find((o) => o.id === id);
  if (!order) return null;

  return {
    ...order,
    billingAddress: {
      name: "Brooklyn Simmons",
      address: "Lorem ipsum dolor sit amet",
      email: "brooklynsimmons@gmail.com",
      phone: "(58) 474748574",
    },
    shippingAddress: {
      name: "Brooklyn Simmons",
      address: "Lorem ipsum dolor sit amet",
      email: "brooklynsimmons@gmail.com",
      phone: "(58) 474748574",
    },
    paymentSummary: {
      orderId: `#${order.id}`,
      paymentMethod: order.paymentMethod,
      subtotal: "$7,000.00",
      salesTax: "$50.00",
      totalItems: "05",
      total: order.total,
    },
    progress: {
      currentStep:
        order.status === "Shipping"
          ? 3
          : order.status === "Processing"
          ? 2
          : order.status === "Completed"
          ? 4
          : 1,
      steps: ["Order", "Processing", "Shipping", "Completed"],
    },
    products: [
      {
        image: "/placeholder.svg?height=100&width=100",
        description: "Lorem ipsum dolor sit amet.",
        price: "$254",
      },
      {
        image: "/placeholder.svg?height=100&width=100",
        description: "Consectetur efficitur lorem ipsum.",
        price: "$254",
      },
    ],
  };
};

export default function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const order = getOrderDetails(params.id);

  if (!order) {
    return <div className="p-4 text-red-500">Order not found.</div>;
  }

  return <OrderDetails order={order} />;
}
