export interface Vendor {
    id: string
    name: string
    contact: string
}

export const vendors: Vendor[] = [
    { id: '1', name: 'Global Foods', contact: 'John Doe' },
    { id: '2', name: 'Home Essentials Ltd', contact: 'Jane Smith' },
    { id: '3', name: 'Tech Supplies Inc.', contact: 'Support' },
]

export const receivingVouchers: Array<{
    id: string
    vendorId: string
    date: string
    items: Array<{ productId: string, quantity: number, cost: number }>
    totalCost: number
}> = []
