import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: [
        {
            name: "Ahmet Yusuf",
            surname: "Kuru",
            phone: "512 452 56 54",
            email: "Yusuf@gmail.com",
            location: "Trabzon",
            isTurk: true,
            id: "1253423",
            situation: "Ödendi"
        },
        {
            name: "Mehmet Enes",
            surname: "Doğan",
            phone: "512 452 56 54",
            email: "Mehmet@gmail.com",
            location: "Ankara",
            isTurk: true,
            id: "124423",
            situation: "Bekliyor"
        },
        {
            name: "Ahmet Kemal",
            surname: "Yılmaz",
            phone: "512 452 56 54",
            email: "Kemal@gmail.com",
            location: "Konya",
            isTurk: true,
            id: "1234233",
            situation: "Günü Geçti"
        }
    ]
}

const patientsSlice = createSlice({
    name: 'patients', 
    initialState,
    reducers: { 
        addPatient: (state, action) => {
            state.patients = [
                action.payload,
                ...state.patients 
            ]
        }
    }
})

export const { addPatient } = patientsSlice.actions
export default patientsSlice.reducer
