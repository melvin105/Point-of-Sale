export interface Notification {
  id: string
  type: 'warning' | 'info' | 'success' | 'alert'
  title: string
  message: string
  time: string
}

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'warning',
    title: 'Expiry Alert',
    message: '5 items expiring within 7 days',
    time: '2 mins ago',
  },
  {
    id: '2',
    type: 'alert',
    title: 'Low Stock',
    message: 'Milk products running low',
    time: '15 mins ago',
  },
  {
    id: '3',
    type: 'info',
    title: 'Price Update',
    message: 'Price changes for 3 items',
    time: '1 hour ago',
  },
  {
    id: '4',
    type: 'success',
    title: 'Sync Complete',
    message: 'Inventory sync completed',
    time: '2 hours ago',
  },
]

