import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Alert } from '../types/alerts'

interface AlertsState {
  alerts: Alert[]
  loading: boolean
  error: string | null
}

const initialState: AlertsState = {
  alerts: [],
  loading: false,
  error: null,
}

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    setAlerts: (state: AlertsState, action: PayloadAction<Alert[]>) => {
      state.alerts = action.payload
    },
    addAlert: (state: AlertsState, action: PayloadAction<Alert>) => {
      state.alerts.push(action.payload)
    },
    removeAlert: (state: AlertsState, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter((alert: Alert) => alert.id !== action.payload)
    },
    setLoading: (state: AlertsState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state: AlertsState, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
  },
})

export const { setAlerts, addAlert, removeAlert, setLoading, setError } = alertsSlice.actions
export default alertsSlice.reducer

