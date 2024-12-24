import { configureStore } from "@reduxjs/toolkit";
import patient from "./patient";
import modal from "./modal";
import CalendarSlice from "./calendarSlice";
import patientAPI from "./patient2";
import { chatApi } from "./chatAPI";
import { apiSlice } from "./unipileClient";


const store = configureStore({
    reducer: {
        patient,
        modal,
        calendar: CalendarSlice,
        [patientAPI.reducerPath]: patientAPI.reducer, 
        [chatApi.reducerPath]: chatApi.reducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
                .concat(patientAPI.middleware)
                .concat(chatApi.middleware)
                .concat(apiSlice.middleware),
})

export default store