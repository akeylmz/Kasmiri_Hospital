import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const patientAPI = createApi({
    reducerPath: 'patientAPI', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    endpoints: (builder) => ({
        getPatients: builder.query({
            query: ({ page = 1 , filters="" }) => `patientcard/?page=${page}&first_name=${filters}`,
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
            query: ({page = 1}) => `order/?page=${page}`
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
        
        // getAllStocks: builder.query({
        //     query: (page = 1) => `stock/?page=${page}`
        // }),
        createStock: builder.mutation({
            query: (newStock) => ({
                url: 'stock/',
                method: 'POST',
                body: newStock
            })
        }),
        getAllStocks: builder.query({
            query: ({ page = 1, stock_wharehouse } = {}) => {
                let params = new URLSearchParams({ page });
                if (stock_wharehouse) {
                    params.append("stock_wharehouse", stock_wharehouse);
                }
                return `stock/?${params.toString()}`;
            }
        }),

        // --------- KPI -------------


        getAllWorker: builder.query({
            query: ({ page = 1 }) => `worker/?page=${page}`
        }),
        getWorkerById: builder.query({
            query: ( workerID ) => `worker/${workerID}/`
        }),
        createWorker: builder.mutation({
            query: (newWorker) => ({
                url: 'worker/',
                method: 'POST',
                body: newWorker
            })
        }),
        createWorkerFile: builder.mutation({
            query: (files) => ({
                url: `worker-file/`,
                method: 'POST',
                body: files,
            })
        }),
        createWorkerLeaves: builder.mutation({
            query: (newLeave) => ({
                url: "leave/",
                method: "POST",
                body: newLeave
            })
        }),
        createWorkerHours: builder.mutation({
            query: (newHours) => ({
                url: "working-hours/",
                method: "POST",
                body: newHours
            })
        }),
        createWorkerTask: builder.mutation({
            query: (newTask)=> ({
                url: "task-assignment/",
                method: "POST",
                body: newTask
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
                useCreateWorkerMutation,
                useGetAllWorkerQuery,
                useGetWorkerByIdQuery,
                useCreateWorkerFileMutation,
                useCreateWorkerLeavesMutation,
                useCreateWorkerHoursMutation,
                useCreateWorkerTaskMutation,
           } = patientAPI; 
export default patientAPI;
