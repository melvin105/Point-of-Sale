import { AlertCard } from './AlertCard'
import { alerts } from '../../data/alerts'

export function AlertsPage() {

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

