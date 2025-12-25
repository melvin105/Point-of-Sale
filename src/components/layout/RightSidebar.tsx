import {
  BarChart3,
  Smartphone,
  Building2,
  CreditCard,
  HelpCircle,
} from 'lucide-react'

interface SidebarItem {
  icon: React.ReactNode
  label: string
  action: () => void
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <BarChart3 size={24} />,
    label: 'Reports',
    action: () => console.log('Reports'),
  },
  {
    icon: <Smartphone size={24} />,
    label: 'Mobile Sync',
    action: () => console.log('Mobile Sync'),
  },
  {
    icon: <Building2 size={24} />,
    label: 'Financial Centre',
    action: () => console.log('Financial Centre'),
  },
  {
    icon: <CreditCard size={24} />,
    label: 'Active Payments',
    action: () => console.log('Active Payments'),
  },
  {
    icon: <HelpCircle size={24} />,
    label: 'Get Support',
    action: () => console.log('Get Support'),
  },
]

export function RightSidebar() {
  return (
    <aside className="w-20 bg-white border-l border-gray-200 flex flex-col items-center py-6">
      <nav className="flex-1 flex flex-col gap-6 mt-8">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={item.action}
            className="flex flex-col items-center justify-center gap-2 px-3 py-3 rounded-lg text-gray-600 hover:text-blue-500 hover:bg-gray-50 transition-colors group"
          >
            {item.icon}
            <span className="text-xs font-medium text-center leading-tight">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

