import { configureStore } from "@reduxjs/toolkit";
import patient from "./patient";
import modal from "./modal";
import CalendarSlice from "./calendarSlice";
import patientAPI from "./patient2";


const store = configureStore({
    reducer: {
        patient,
        modal,
        calendar: CalendarSlice,
        [patientAPI.reducerPath]: patientAPI.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(patientAPI.middleware),
})

export default store