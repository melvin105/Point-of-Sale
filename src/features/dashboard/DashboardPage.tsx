import { StatCards } from './StatCards'
import { RecentAlerts } from './RecentAlerts'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <StatCards />
      <RecentAlerts />
    </div>
  )
}

