import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
    name:"count",
    initialState:{count:0},
    reducers:{
        setCount:(state,action)=>{
            state.count = action.payload;
        }
    }
})

export default countSlice.reducer;

export const {setCount} = countSlice.actions;