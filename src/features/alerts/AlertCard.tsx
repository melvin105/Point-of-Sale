import { Badge } from '../../components/common/Badge'

interface Alert {
  id: number
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  message: string
  productName: string
  expiryDate: string
  batchNumber: string
}

interface AlertCardProps {
  alert: Alert
}

export function AlertCard({ alert }: AlertCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge
              variant={
                alert.severity === 'critical'
                  ? 'danger'
                  : alert.severity === 'high'
                    ? 'warning'
                    : 'info'
              }
            >
              {alert.severity}
            </Badge>
            <span className="text-sm text-gray-600">{alert.type}</span>
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{alert.message}</h3>
          <p className="text-sm text-gray-600">Product: {alert.productName}</p>
          <p className="text-sm text-gray-600">Batch: {alert.batchNumber}</p>
          <p className="text-sm text-gray-600">Expiry: {new Date(alert.expiryDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

