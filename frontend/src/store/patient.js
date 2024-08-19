import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: [
        { id: 1, image: 'https://via.placeholder.com/40', name: 'Selim', surname: 'GÜRSES', email: 'selim@domain.com', contact: '05369863247', location: 'Trabzon', tc: '36587774125' },
        { id: 2, image: 'https://via.placeholder.com/40', name: 'Cemre', surname: 'YALÇINSOY', email: 'cemre@domain.com', contact: '05426987832', location: 'İstanbul', tc: '36985214785' },
        { id: 3, image: 'https://via.placeholder.com/40', name: 'Seçkin', surname: 'SEYMEN', email: 'seckin@domain.com', contact: '05318521496', location: 'Bursa', tc: '25471554789' },
        { id: 4, image: 'https://via.placeholder.com/40', name: 'Ahmet', surname: 'KAPAKÇI', email: 'ahmet@domain.com', contact: '05336547893', location: 'İzmit', tc: '78965554123' },
        { id: 5, image: 'https://via.placeholder.com/40', name: 'Yalçın', surname: 'SELİMOĞLU', email: 'yalcin@domain.com', contact: '05465989832', location: 'Kocaeli', tc: '885145' },
        { id: 6, image: 'https://via.placeholder.com/40', name: 'Nazan', surname: 'SATIŞOĞLU', email: 'nazan@domain.com', contact: '05556985478', location: 'Aydın', tc: '123123' },
        { id: 7, image: 'https://via.placeholder.com/40', name: 'Alper', surname: 'ÜNLÜ', email: 'alper@domain.com', contact: '05052587413', location: 'Bursa', tc: '9854877745' },
        { id: 8, image: 'https://via.placeholder.com/40', name: 'Aylin', surname: 'GÜMÜŞÇÜ', email: 'aylin@domain.com', contact: '05398541229', location: 'İzmir', tc: '99845754558' },
        { id: 9, image: 'https://via.placeholder.com/40', name: 'Selin', surname: 'TAŞ', email: 'selin@domain.com', contact: '05422366558', location: 'Ankara', tc: '258741236546' },
        { id: 10, image: 'https://via.placeholder.com/40', name: 'BUĞRA', surname: 'YAĞUŞ', email: 'bugra@domain.com', contact: '05321456958', location: 'Fransa', tc: '987456321456' },
    ]
}

const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action) => {
            const newPatient = {
                id: state.patients.length + 1, // Yeni hasta için id oluşturma
                image: 'https://via.placeholder.com/40', // Varsayılan bir resim ekleme
                age: action.payload.age,
                patientCode: action.payload.patientCode,
                name: action.payload.name,
                surname: action.payload.surname,
                email: action.payload.email || '', // Eğer email boşsa boş string ekle
                contact: action.payload.phone1 || '', // İletişim bilgisi boşsa varsayılan boş string
                location: action.payload.city || '', // Lokasyon olarak şehir bilgisi
                tc: action.payload.tcKimlikNo || action.payload.pasaportNo || '', // TC Kimlik No veya Pasaport No
                gender: action.payload.gender || '', 
                nationality: action.payload.nationality || '', 
                motherName: action.payload.motherName || '', 
                fatherName: action.payload.fatherName || '', 
                phone2: action.payload.phone2 || '', 
                instagramName: action.payload.instagramName || '', 
                patientType: action.payload.patientType || '', 
                country: action.payload.country || '', 
                address: action.payload.address || '', 
                birthDate: action.payload.birthDate || '', 
                birthPlace: action.payload.birthPlace || '', 
                session: action.payload.session || '', 
                deviceName: action.payload.deviceName || '', 
                selectedDays: action.payload.selectedDays || [], 
                profession: action.payload.profession || '', 
                workplace: action.payload.workplace || '', 
                maritalStatus: action.payload.maritalStatus || '', 
                referral: action.payload.referral || '', 
                currentDiseases: action.payload.currentDiseases || '', 
                medications: action.payload.medications || '', 
                operations: action.payload.operations || '', 
                allergies: action.payload.allergies || '', 
                complaint: action.payload.complaint || '', 
                childrenCount: action.payload.childrenCount || '', 
                smoke: action.payload.smoke || '', 
                consultationDate: action.payload.consultationDate || '', 
                sharingPermission: action.payload.sharingPermission || '', 
                dateOfRepatriation: action.payload.dateOfRepatriation || '', 
                organisationType: action.payload.organisationType || '', 
                department: action.payload.department || '', 
                procedure: action.payload.procedure || '', 
            };
            state.patients = [
                newPatient,
                ...state.patients
            ];
        }
    }
})

export const { addPatient } = patientsSlice.actions;
export default patientsSlice.reducer;
