export function StatCards() {
  const stats = [
    { label: 'Total Inventory Items', value: '1,234', change: '+12%' },
    { label: 'Expiring Soon', value: '45', change: '-5%' },
    { label: 'Today\'s Sales', value: '$12,345', change: '+8%' },
    { label: 'Active Alerts', value: '23', change: '+3' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          <div className="text-sm text-green-600">{stat.change}</div>
        </div>
      ))}
    </div>
  )
}

