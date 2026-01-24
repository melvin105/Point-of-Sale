export interface StatCard {
  label: string
  value: string
  change: string
}

export const stats: StatCard[] = [
  { label: 'Total Inventory Items', value: '1,234', change: '+12%' },
  { label: 'Expiring Soon', value: '45', change: '-5%' },
  { label: 'Today\'s Sales', value: '$12,345', change: '+8%' },
  { label: 'Active Alerts', value: '23', change: '+3' },
]

