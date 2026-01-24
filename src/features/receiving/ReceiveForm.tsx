import { useState, useMemo } from 'react'
import { Plus, Trash2, Save, Search } from 'lucide-react'
import { vendors } from '../../data/receiving'
import { products } from '../../data/pos'

interface VoucherItem {
  id: string
  productId: string
  name: string
  quantity: number
  cost: number
  expiryDate?: string
  batchNumber?: string
  total: number
}

export function ReceiveForm() {
  const [selectedVendor, setSelectedVendor] = useState('')
  const [voucherItems, setVoucherItems] = useState<VoucherItem[]>([])

  // Item Entry State
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [cost, setCost] = useState(0)
  const [expiryDate, setExpiryDate] = useState('')
  const [batchNumber, setBatchNumber] = useState('')

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return []
    const lower = searchTerm.toLowerCase()
    return products.filter(p => p.name.toLowerCase().includes(lower) || p.sku.toLowerCase().includes(lower))
  }, [searchTerm])

  const handleProductSelect = (product: typeof products[0]) => {
    setSelectedProduct(product)
    setSearchTerm(product.name)
    setCost(product.price * 0.7) // Default cost assumption
  }

  const addItem = () => {
    if (!selectedProduct) return

    const newItem: VoucherItem = {
      id: crypto.randomUUID(),
      productId: selectedProduct.id,
      name: selectedProduct.name,
      quantity,
      cost,
      expiryDate,
      batchNumber,
      total: quantity * cost
    }

    setVoucherItems([...voucherItems, newItem])

    // Reset item entry
    setSelectedProduct(null)
    setSearchTerm('')
    setQuantity(1)
    setCost(0)
    setExpiryDate('')
    setBatchNumber('')
  }

  const removeItem = (id: string) => {
    setVoucherItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal = voucherItems.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="flex flex-col h-full gap-6">
      {/* Header: Vendor Selection */}
      <div className="grid grid-cols-2 gap-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Vendor</label>
          <select
            value={selectedVendor}
            onChange={(e) => setSelectedVendor(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
          >
            <option value="">-- Choose Vendor --</option>
            {vendors.map(v => (
              <option key={v.id} value={v.id}>{v.name}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-end">
          <div className="text-right">
            <div className="text-sm text-gray-500 uppercase tracking-wider">Voucher Total</div>
            <div className="text-2xl font-bold text-gray-900">${subtotal.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Item Entry Area */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">Add Items to Voucher</h3>
        <div className="grid grid-cols-6 gap-3 items-end">
          <div className="col-span-2 relative">
            <label className="block text-xs text-gray-500 mb-1">Product Search</label>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
              {searchTerm && !selectedProduct && filteredProducts.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  {filteredProducts.map(p => (
                    <button
                      key={p.id}
                      onClick={() => handleProductSelect(p)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-50 text-sm"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Cost / Unit</label>
            <input type="number" value={cost} onChange={e => setCost(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Qty</label>
            <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>

          <div className="col-span-1">
            <label className="block text-xs text-gray-500 mb-1">Expiry</label>
            <input type="date" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm" />
          </div>

          <div className="col-span-1">
            <button
              onClick={addItem}
              disabled={!selectedProduct}
              className="w-full flex items-center justify-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md disabled:opacity-50"
            >
              <Plus size={16} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Voucher Items Table */}
      <div className="flex-1 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="grid grid-cols-12 gap-4 p-3 bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div className="col-span-4">Product</div>
          <div className="col-span-2 text-right">Cost</div>
          <div className="col-span-1 text-center">Qty</div>
          <div className="col-span-2">Expiry / Batch</div>
          <div className="col-span-2 text-right">Total</div>
          <div className="col-span-1"></div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {voucherItems.map(item => (
            <div key={item.id} className="grid grid-cols-12 gap-4 p-3 border-b border-gray-100 items-center hover:bg-gray-50 text-sm">
              <div className="col-span-4 font-medium text-gray-900">{item.name}</div>
              <div className="col-span-2 text-right">${item.cost.toFixed(2)}</div>
              <div className="col-span-1 text-center">{item.quantity}</div>
              <div className="col-span-2 text-xs text-gray-500">
                {item.expiryDate || '-'} <br /> {item.batchNumber || ''}
              </div>
              <div className="col-span-2 text-right font-medium">${item.total.toFixed(2)}</div>
              <div className="col-span-1 text-right">
                <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
          {voucherItems.length === 0 && (
            <div className="p-8 text-center text-gray-400 italic">No items in voucher</div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium shadow-sm transition-all">
            <Save size={18} /> Process Voucher
          </button>
        </div>
      </div>
    </div>
  )
}

