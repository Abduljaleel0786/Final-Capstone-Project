import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name: "Lacation",
    initialState: {
        Value:[],
      
    },
    
    reducers:{

        Addlocation :(state,action)=>{

            state.Value.push({...action.payload})
            state.name = action.payload.name;
            console.log(action,"action");



        }
        
    },  
} )


export const {Addlocation} = counterSlice.actions;

export default counterSlice.reducer;

