import { Routes, Route } from 'react-router-dom'
import { PageWrapper } from '../components/layout/PageWrapper'
import { HomePage } from '../features/home/HomePage'
import { InventoryListPage } from '../features/inventory/InventoryListPage'
import { ItemDetailsPage } from '../features/inventory/ItemDetailsPage'
import { ReceiveItemsPage } from '../features/receiving/ReceiveItemsPage'
import { AlertsPage } from '../features/alerts/AlertsPage'
import { POSPage } from '../features/pos/POSPage'
import { SalesHistoryPage } from '../features/pos/SalesHistoryPage'
import { CustomerListPage } from '../features/pos/CustomerListPage'
import { VendorListPage } from '../features/receiving/VendorListPage'
import { AnalyticsPage } from '../features/dashboard/AnalyticsPage'
import { ComingSoonPage } from '../features/shared/ComingSoonPage'
import {
  ClipboardList,
  Settings,
  FileText,
  Receipt,
  Calendar,
  Award,
  Clock,
  Box,
  FileCheck,
  Edit3,
  Menu,
  Monitor,
  Smartphone,
  Building2,
  CreditCard,
  HelpCircle
} from 'lucide-react'

import { ExpiryTrackingPage } from '../features/inventory/ExpiryTrackingPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<HomePage />} />

        {/* POS SECTION */}
        <Route path="customer-orders" element={<ComingSoonPage title="Customer Orders" icon={ClipboardList} />} />
        <Route path="make-sale" element={<POSPage />} />
        <Route path="sales-history" element={<SalesHistoryPage />} />
        <Route path="customer-list" element={<CustomerListPage />} />
        <Route path="order-list" element={<ComingSoonPage title="Order List" icon={FileText} />} />
        <Route path="held-receipts" element={<ComingSoonPage title="Held Receipts" icon={Receipt} />} />
        <Route path="end-of-day" element={<ComingSoonPage title="End of Day" icon={Calendar} />} />
        <Route path="reward-manager" element={<ComingSoonPage title="Reward Manager" icon={Award} />} />

        {/* PURCHASING SECTION */}
        <Route path="purchase-orders" element={<ComingSoonPage title="Purchase Orders" icon={ClipboardList} />} />
        <Route path="receiving-vouchers" element={<ReceiveItemsPage />} />
        <Route path="receiving-history" element={<ComingSoonPage title="Receiving History" icon={Clock} />} />
        <Route path="item-list" element={<InventoryListPage />} />
        <Route path="po-list" element={<ComingSoonPage title="PO List" icon={FileCheck} />} />
        <Route path="held-vouchers" element={<ComingSoonPage title="Held Vouchers" icon={Edit3} />} />
        <Route path="vendor-list" element={<VendorListPage />} />
        <Route path="department-list" element={<ComingSoonPage title="Department List" icon={Menu} />} />

        {/* IEDMS SECTION */}
        <Route path="expiry-tracking" element={<ExpiryTrackingPage />} />
        <Route path="data-analytics" element={<AnalyticsPage />} />
        <Route path="inventory-monitor" element={<ComingSoonPage title="Real-Time Inventory Status" icon={Monitor} />} />
        <Route path="expiry-alerts" element={<AlertsPage />} />
        <Route path="product-checklist" element={<ComingSoonPage title="Batch & Shelf-Life Details" icon={Box} />} />
        <Route path="reports-docs" element={<ComingSoonPage title="Expiry Impact Reports" icon={FileText} />} />
        <Route path="financial-impact" element={<ComingSoonPage title="Waste & Cost Impact" icon={Building2} />} />
        <Route path="settings" element={<ComingSoonPage title="System Settings" icon={Settings} />} />

        {/* OPERATIONS SECTION */}
        <Route path="reports" element={<ComingSoonPage title="Reports Center" icon={FileText} />} />
        <Route path="mobile-sync" element={<ComingSoonPage title="Mobile Sync" icon={Smartphone} />} />
        <Route path="financial-centre" element={<ComingSoonPage title="Financial Centre" icon={Building2} />} />
        <Route path="active-payments" element={<ComingSoonPage title="Active Payments" icon={CreditCard} />} />
        <Route path="preferences" element={<ComingSoonPage title="Preferences" icon={Settings} />} />
        <Route path="get-support" element={<ComingSoonPage title="Get Support" icon={HelpCircle} />} />

        <Route path="inventory/:id" element={<ItemDetailsPage />} />
      </Route>
    </Routes>
  )
}


