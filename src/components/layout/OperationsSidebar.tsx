import {
  BarChart3,
  Smartphone,
  Building2,
  CreditCard,
  HelpCircle,
  Settings,
} from 'lucide-react'

interface OperationItem {
  icon: React.ReactNode
  label: string
  path: string
}

const operations: OperationItem[] = [
  {
    icon: <BarChart3 size={32} />,
    label: 'Reports',
    path: '/reports',
  },
  {
    icon: <Smartphone size={32} />,
    label: 'Mobile Sync',
    path: '/mobile-sync',
  },
  {
    icon: <Building2 size={32} />,
    label: 'Financial Centre',
    path: '/financial-centre',
  },
  {
    icon: <CreditCard size={32} />,
    label: 'Active Payments',
    path: '/active-payments',
  },
  {
    icon: <Settings size={32} />,
    label: 'Preferences',
    path: '/preferences',
  },
  {
    icon: <HelpCircle size={32} />,
    label: 'Get Support',
    path: '/get-support',
  },
]

export function OperationsSidebar() {
  return (
    <aside className="w-40 bg-indigo-600 flex flex-col h-full shadow-lg">
      {/* Header */}
      <div className="px-3 py-4 border-b border-indigo-500">
        <h2
          className="text-white text-xs font-bold tracking-wider text-center uppercase"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Operations
        </h2>
      </div>

      {/* Operations List */}
      <div className="flex-1 flex flex-col justify-center gap-3 py-4">
        {operations.map((operation) => (
          <button
            key={operation.path}
            onClick={() => {
              console.log('Navigate to:', operation.path)
            }}
            className="flex flex-col items-center justify-center gap-2 px-3 py-3 hover:bg-indigo-700 transition-colors group"
          >
            <div className="text-white group-hover:text-indigo-100 transition-colors">
              {operation.icon}
            </div>
            <span className="text-white text-[10px] font-medium text-center leading-tight">
              {operation.label}
            </span>
          </button>
        ))}
      </div>
    </aside>
  )
}


