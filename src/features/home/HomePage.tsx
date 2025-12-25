import {
  ClipboardList,
  ShoppingCart,
  History,
  Users,
  FileText,
  Receipt,
  Calendar,
  Award,
  Package,
  Truck,
  Clock,
  Box,
  FileCheck,
  Edit3,
  Store,
  Menu,
  CheckCircle,
  BarChart3,
  Clipboard,
  Monitor,
  Settings,
  Bell,
  ClipboardCheck,
  FileBarChart,
  DollarSign,
  Smartphone,
  Building2,
  CreditCard,
  HelpCircle,
} from 'lucide-react'

interface MenuItem {
  icon: React.ReactNode
  label: string
  path: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'POINT OF SALE',
    items: [
      {
        icon: <ClipboardList size={32} />,
        label: 'Customer Orders',
        path: '/customer-orders',
      },
      {
        icon: <ShoppingCart size={32} />,
        label: 'Make a Sale',
        path: '/make-sale',
      },
      {
        icon: <History size={32} />,
        label: 'Sales History',
        path: '/sales-history',
      },
      {
        icon: <Users size={32} />,
        label: 'Customer List',
        path: '/customer-list',
      },
      {
        icon: <FileText size={32} />,
        label: 'Order List',
        path: '/order-list',
      },
      {
        icon: <Receipt size={32} />,
        label: 'Held Receipts',
        path: '/held-receipts',
      },
      {
        icon: <Calendar size={32} />,
        label: 'End of Day',
        path: '/end-of-day',
      },
      {
        icon: <Award size={32} />,
        label: 'Reward Manager',
        path: '/reward-manager',
      },
    ],
  },
  {
    title: 'PURCHASING',
    items: [
      {
        icon: <ClipboardList size={32} />,
        label: 'Purchase Orders',
        path: '/purchase-orders',
      },
      {
        icon: <Package size={32} />,
        label: 'Receiving Vouchers',
        path: '/receiving-vouchers',
      },
      {
        icon: <Clock size={32} />,
        label: 'Receiving History',
        path: '/receiving-history',
      },
      {
        icon: <Box size={32} />,
        label: 'Item List',
        path: '/item-list',
      },
      {
        icon: <FileCheck size={32} />,
        label: 'PO List',
        path: '/po-list',
      },
      {
        icon: <Edit3 size={32} />,
        label: 'Held Vouchers',
        path: '/held-vouchers',
      },
      {
        icon: <Clipboard size={32} />,
        label: 'Vendor List',
        path: '/vendor-list',
      },
      {
        icon: <Menu size={32} />,
        label: 'Department List',
        path: '/department-list',
      },
    ],
  },
  {
    title: 'IEDMS',
    items: [
      {
        icon: <CheckCircle size={32} />,
        label: 'Automated Expiry Date Tracking',
        path: '/expiry-tracking',
      },
      {
        icon: <BarChart3 size={32} />,
        label: 'Data Analytics',
        path: '/data-analytics',
      },
      {
        icon: <Monitor size={32} />,
        label: 'Inventory Monitor',
        path: '/inventory-monitor',
      },
      {
        icon: <Settings size={32} />,
        label: 'System Settings and Configuration',
        path: '/settings',
      },
      {
        icon: <Bell size={32} />,
        label: 'Expiry Date Alerts',
        path: '/expiry-alerts',
      },
      {
        icon: <ClipboardCheck size={32} />,
        label: 'Product Checklist and Details',
        path: '/product-checklist',
      },
      {
        icon: <FileBarChart size={32} />,
        label: 'Reports and Documentation',
        path: '/reports-docs',
      },
      {
        icon: <DollarSign size={32} />,
        label: 'Cost Savings and Financial Impact',
        path: '/financial-impact',
      },
    ],
  },
]

const operationsSection: MenuSection = {
  title: 'OPERATIONS',
  items: [
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
  ],
}

export function HomePage() {
  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 flex gap-4 py-2 px-2">
        {/* Left Column - Main Sections */}
        <div className="flex-1 flex flex-col justify-evenly gap-2">
          {menuSections.map((section) => (
            <div key={section.title} className="flex gap-3 items-stretch flex-shrink-0">
              {/* Vertical Section Title */}
              <div className="flex items-center justify-center bg-indigo-600 rounded-lg px-2.5 min-w-[48px] shadow-sm">
                <div
                  className="text-white text-[9px] font-bold tracking-wider uppercase"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                  }}
                >
                  {section.title}
                </div>
              </div>

              {/* Grid of Menu Items */}
              <div className="flex-1 grid grid-cols-4 gap-x-4 gap-y-1">
                {section.items.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      // Navigation will be handled later
                      console.log('Navigate to:', item.path)
                    }}
                    className="flex flex-col items-center justify-center gap-1.5 py-2 px-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-900 text-[10px] font-medium text-center leading-tight">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Operations Section */}
        <div className="flex flex-col justify-center">
          <div className="flex gap-3 items-stretch">
            {/* Vertical Section Title */}
            <div className="flex items-center justify-center bg-indigo-600 rounded-lg px-2.5 min-w-[48px] shadow-sm">
              <div
                className="text-white text-[9px] font-bold tracking-wider uppercase"
                style={{
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                }}
              >
                {operationsSection.title}
              </div>
            </div>

            {/* Grid of Menu Items */}
            <div className="grid grid-cols-1 gap-y-1">
              {operationsSection.items.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    // Navigation will be handled later
                    console.log('Navigate to:', item.path)
                  }}
                  className="flex flex-col items-center justify-center gap-1.5 py-2 px-2 hover:bg-blue-50 rounded-lg transition-all duration-200 group"
                >
                  <div className="text-gray-700 group-hover:text-blue-600 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-900 text-[10px] font-medium text-center leading-tight">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

