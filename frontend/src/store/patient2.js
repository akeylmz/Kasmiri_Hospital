import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // react kısmını kontrol edin

const patientAPI = createApi({
    reducerPath: 'patientAPI', // farklı bir isim verebilirsiniz
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: () => `patientcard`,
        }),
        getPatientId: builder.query({
            query: (patientId) => `patientcard/${patientId}/`,
        }),
        createPatient: builder.mutation({
            query: (newPatient) => ({
                url: 'patientcard/',
                method: 'POST',
                body: newPatient
            })
        }),
        updatePatient: builder.mutation({
            query: (newPatient) => ({
                url: 'patientcard/',
                method: 'PUT',
                body: newPatient
            })
        }),
        deletePatient: builder.mutation({
            query: (patientId) => ({
                url: `patientcard/${patientId}/`,
                method: 'DELETE',
            })
        })
    }),
    keepUnusedDataFor: 30,
    refetchOnMountOrArgChange: 5
});

export const { useGetPatientsQuery, useGetPatientIdQuery, useCreatePatientMutation, useUpdatePatientMutation, useDeletePatientMutation } = patientAPI; 
export default patientAPI;
