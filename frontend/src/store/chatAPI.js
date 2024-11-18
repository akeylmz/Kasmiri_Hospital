import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const chatApi = createApi({
    reducerPath: 'chatApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'https://api10.unipile.com:14022/api/v1', 
      prepareHeaders: (headers) => {
        headers.set('accept', 'application/json');
        headers.set('X-API-KEY', 'kCThBP0Y.ekJeRP5fDf50Y/jiO+j5c38Waz4PxbQ5oUTkpWtWYIE=')
        return headers;
      },
    }),
    endpoints: (builder) => ({
      sendMessage: builder.mutation({
        query: ({ formData, chatID }) => ({
          url: `chats/${chatID}/messages/`,
          method: 'POST',
          body: formData,
        }),
      }),
      getAttachment: builder.query({
        query: ({ messageId, attachmentId }) => ({
          url: `${messageId}/attachments/${attachmentId}`,
          method: 'GET',
          responseHandler: async (response) => {
            console.log(response);
            
            return response.blob().then((blob) => URL.createObjectURL(blob));
          },
        }),
      }),
    }),
  });
  export const { useSendMessageMutation, useGetAttachmentQuery } = chatApi;