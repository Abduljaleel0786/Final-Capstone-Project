import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Slices/productSlice";
import favoriteReducer from "../Components/Slices/favouriteSlice";



export const store = configureStore({
  reducer: {

    products: productReducer,
    favorite: favoriteReducer,
   
  },
});
