import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patients: [
        {
            id: 1,
            patient_image: 'https://via.placeholder.com/40',
            ilgilenenDoktor: "Süleyman Taş",
            first_name: 'Selim',
            last_name: 'GÜRSES',
            email: 'selim@domain.com',
            mobile_phone1: '05369863247',
            city: 'Trabzon',
            national_id: '36587774125',
            gender: 'Male',
            nationality: 'Turkish',
            mother_name: 'Fatma',
            father_name: 'Ahmet',
            mobile_phone2: '',
            instagram_username: 'selimgurses',
            patient_type: 'Outpatient',
            country: 'Turkey',
            address: 'Trabzon, Turkey',
            date_of_birth: '1985-05-10',
            place_of_birth: 'Trabzon',
            seans_number: 2,
            device_name: 'MRI',
            seans_days: ['Monday', 'Wednesday'],
            occupation: 'Engineer',
            current_employer: 'Tech Corp',
            marital_status: 'Married',
            referee: 'Dr. Öz',
            existing_conditions: 'None',
            medications: 'None',
            past_surgeries: 'Appendectomy',
            allergies: 'None',
            complaints: 'Back pain',
            children_count: 2,
            smoker: 'No',
            consultation_date: '2024-09-14',
            sharing_permission: 'Yes',
            post_surgery_address: 'Trabzon, Turkey',
            institution_type: 'Public Hospital',
            applied_department: 'Orthopedics',
            applied_operation: 'Back Surgery',
        }
    ],
    patient: null,
}

const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action) => {
            const newPatient = {
                id: state.patients.length + 1, // Yeni hasta için id oluşturma
                patient_image: 'https://via.placeholder.com/40', // Varsayılan bir resim ekleme
                age: action.payload.age,
                patient_number: action.payload.patientCode,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email || '', // Eğer email boşsa boş string ekle
                mobile_phone1: action.payload.mobile_phone1 || '', // İletişim bilgisi boşsa varsayılan boş string
                city: action.payload.city || '', // Lokasyon olarak şehir bilgisi
                national_id: action.payload.national_id || action.payload.pasaportNo || '', // TC Kimlik No veya Pasaport No
                gender: action.payload.gender || '', 
                nationality: action.payload.nationality || '', 
                mother_name: action.payload.mother_name || '', 
                father_name: action.payload.father_name || '', 
                mobile_phone2: action.payload.mobile_phone2 || '', 
                instagram_username: action.payload.instagram_username || '', 
                patient_type: action.payload.patient_type || '', 
                country: action.payload.country || '', 
                address: action.payload.address || '', 
                date_of_birth: action.payload.date_of_birth || '', 
                place_of_birth: action.payload.place_of_birth || '', 
                seans_number: action.payload.session || '', 
                device_name: action.payload.device_name || '', 
                seans_days: action.payload.selectedDays || [], 
                occupation: action.payload.profession || '', 
                current_employer: action.payload.workplace || '', 
                marital_status: action.payload.marital_status || '', 
                referee: action.payload.referral || '', 
                existing_conditions: action.payload.currentDiseases || '', 
                medications: action.payload.medications || '', 
                past_surgeries: action.payload.operations || '', 
                allergies: action.payload.allergies || '', 
                complaints: action.payload.complaint || '', 
                children_count: action.payload.childrenCount || '', 
                smoker: action.payload.smoke || '', 
                consultation_date: action.payload.consultationDate || '', 
                sharing_permission: action.payload.sharingPermission || '', 
                post_surgery_address: action.payload.dateOfRepatriation || '', 
                institution_type: action.payload.organisationType || '', 
                applied_department: action.payload.department || '', 
                applied_operation: action.payload.procedure || '', 
            };
            state.patients = [
                newPatient,
                ...state.patients
            ];
        },
        setPatient: (state, action) => {
            state.patients = action.payload;
        },
        setPatientt: (state, action) => {
            state.patient = action.payload;
        },
        clearPatientt: (state) => {
            state.patient = null;
        }
    }
})

export const { addPatient, setPatient, setPatientt, clearPatientt } = patientsSlice.actions;
export default patientsSlice.reducer;
