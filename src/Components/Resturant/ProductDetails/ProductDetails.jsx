import React from 'react'
import Product from './Product/Products'
import DeliveryPaymentSection from './DeliveryPaymentSection/DeliveryPaymentSection'
import { Box } from '@mui/material'
import ProductHeader from './productSection/ProductHeader'


const ProductDetails = () => {
  return (
    <>
      <ProductHeader />
      <Box   sx={{ display: "flex", gap: 4, padding: 2 }}>
        <Product />
        <DeliveryPaymentSection />
      </Box>
    </>
  )
}

export default ProductDetails