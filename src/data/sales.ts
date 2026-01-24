export interface SaleRecord {
    id: string
    date: string
    status: 'Regular' | 'Return' | 'Held'
    receiptType: string
    workstation: string
    cashier: string
    customerName: string
    itemCount: number
    total: number
    paymentType: 'Cash' | 'Credit' | 'Check' | 'Gift'
}

export const salesHistory: SaleRecord[] = [
    { id: '1001', date: '11/25/2025 10:09 AM', status: 'Regular', receiptType: 'Sales', workstation: '1', cashier: 'Rebecca', customerName: 'Walk-in', itemCount: 3, total: 34.00, paymentType: 'Cash' },
    { id: '1002', date: '11/12/2025 09:15 AM', status: 'Regular', receiptType: 'Sales', workstation: '1', cashier: 'Rebecca', customerName: 'John Smith', itemCount: 2, total: 22.00, paymentType: 'Cash' },
    { id: '1003', date: '11/10/2025 02:30 PM', status: 'Regular', receiptType: 'Sales', workstation: '1', cashier: 'Rebecca', customerName: 'Jane Doe', itemCount: 1, total: 1.20, paymentType: 'Cash' },
    { id: '1004', date: '11/08/2025 11:45 AM', status: 'Regular', receiptType: 'Sales', workstation: '1', cashier: 'Rebecca', customerName: 'Walk-in', itemCount: 3, total: 4.00, paymentType: 'Cash' },
    { id: '1005', date: '11/05/2025 04:20 PM', status: 'Regular', receiptType: 'Sales', workstation: '1', cashier: 'Rebecca', customerName: 'Walk-in', itemCount: 10, total: 156.50, paymentType: 'Credit' },
]
