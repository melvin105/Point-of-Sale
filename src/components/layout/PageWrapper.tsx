import { Outlet } from 'react-router-dom'
import { LeftSidebar } from './LeftSidebar'
import { NotificationsSidebar } from './NotificationsSidebar'
import { MainTopbar } from './MainTopbar'

export function PageWrapper() {
  return (
    <div className="flex h-screen bg-gray-50">
      <LeftSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainTopbar />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
      <NotificationsSidebar />
    </div>
  )
}

