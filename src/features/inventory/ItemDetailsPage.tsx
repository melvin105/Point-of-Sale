import { useParams } from 'react-router-dom'
import { BatchList } from './BatchList'
import { Badge } from '../../components/common/Badge'

export function ItemDetailsPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Item Details</h1>
        <Badge variant="info">ID: {id}</Badge>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Batches</h2>
        <BatchList itemId={id || ''} />
      </div>
    </div>
  )
}

