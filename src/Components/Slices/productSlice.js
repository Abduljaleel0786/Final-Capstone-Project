import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'products',
  items: [],
  isToast: false,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log( action, 'ggg');
      const isExit = state.items.find((item) => item.
      idMeal
       === action.payload.idMeal  );
     

      if (isExit) {
        state.isToast = true;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.
      idMeal
       === action.payload.
      idMeal
      );
      if (product) {
        product.quantity += 1;
      }

    },

    decreaseQuantity: (state, action) => {
      const product = state.items.find((item) => item.
      idMeal
       === action.payload.
      idMeal
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {

        state.items = state.items.filter((item) => item.
        idMeal
         !== action.payload.
        idMeal
        )
      }

    },
  },
});

export const { addProduct, increaseQuantity, decreaseQuantity } = productSlice.actions;

export default productSlice.reducer;
