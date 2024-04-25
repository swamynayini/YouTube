import { configureStore } from "@reduxjs/toolkit";
import appSilce from "./appSilce";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer:{
        app:appSilce,
        chat:chatSlice
    }
})
export default store