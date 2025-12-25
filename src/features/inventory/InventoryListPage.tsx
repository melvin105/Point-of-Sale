import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from '../../components/common/Table'
import { Badge } from '../../components/common/Badge'
import { Button } from '../../components/common/Button'
import type { InventoryItem } from '../../types/inventory'

export function InventoryListPage() {
  const navigate = useNavigate()
  const [items] = useState<InventoryItem[]>([])

  const columns = [
    {
      header: 'Product Name',
      accessor: (row: InventoryItem) => row.name,
    },
    {
      header: 'SKU',
      accessor: (row: InventoryItem) => row.sku,
    },
    {
      header: 'Stock',
      accessor: (row: InventoryItem) => row.quantity,
    },
    {
      header: 'Expiry Risk',
      accessor: (row: InventoryItem) => (
        <Badge variant={row.expiryRisk === 'high' ? 'danger' : row.expiryRisk === 'medium' ? 'warning' : 'success'}>
          {row.expiryRisk}
        </Badge>
      ),
    },
    {
      header: 'Actions',
      accessor: (row: InventoryItem) => (
        <Button size="sm" onClick={() => navigate(`/inventory/${row.id}`)}>
          View Details
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
        <Button>Add Item</Button>
      </div>
      <Table columns={columns} data={items} />
    </div>
  )
}

