import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";


const store = configureStore({
    reducer: {
        post: postSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

