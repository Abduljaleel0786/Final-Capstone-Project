import React from 'react';
import Product from './ProductPage/Product/Products';
import DeliveryPaymentSection from './ProductPage/DeliveryPaymentSection/DeliveryPaymentSection';
import { Box } from '@mui/material';
import ProductHeader from './ProductPage/productSection/ProductHeader';

const ProductDetails = () => {
  return (
    <>
      <ProductHeader />
      <Box
        className="flex-wrap"
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: { xs: 2, md: 4 },
          padding: { xs: 1, md: 2 }, 
        }}
      >
        <Box sx={{ flex: 1, minWidth: { xs: '100%', md: '60%' } }}> 
          <Product />
        </Box>
        <Box className=' d-none d-lg-block d-md-block' sx={{ flex: 1, minWidth: { xs: '100%', md: '35%' } }}>
          <DeliveryPaymentSection />
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
