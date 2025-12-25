interface WasteTrendChartProps {
  data: Array<{
    period: string
    waste: number
    value: number
  }>
}

export function WasteTrendChart({ data }: WasteTrendChartProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Waste Trend</h3>
      <div className="h-64 flex items-end justify-between gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-red-500 rounded-t transition-all"
              style={{ height: `${(item.waste / Math.max(...data.map((d) => d.waste))) * 100}%` }}
            />
            <span className="text-xs text-gray-600 mt-2">{item.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

