// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //   name: "favorites",
// //   items: [],
// //   isToast: false,

// // };

// // export const favoriteSlice = createSlice({
// //   name: "favorite",
// //   initialState,
// //   reducers: {
// //     addFavorite: (state, action) => {
// //       const isFavorite = state.items.find(
// //         (item) => item.idMeal === action.payload.idMeal
// //       );

// //       if (isFavorite) {
// //         state.isToast = true; 
// //       } else {
// //         state.items.push({ ...action.payload, quantity: 1 });
// //         state.isToast = false;
     
// //       }
// //     },
// //   },
// // });

// // export const { addFavorite } = favoriteSlice.actions;

// // export default favoriteSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   name: 'favorites',
//   items: [],
//   favoriteToastMessage: '',
// };

// export const favoriteSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addFavorite: (state, action) => {
//       const isFavorite = state.items.find((item) => item.idMeal === action.payload.idMeal);

//       if (isFavorite) {
//         state.favoriteToastMessage = 'Product already added to favorites!';
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//         state.favoriteToastMessage = 'Product added to favorites successfully!';
//       }
//     },
//   },
// });

// export const { addFavorite } = favoriteSlice.actions;

// export default favoriteSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'favorites',
  items: [],
  favoriteToastMessage: '',
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const isFavorite = state.items.find((item) => item.idMeal === action.payload.idMeal);

      if (isFavorite) {
        state.favoriteToastMessage = 'Product already added to favorites!';
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.favoriteToastMessage = 'Product added to favorites successfully!';
      }
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
