import { Table } from '../../components/common/Table'
import type { InventoryItem } from '../../types/inventory'

interface InventoryTableProps {
  items: InventoryItem[]
  onItemClick?: (item: InventoryItem) => void
}

export function InventoryTable({ items, onItemClick }: InventoryTableProps) {
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
  ]

  return <Table columns={columns} data={items} />
}

