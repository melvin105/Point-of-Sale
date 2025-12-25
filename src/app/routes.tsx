import { Routes, Route } from 'react-router-dom'
import { PageWrapper } from '../components/layout/PageWrapper'
import { HomePage } from '../features/home/HomePage'
import { DashboardPage } from '../features/dashboard/DashboardPage'
import { InventoryListPage } from '../features/inventory/InventoryListPage'
import { ItemDetailsPage } from '../features/inventory/ItemDetailsPage'
import { ReceiveItemsPage } from '../features/receiving/ReceiveItemsPage'
import { AlertsPage } from '../features/alerts/AlertsPage'
import { ReportsPage } from '../features/reports/ReportsPage'
import { POSPage } from '../features/pos/POSPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="inventory" element={<InventoryListPage />} />
        <Route path="inventory/:id" element={<ItemDetailsPage />} />
        <Route path="receiving" element={<ReceiveItemsPage />} />
        <Route path="alerts" element={<AlertsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="pos" element={<POSPage />} />
      </Route>
    </Routes>
  )
}

