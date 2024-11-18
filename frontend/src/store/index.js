import { configureStore } from "@reduxjs/toolkit";
import patient from "./patient";
import modal from "./modal";
import CalendarSlice from "./calendarSlice";
import patientAPI from "./patient2";
import { chatApi } from "./chatAPI";


const store = configureStore({
    reducer: {
        patient,
        modal,
        calendar: CalendarSlice,
        [patientAPI.reducerPath]: patientAPI.reducer, 
        [chatApi.reducerPath]: chatApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
                .concat(patientAPI.middleware)
                .concat(chatApi.middleware),
})

export default store