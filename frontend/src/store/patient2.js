import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

const patientAPI = createApi({
    reducerPath: 'patientAPI', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
    tagTypes: ['Patient', 'Stock', 'Order', 'Worker', "PatientFile"],
    endpoints: (builder) => ({

        // --------- PATİENTS -------------

        getPatients: builder.query({
            query: ({ page = 1 , filters="" }) => `patientcard/?page=${page}&first_name=${filters}`,
            providesTags: (result) => {
                if (!result || !result.data) {
                  return [{ type: 'Patient', id: 'LIST' }];
                }
                return result.data.map(({ id }) => ({ type: 'Patient', id }));
              },
        }),

        getPatientId: builder.query({
             query: (selectedPatientId) => `patientcard/${selectedPatientId}`,
             providesTags: (result, error, id) => [{ type: 'Patient', id }],
        }),

        createPatient: builder.mutation({
            query: ({newPatient}) => ({
                url: 'patientcard/',
                method: 'POST',
                body: newPatient
            }),
            invalidatesTags: [{ type: 'Patient', id: 'LIST' }],
        }),

        getPatientFile: builder.query({
            query: ({ page = 1 }) => `patient-files/?page=${page}`,
            providesTags: (result) => {
                if (!result || !result.data) {
                  return [{ type: 'PatientFile', id: 'LIST' }];
                }
                return result.data.map(({ id }) => ({ type: 'PatientFile', id }));
              },
        }),

        getFileSize: builder.query({
            query: (fileUrl) => ({
              url: fileUrl,
              method: 'HEAD',
            }),
            transformResponse: (response, meta) => {
              const size = meta.response.headers.get("content-length"); // Byte cinsinden boyut
              return size ? (size / 1024).toFixed(1) : null; // KB'ye çevir
            },
        }),

        createPatientFile: builder.mutation({
            query: (newFile) => ({
                url: 'patient-files/',
                method: 'POST',
                body: newFile
            }),
            invalidatesTags: [{ type: 'PatientFile', id: 'LIST' }],
        }),

        updatePatient: builder.mutation({
            query: ({ newPatient, patientID }) => ({
                url: `patientcard/${patientID}/`,
                method: 'PATCH',
                body: newPatient
            }),
            invalidatesTags: (result) => {
                return [
                    { type: 'Patient', id: 'LIST' },
                    { type: 'Patient', id: result.id }
                ];
            }
        }),

        deletePatient: builder.mutation({
            query: (patientId) => ({
                url: `patientcard/${patientId}/`,
                method: 'DELETE',
            }),
            invalidatesTags: (result) => {
                return [
                    { type: 'Patient', id: 'LIST' },
                    { type: 'Patient', id: result.id }
                ];
            }
        }),

        createPtientPhoto: builder.mutation({
            query: (newPhoto)=> ({
                url: "patient-photo/",
                method: "POST",
                body: newPhoto
            })
        }),

        // --------- Doctor Note -------------

        createDoctorNote: builder.mutation({
            query: (newNote)=> ({
                url: "patientnote/",
                method: "POST",
                body: newNote
            })
        }),
 
        // --------- STOCK ORDER -------------
        
        getStockOrders: builder.query({
            query: ({page = 1}) => `order/?page=${page}`,
            providesTags: (result) => {
                if (!result || !result.data) {
                  return [{ type: 'Order', id: 'LIST' }];
                }
                return result.data.map(({ id }) => ({ type: 'Order', id }));
              },
        }),

        getStockOrdersByID: builder.query({
            query: (ID) =>`order/${ID}/`,
            providesTags: (result, error, id) => [{ type: 'Order', id }],
        }),

        createStockOrder: builder.mutation({
            query: (newOrder) => ({
                url: 'order/',
                method: 'POST',
                body: newOrder
            }),
            invalidatesTags: [{ type: 'Order', id: 'LIST' }],
        }),

        updateStockOrder: builder.mutation({
            query: ({ newOrder, orderID }) => ({
                url: `order/${orderID}/`,
                method: 'PATCH',
                body: newOrder
            }),
            invalidatesTags: [{ type: 'Order', id: 'LIST' }],
        }),
        
        // --------- STOCK -------------
        
        createStock: builder.mutation({
            query: (newStock) => ({
                url: 'stock/',
                method: 'POST',
                body: newStock
            })
        }),
        updateStock: builder.mutation({
            query: ({newStock, stockID}) => ({
                url: `stock/${stockID}/`,
                method: 'PATCH',
                body: newStock
            })
        }),

        getAllStocks: builder.query({
            query: ({ page = 1, stock_warehouse, type } = {}) => {                
                let params = new URLSearchParams({ page });
                switch (type) {
                    case "total":
                        return `stock-total-summary/?${params.toString()}`

                    case "warehouse":
                        params.append("stock_warehouse", stock_warehouse);
                        return `stock-warehouse-summary/?${params.toString()}`;

                    case "skt":
                        return `stock-summary/?${params.toString()}`

                    default:      
                        params.append("stock_warehouse", stock_warehouse);                  
                        return `stock/?${params.toString()}`
                }
                
            }
        }),

        // --------- WAREHOUSE -------------

        getWarehouse: builder.query({
            query: () => `warehouse`
        }),

        // --------- KPI -------------


        getAllWorker: builder.query({
            query: ({ type, value, page = 1 }) => {
                const params = new URLSearchParams({
                  page,
                  [type]: value,
                });
              console.log(`worker/?${params.toString()}`);
              
                return `worker/?${params.toString()}`;
              } 
        }),

        getWorkerById: builder.query({
            query: ( workerID ) => `worker/${workerID}/`,
            providesTags: (result, error, id) => [{ type: 'Worker', id }],
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
            }),
            invalidatesTags: (result) => {
                return [
                    { type: 'Worker', id: result.person }
                ];
            }
        }),

        createTaskCheck: builder.mutation({
            query: (newCheck) => ({
                url: "task-check/",
                method: "POST",
                body: newCheck
            }),
            invalidatesTags: (result, error) => {                
                return [{ type: 'Worker', id: result.person }]
            }
        }),

        

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
                useCreateDoctorNoteMutation,
                useCreatePtientPhotoMutation,
                useGetWarehouseQuery,
                useUpdateStockOrderMutation,
                useCreatePatientFileMutation,
                useGetPatientFileQuery,
                useGetFileSizeQuery,
                useCreateTaskCheckMutation,
                useUpdateStockMutation
                
           } = patientAPI; 
export default patientAPI;
