import { configureStore } from '@reduxjs/toolkit'
import { appApi } from './appApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userReducer } from './user.slice'

export const store = configureStore({
    reducer: {
        [appApi.reducerPath]: appApi.reducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat(appApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;