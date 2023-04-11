import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import * as authHelper from '@/modules/auth/authHelpers'
import { BASE_URL } from '@env'

export const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/mobile`,
        prepareHeaders: async (headers) => {
            const token = await authHelper.getAuth()

            if (token) {
                headers.set('Authorization', token.api_token)
            }

            return headers
        }
    }),
    refetchOnFocus: false,
    endpoints: build => ({
        getOffers: build.query({
            query: () => {
                return {
                    url: 'get_offers'
                }
            }
        }),
        getNews: build.query({
            query: () => {
                return {
                    url: 'get_news'
                }
            }
        })
    })
})

export const {
    useLazyGetOffersQuery,
    useLazyGetNewsQuery
} = appApi;