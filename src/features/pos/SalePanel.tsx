import { useState } from 'react'
import { Button } from '../../components/common/Button'
import { Table } from '../../components/common/Table'

interface CartItem {
  id: string
  name: string
  quantity: number
  price: number
  total: number
}

export function SalePanel() {
  const [cart, setCart] = useState<CartItem[]>([])

  const columns = [
    { header: 'Product', accessor: (row: CartItem) => row.name },
    { header: 'Quantity', accessor: (row: CartItem) => row.quantity },
    { header: 'Price', accessor: (row: CartItem) => `$${row.price.toFixed(2)}` },
    { header: 'Total', accessor: (row: CartItem) => `$${row.total.toFixed(2)}` },
  ]

  const total = cart.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Products</h2>
        <div className="text-gray-600">Product search and selection will go here</div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Cart</h2>
        <Table columns={columns} data={cart} />
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>
          <Button className="w-full" size="lg">
            Complete Sale
          </Button>
        </div>
      </div>
    </div>
  )
}

