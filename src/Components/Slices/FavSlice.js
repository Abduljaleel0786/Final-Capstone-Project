import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'products',
  items: [],
  isToast: false,
};

export const FavSlice = createSlice({
  name: 'Favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {

      const isFav = state.items.find((item) => item.idMeal=== action.payload.idMeal  );
     

      if (isFav) {
        state.isToast = true;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      
    },
   
  }, 

  

});

export const { addFavorite } = FavSlice.actions;

export default FavSlice.reducer;
