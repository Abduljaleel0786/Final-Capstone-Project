import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Slices/productSlice";
import favoriteReducer from "../Components/Slices/favouriteSlice";
import locationReducer from "../Components/Slices/Location"


export const store = configureStore({
  reducer: {

    products: productReducer,
    favorite: favoriteReducer,
    Location:locationReducer
  },
});
