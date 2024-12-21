import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Components/Slices/addCartSlice'
import productReducer from '../Components/Slices/productSlice'





export const store = configureStore({

  reducer: {

    counter: counterReducer,
    products: productReducer,


  },

});


