import { NavLink } from 'react-router-dom'

interface NavItem {
  path: string
  label: string
  icon?: React.ReactNode
}

const navItems: NavItem[] = [
  { path: '/', label: 'Dashboard' },
  { path: '/pos', label: 'Point of Sale' },
  { path: '/inventory', label: 'Inventory' },
  { path: '/receiving', label: 'Receiving' },
  { path: '/alerts', label: 'Alerts' },
  { path: '/reports', label: 'Reports' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        <h1 className="text-xl font-bold">POS System</h1>
      </div>
      <nav className="mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-3 hover:bg-gray-700 transition-colors ${
                isActive ? 'bg-gray-700 border-l-4 border-blue-500' : ''
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

