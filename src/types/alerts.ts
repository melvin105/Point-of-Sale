export type Alert = {
  id: string
  type: 'expiry' | 'low_stock' | 'waste' | 'other'
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  productName?: string
  expiryDate?: string
  batchNumber?: string
  createdAt: string
  read: boolean
}

