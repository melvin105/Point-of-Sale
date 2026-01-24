import { useState, useMemo } from 'react'
import { Search, Trash2, CreditCard, Banknote, Gift, User, Save } from 'lucide-react'
import { products, type CartItem } from '../../data/pos'

export function SalePanel() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [customerName, setCustomerName] = useState('')

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
            : item
        )
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        quantity: 1,
        price: product.price,
        total: product.price
      }]
    })
  }

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQty, total: newQty * item.price }
      }
      return item
    }))
  }

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products
    const lower = searchTerm.toLowerCase()
    return products.filter(p =>
      p.name.toLowerCase().includes(lower) ||
      p.sku.toLowerCase().includes(lower)
    )
  }, [searchTerm])

  const subtotal = cart.reduce((sum, item) => sum + item.total, 0)
  const tax = subtotal * 0.0825 // Example tax rate
  const total = subtotal + tax

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] gap-4">
      {/* Top Bar: Search & Customer */}
      <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Scan or enter item information..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
        </div>
        <div className="flex-1 relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Enter customer name or phone..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Right: Cart (Receipt) - Now Full Width */}
        <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Item Search Suggestions (Floating) */}
          {searchTerm && (
            <div className="absolute top-0 left-0 right-0 z-50 mx-4 bg-white border border-gray-200 rounded-b-lg shadow-xl max-h-60 overflow-y-auto">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <button
                    key={product.id}
                    onClick={() => {
                      addToCart(product)
                      setSearchTerm('')
                    }}
                    className="w-full flex items-center justify-between p-3 hover:bg-indigo-50 border-b border-gray-100 last:border-0 text-left"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500">SKU: {product.sku} | Stock: {product.stock}</div>
                    </div>
                    <div className="font-semibold text-indigo-600">${product.price.toFixed(2)}</div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500 italic">No products found matching "{searchTerm}"</div>
              )}
            </div>
          )}

          {/* Cart Header */}
          <div className="grid grid-cols-12 gap-4 p-3 bg-gray-50 border-b border-gray-200 font-medium text-gray-700 text-sm">
            <div className="col-span-1">Item #</div>
            <div className="col-span-1">SKU</div>
            <div className="col-span-4">Item Name</div>
            <div className="col-span-2 text-right">Price</div>
            <div className="col-span-2 text-center">Qty</div>
            <div className="col-span-2 text-right">Ext Price</div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <Search size={48} className="mb-2 opacity-50" />
                <p>Scan an item or use the search bar to start sale</p>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 p-3 border-b border-gray-100 items-center hover:bg-gray-50 text-sm">
                  <div className="col-span-1 text-gray-500">{index + 1}</div>
                  <div className="col-span-1 text-gray-400 text-xs">#{products.find(p => p.id === item.id)?.sku}</div>
                  <div className="col-span-4 font-medium text-gray-900">{item.name}</div>
                  <div className="col-span-2 text-right text-gray-600">${item.price.toFixed(2)}</div>
                  <div className="col-span-2 flex items-center justify-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                    >
                      +
                    </button>
                  </div>
                  <div className="col-span-2 flex items-center justify-end gap-3">
                    <span className="font-semibold text-indigo-700">${item.total.toFixed(2)}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 p-1 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Totals & Actions */}
          <div className="p-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-end mb-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors">
                  Add Item/Service
                </button>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 rounded-md transition-colors">
                  Give Discount
                </button>
              </div>
              <div className="flex gap-8 text-sm">
                <div className="text-right space-y-1">
                  <div className="text-gray-600">Subtotal</div>
                  <div className="text-gray-600">Tax (8.25%)</div>
                  <div className="text-xl font-bold text-gray-900 mt-2">Total</div>
                </div>
                <div className="text-right space-y-1 w-32">
                  <div className="font-medium">${subtotal.toFixed(2)}</div>
                  <div className="font-medium">${tax.toFixed(2)}</div>
                  <div className="text-xl font-bold text-indigo-600 mt-2">${total.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-3">
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-all active:scale-95">
                <Banknote size={24} />
                <span className="font-medium text-sm text-blue-50">Cash</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition-all active:scale-95">
                <CreditCard size={24} />
                <span className="font-medium text-sm text-indigo-50">Credit</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-sm transition-all active:scale-95">
                <Gift size={24} />
                <span className="font-medium text-sm text-teal-50">Gift Card</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-sm transition-all active:scale-95">
                <User size={24} />
                <span className="font-medium text-sm text-gray-50">Account</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg shadow-sm transition-all active:scale-95">
                <Save size={24} />
                <span className="font-medium text-sm">Hold / Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

