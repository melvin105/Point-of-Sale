import { Bell, AlertTriangle, Info, CheckCircle, X } from 'lucide-react'

interface Notification {
  id: string
  type: 'warning' | 'info' | 'success' | 'alert'
  title: string
  message: string
  time: string
}

const notifications: Notification[] = [
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

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'warning':
      return <AlertTriangle size={18} className="text-yellow-500" />
    case 'alert':
      return <AlertTriangle size={18} className="text-red-500" />
    case 'info':
      return <Info size={18} className="text-blue-500" />
    case 'success':
      return <CheckCircle size={18} className="text-green-500" />
    default:
      return <Bell size={18} className="text-gray-500" />
  }
}

export function NotificationsSidebar() {
  return (
    <aside className="w-72 bg-white border-l border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Bell size={20} className="text-gray-700" />
            <h2 className="text-sm font-semibold text-gray-900">Notifications</h2>
          </div>
          <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
            {notifications.length}
          </span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group"
          >
            <div className="flex gap-3">
              <div className="flex-shrink-0 mt-0.5">
                {getNotificationIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xs font-semibold text-gray-900 truncate">
                    {notification.title}
                  </h3>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <X size={14} className="text-gray-400 hover:text-gray-600" />
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-1 line-clamp-2">
                  {notification.message}
                </p>
                <span className="text-[10px] text-gray-400">{notification.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-gray-200">
        <button className="w-full text-xs text-blue-600 hover:text-blue-700 font-medium">
          View all notifications
        </button>
      </div>
    </aside>
  )
}


