interface SalesVelocityChartProps {
  data: Array<{
    product: string
    velocity: number
  }>
}

export function SalesVelocityChart({ data }: SalesVelocityChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Sales Velocity</h3>
      <div className="space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full transition-all"
                style={{ width: `${(item.velocity / Math.max(...data.map((d) => d.velocity))) * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-700 w-32 truncate">{item.product}</span>
            <span className="text-sm font-medium text-gray-900">{item.velocity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

