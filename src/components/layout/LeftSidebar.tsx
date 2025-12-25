import { Home, User, Download, FileText } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface SidebarItem {
  icon: React.ReactNode
  label: string
  path: string
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <Home size={24} />,
    label: 'Home',
    path: '/',
  },
  {
    icon: <User size={24} />,
    label: 'Profile',
    path: '/profile',
  },
  {
    icon: <Download size={24} />,
    label: 'Receive Items',
    path: '/receiving',
  },
  {
    icon: <FileText size={24} />,
    label: 'Quick Memo',
    path: '/quick-memo',
  },
]

export function LeftSidebar() {
  return (
    <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6">
      {/* Logo */}
      <div className="mb-8 flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg">
        <div className="text-white text-xl font-bold">◇</div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-6">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-2 px-3 py-3 rounded-lg transition-colors group ${
                isActive
                  ? 'text-blue-500 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-gray-50'
              }`
            }
          >
            {item.icon}
            <span className="text-xs font-medium text-center leading-tight">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

