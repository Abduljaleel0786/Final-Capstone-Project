import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/Slices/productSlice";
import favoriteReducer from "../Components/Slices/favouriteSlice";
import LacationReducer from "../Components/Slices/locationSlice";

export const store = configureStore({
  reducer: {
    Lacation: LacationReducer,
    products: productReducer,
    favorite: favoriteReducer,
  },
});
