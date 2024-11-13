import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const patientAPI = createApi({
    reducerPath: 'patientAPI', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: () => `patientcard/`,
        }),
        getPatientId: builder.query({
             query: (selectedPatientId) => `patientcard/${selectedPatientId}`
        }),
        createPatient: builder.mutation({
            query: (newPatient) => ({
                url: 'patientcard/',
                method: 'POST',
                body: newPatient
            })
        }),
        updatePatient: builder.mutation({
            query: ({ newPatient, patientID }) => ({
                url: `patientcard/${patientID}/`,
                method: 'PUT',
                body: newPatient
            })
        }),
        deletePatient: builder.mutation({
            query: (patientId) => ({
                url: `patientcard/${patientId}/`,
                method: 'DELETE',
            })
        }),

        // --------- STOCK ORDER -------------
        
        getStockOrders: builder.query({
            query: () => "order"
        }),
        getStockOrdersByID: builder.query({
            query: (ID) =>`order/${ID}/`
        }),
        createStockOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'order/',
                method: 'POST',
                body: newOrder
            })
        }),
        
        // --------- STOCK -------------
        
        getAllStocks: builder.query({
            query: () => "stock"
        }),
        createStock: builder.mutation({
            query: (newStock) => ({
                url: 'stock/',
                method: 'POST',
                body: newStock
            })
        })

    }),
    keepUnusedDataFor: 30,
    refetchOnMountOrArgChange: 5
});

export const {  useGetPatientsQuery, 
                useGetPatientIdQuery,
                useCreatePatientMutation,
                useUpdatePatientMutation,
                useDeletePatientMutation,
                useGetStockOrdersQuery,
                useGetStockOrdersByIDQuery,
                useCreateStockOrderMutation,
                useGetAllStocksQuery,
                useCreateStockMutation,
           } = patientAPI; 
export default patientAPI;
