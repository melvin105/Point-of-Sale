import { Table } from '../../components/common/Table'
import { Badge } from '../../components/common/Badge'

interface Batch {
  id: string
  batchNumber: string
  expiryDate: string
  quantity: number
  riskLevel: 'low' | 'medium' | 'high' | 'critical'
}

interface BatchListProps {
  itemId: string
}

export function BatchList({ itemId }: BatchListProps) {
  const batches: Batch[] = []

  const columns = [
    {
      header: 'Batch Number',
      accessor: (row: Batch) => row.batchNumber,
    },
    {
      header: 'Expiry Date',
      accessor: (row: Batch) => new Date(row.expiryDate).toLocaleDateString(),
    },
    {
      header: 'Quantity',
      accessor: (row: Batch) => row.quantity,
    },
    {
      header: 'Risk Level',
      accessor: (row: Batch) => (
        <Badge
          variant={
            row.riskLevel === 'critical'
              ? 'danger'
              : row.riskLevel === 'high'
                ? 'warning'
                : row.riskLevel === 'medium'
                  ? 'info'
                  : 'success'
          }
        >
          {row.riskLevel}
        </Badge>
      ),
    },
  ]

  return <Table columns={columns} data={batches} />
}

