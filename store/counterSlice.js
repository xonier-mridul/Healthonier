import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{
      name:"",
      email:"",
      number:"",
      message:""
    }
}

export const counterSlice = createSlice({
    name: "midul",
    initialState,
    reducers:{
      adduser:(state,action)=>{
        // return {...state, ...action.payload};
        state.user = {...state.user, ...action.payload}
      }
    }
})

export const { adduser} = counterSlice.actions;

export const  reducers = counterSlice.reducer