import type { InventoryItem, Batch } from '../types/inventory'

export type { InventoryItem, Batch }

export const batches: Batch[] = []

export const inventoryItems: InventoryItem[] = [
  { id: '1', name: 'Toothbrush Powers Hard', sku: '2121', quantity: 7, price: 8.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '2', name: 'Nova Gold Hair Spray', sku: '3316', quantity: 0, price: 34.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '3', name: 'Propa Mosquito Coil', sku: '80', quantity: 24, price: 8.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '4', name: 'Key Holder Hand', sku: '2888', quantity: 4, price: 4.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '5', name: 'Storage Container Titiz S/S', sku: '3613', quantity: 2, price: 55.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '6', name: 'Wig Brush S/S', sku: '512', quantity: 10, price: 2.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '7', name: 'Carex Sensitive Hand S.', sku: '1331', quantity: 15, price: 5.50, department: 'Accessories', expiryRisk: 'medium' },
  { id: '8', name: 'Disposable Spoons', sku: '1150', quantity: 2, price: 17.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '9', name: 'Gift Bag Chinese Names', sku: '1201', quantity: 7, price: 3.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '10', name: 'Softcare Sanitary Pad Pink', sku: '1928', quantity: 12, price: 15.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '11', name: 'Pegs - CS Small Size', sku: '881', quantity: 11, price: 7.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '12', name: '1Litre Bucket', sku: '1983', quantity: 10, price: 5.00, department: 'Accessories', expiryRisk: 'low' },
  { id: '13', name: 'Bowl Lucky Star B46', sku: '882', quantity: 3, price: 10.00, department: 'Accessories', expiryRisk: 'low' },
  // Adding some other categories for grouping demo
  { id: '14', name: 'Milk Fresh 1L', sku: '9001', quantity: 50, price: 1.50, department: 'Dairy', expiryRisk: 'high' },
  { id: '15', name: 'Yoghurt Strawberry', sku: '9002', quantity: 30, price: 0.80, department: 'Dairy', expiryRisk: 'high' },
  { id: '16', name: 'Bread Whole Wheat', sku: '9101', quantity: 20, price: 2.00, department: 'Bakery', expiryRisk: 'critical' },
  { id: '17', name: 'Croissant', sku: '9102', quantity: 15, price: 1.20, department: 'Bakery', expiryRisk: 'high' },
] 
