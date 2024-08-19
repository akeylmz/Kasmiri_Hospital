import { configureStore } from "@reduxjs/toolkit";
import patient from "./patient";
import modal from "./modal";
import CalendarSlice from "./CalendarSlice";


const store = configureStore({
    reducer: {
        patient,
        modal,
        calendar: CalendarSlice,
    }
})

export default store