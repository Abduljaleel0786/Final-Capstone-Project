import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../Components/Slices/productSlice'
import FavoriteReducer from '../Components/Slices/FavSlice'





export const store = configureStore({

  reducer: {

    products: productReducer,
    Favorite: FavoriteReducer,




  },

});


