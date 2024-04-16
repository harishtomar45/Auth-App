import { configureStore } from "@reduxjs/toolkit";
import authReucer from "./auth/authSlioce"

const store = configureStore({
    reducer : {
         auth : authReucer,
    }
})

export default store ;