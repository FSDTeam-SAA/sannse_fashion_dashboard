import React from 'react'
import OrderPage from './_componetns/order-table'
import OrderPageHeader from './_componetns/OrderPageHeader'
// import { OrderTable } from './_componetns/order-table'

const page = () => {
  return (
    <div>
      <OrderPageHeader />
      <OrderPage />
    </div>
  )
}

export default page