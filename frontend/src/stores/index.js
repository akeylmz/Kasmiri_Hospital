import { configureStore } from "@reduxjs/toolkit";
import patient from "./patient";

const store = configureStore({
    reducer : {
        patient
    }
})

export default store