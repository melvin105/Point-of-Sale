import { apiRequest } from './api'
import type { InventoryItem } from '../types/inventory'

export const inventoryService = {
  async getAll(): Promise<InventoryItem[]> {
    return apiRequest<InventoryItem[]>('/inventory')
  },

  async getById(id: string): Promise<InventoryItem> {
    return apiRequest<InventoryItem>(`/inventory/${id}`)
  },

  async create(item: Partial<InventoryItem>): Promise<InventoryItem> {
    return apiRequest<InventoryItem>('/inventory', {
      method: 'POST',
      body: JSON.stringify(item),
    })
  },

  async update(id: string, item: Partial<InventoryItem>): Promise<InventoryItem> {
    return apiRequest<InventoryItem>(`/inventory/${id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
    })
  },

  async delete(id: string): Promise<void> {
    return apiRequest<void>(`/inventory/${id}`, {
      method: 'DELETE',
    })
  },
}

