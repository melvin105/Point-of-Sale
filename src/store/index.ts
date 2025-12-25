import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from './inventory.slice'
import alertsReducer from './alerts.slice'
import authReducer from './auth.slice'

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    alerts: alertsReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

