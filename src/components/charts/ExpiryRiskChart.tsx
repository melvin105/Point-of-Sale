interface ExpiryRiskChartProps {
  data: Array<{
    date: string
    riskLevel: 'low' | 'medium' | 'high' | 'critical'
    count: number
  }>
}

export function ExpiryRiskChart({ data }: ExpiryRiskChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Expiry Risk Overview</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className={`w-full rounded-t transition-all ${
                item.riskLevel === 'critical'
                  ? 'bg-red-500'
                  : item.riskLevel === 'high'
                    ? 'bg-orange-500'
                    : item.riskLevel === 'medium'
                      ? 'bg-yellow-500'
                      : 'bg-green-500'
              }`}
              style={{ height: `${(item.count / Math.max(...data.map((d) => d.count))) * 100}%` }}
            />
            <span className="text-xs text-gray-600 mt-2">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

