import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./counterSlice";
import { contReducer } from "./ContactSlice";


export const store = configureStore({
    reducer: {
        contacts:reducers,
        contactdata:contReducer
    }
})