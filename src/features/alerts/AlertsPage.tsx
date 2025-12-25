import { AlertCard } from './AlertCard'

export function AlertsPage() {
  const alerts = [
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

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Alerts</h1>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <AlertCard key={alert.id} alert={alert} />
        ))}
      </div>
    </div>
  )
}

