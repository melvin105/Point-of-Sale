import { apiRequest } from './api'
import type { Alert } from '../types/alerts'

export const alertsService = {
  async getAll(): Promise<Alert[]> {
    return apiRequest<Alert[]>('/alerts')
  },

  async getById(id: string): Promise<Alert> {
    return apiRequest<Alert>(`/alerts/${id}`)
  },

  async markAsRead(id: string): Promise<Alert> {
    return apiRequest<Alert>(`/alerts/${id}/read`, {
      method: 'PATCH',
    })
  },

  async dismiss(id: string): Promise<void> {
    return apiRequest<void>(`/alerts/${id}`, {
      method: 'DELETE',
    })
  },
}

