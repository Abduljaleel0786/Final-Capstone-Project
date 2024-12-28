import React from 'react'
import Product from './ProductPage/Product/Products'
import DeliveryPaymentSection from './ProductPage/DeliveryPaymentSection/DeliveryPaymentSection'
import { Box } from '@mui/material'
import ProductHeader from './ProductPage/productSection/ProductHeader'


const ProductDetails = () => {
  return (
    <>
      <ProductHeader />
      <Box className=""  sx={{ display: "flex", gap: 4, padding: 2 }}>
        <Product />
        <DeliveryPaymentSection />
      </Box>
    </>
  )
}

export default ProductDetails