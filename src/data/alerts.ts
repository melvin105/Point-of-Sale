export interface Alert {
  id: number
  type?: string
  severity: 'critical' | 'high' | 'medium' | 'low'
  message: string
  productName?: string
  expiryDate?: string
  batchNumber?: string
  time?: string
}

export const alerts: Alert[] = [
  {
    id: 1,
    type: 'expiry',
    severity: 'critical',
    message: 'Product XYZ expires in 2 days',
    productName: 'Product XYZ',
    expiryDate: '2024-01-15',
    batchNumber: 'BATCH-001',
  },
]

export const recentAlerts: Alert[] = [
  {
    id: 1,
    message: 'Product XYZ expires in 3 days',
    severity: 'high',
    time: '2 hours ago',
  },
  {
    id: 2,
    message: 'Low stock alert for Product ABC',
    severity: 'medium',
    time: '5 hours ago',
  },
  {
    id: 3,
    message: 'Batch #1234 expired',
    severity: 'critical',
    time: '1 day ago',
  },
]

