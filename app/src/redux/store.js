import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./slices/postSlice";


export default configureStore({
    reducer: {
        post: postSlice
    }
})

