import { createSlice } from '@reduxjs/toolkit'




const initialState ={
  items: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
addProduct:(state,action) =>g {

  console.log(state,action ,'gfhgfgf');
  
}
   
  },
})


export const {} = productSlice.actions

export default productSlice.reducer