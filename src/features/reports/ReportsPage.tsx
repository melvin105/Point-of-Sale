import { ReportFilters } from './ReportFilters'

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <ReportFilters />
      </div>
    </div>
  )
}

