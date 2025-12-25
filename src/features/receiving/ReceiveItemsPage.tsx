import { ReceiveForm } from './ReceiveForm'

export function ReceiveItemsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Receive Items</h1>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <ReceiveForm />
      </div>
    </div>
  )
}

