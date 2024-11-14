import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {
    name: "",
    number: "",
    email: "",
    location: "",
    message: "",
  },
};

export const contactSlice = createSlice({
    name:"mridultwo",
    initialState,
    reducers:{
        addContact:(state,action)=>{
            // return {...state, ...action.payload}
           state.users = {...state.users, ...action.payload}
        }
    }
})

export const {addContact} = contactSlice.actions

export const contReducer =  contactSlice.reducer
