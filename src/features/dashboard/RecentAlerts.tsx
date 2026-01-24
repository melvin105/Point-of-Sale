import { Badge } from '../../components/common/Badge'
import { recentAlerts } from '../../data/alerts'

export function RecentAlerts() {
  const alerts = recentAlerts

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Recent Alerts</h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
            <div className="flex-1">
              <p className="text-sm text-gray-900">{alert.message}</p>
              <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  )
}

