export type InventoryItem = {
  id: string
  name: string
  sku: string
  quantity: number
  expiryRisk: 'low' | 'medium' | 'high' | 'critical'
  batches?: Batch[]
}

export type Batch = {
  id: string
  batchNumber: string
  expiryDate: string
  quantity: number
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

