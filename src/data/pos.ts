export interface CartItem {
  id: string
  name: string
  quantity: number
  price: number
  total: number
}

export const cartItems: CartItem[] = []

export const products: Array<{
  id: string
  name: string
  price: number
  sku: string
  stock: number
  category: string
}> = [
    { id: '1', name: 'Toothbrush Powers Hard', price: 8.00, sku: '2121', stock: 7, category: 'Accessories' },
    { id: '2', name: 'Nova Gold Hair Spray', price: 34.00, sku: '3316', stock: 0, category: 'Accessories' },
    { id: '3', name: 'Propa Mosquito Coil', price: 8.00, sku: '80', stock: 24, category: 'Accessories' },
    { id: '4', name: 'Key Holder Hand', price: 4.00, sku: '2888', stock: 4, category: 'Accessories' },
    { id: '5', name: 'Storage Container Titiz S/S', price: 55.00, sku: '3613', stock: 2, category: 'Accessories' },
    { id: '6', name: 'Wig Brush S/S', price: 2.00, sku: '512', stock: 10, category: 'Accessories' },
    { id: '7', name: 'Carex Sensitive Hand S.', price: 5.50, sku: '1331', stock: 15, category: 'Accessories' },
    { id: '8', name: 'Disposable Spoons', price: 17.00, sku: '1150', stock: 2, category: 'Accessories' },
    { id: '9', name: 'Gift Bag Chinese Names', price: 3.00, sku: '1201', stock: 7, category: 'Accessories' },
    { id: '10', name: 'Softcare Sanitary Pad Pink', price: 15.00, sku: '1928', stock: 12, category: 'Accessories' },
    { id: '11', name: 'Pegs - CS Small Size', price: 7.00, sku: '881', stock: 11, category: 'Accessories' },
    { id: '12', name: '1Litre Bucket', price: 5.00, sku: '1983', stock: 10, category: 'Accessories' },
    { id: '13', name: 'Bowl Lucky Star B46', price: 10.00, sku: '882', stock: 3, category: 'Accessories' },
  ]
