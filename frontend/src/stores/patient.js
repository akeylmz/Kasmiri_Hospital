import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: [
        {
            name: "Ahmet Yusuf",
            surname: "Kuru",
            id: "43523784610",
            pasaportNo: "43523784610",
            dogumYeri: "Ankara",
            dogumTarihi: "14.12.1995",
            cinsiyet: "Erkek",
            uyruk: "Türkiye Cumhuriyeti",
            anaAdi: "Meryem",
            babaAdi: "Recep",
            yakinlikTipi: "Kuzen",
            refereEden: "Hasan",
            sigortaliBilgileri: "deneme",
            tamamlayiciSigorta: "deneme",

            adresTipi: "512 452 56 54",
            adres: "512 452 56 54",
            disKapiNo: "512 452 56 54",
            icKapiNo: "512 452 56 54",
            ulke: "512 452 56 54",
            sehir: "512 452 56 54",
            ilce: "512 452 56 54",
            bucak: "512 452 56 54",
            koy: "512 452 56 54",
            mahalle: "512 452 56 54",
            evTelefonu: "512 452 56 54",
            isTelefonu: "512 452 56 54",
            cep1: "512 452 56 54",
            cep2: "512 452 56 54",
            email: "512 452 56 54",
            fax: "512 452 56 54",

            cuzdanNo: "512 452 56 54",
            medeniHali: "512 452 56 54",
            kimlikTuru: "512 452 56 54",
            pasaportNo2: "512 452 56 54",
            anneTc: "512 452 56 54",
            babaTc: "512 452 56 54",
            beyanKanGrubu: "512 452 56 54",
            nufusKayitTuru: "512 452 56 54",
            sehir: "512 452 56 54",
            ilce: "512 452 56 54",
            mahalle: "512 452 56 54",
            ciltNo: "512 452 56 54",
            aileSiraNo: "512 452 56 54",
            siraNo: "512 452 56 54",

            seans: "512 452 56 54",
            cihazAdi: "512 452 56 54",
            seansGunu: "512 452 56 54",

            sinifi: "512 452 56 54",
            verildigiYer: "512 452 56 54",
            belgeNo: "512 452 56 54",
            verildigiTarih: "512 452 56 54",
            belgeTarihi: "512 452 56 54",
            cihazProtez: "512 452 56 54",

            vergiDairesi: "512 452 56 54",
            arsivNo: "512 452 56 54",
            meslegi: "512 452 56 54",
            odaNo: "512 452 56 54",
            resmiMeslek: "512 452 56 54",
            bolumNo: "512 452 56 54",
            egitimDurumu: "512 452 56 54",
            kisimNo: "512 452 56 54",
            entegrasyonKodu: "512 452 56 54",
            rafNo: "512 452 56 54",
            efaturaTuru: "512 452 56 54",

         },
        // {
        //     name: "Mehmet Enes",
        //     surname: "Doğan",
        //     phone: "512 452 56 54",
        //     email: "Mehmet@gmail.com",
        //     location: "Ankara",
        //     isTurk: true,
        //     id: "124423",
        //     situation: "Bekliyor"
        // },
        // {
        //     name: "Ahmet Kemal",
        //     surname: "Yılmaz",
        //     phone: "512 452 56 54",
        //     email: "Kemal@gmail.com",
        //     location: "Konya",
        //     isTurk: true,
        //     id: "1234233",
        //     situation: "Günü Geçti"
        // }
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
