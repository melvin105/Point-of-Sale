export interface Customer {
    id: string
    name: string
    phone: string
    email: string
    totalSpent: number
    lastVisit: string
}

export const customers: Customer[] = [
    { id: '1', name: 'John Smith', phone: '555-0101', email: 'john@example.com', totalSpent: 1250.00, lastVisit: '11/20/2025' },
    { id: '2', name: 'Jane Doe', phone: '555-0102', email: 'jane@example.com', totalSpent: 450.20, lastVisit: '11/22/2025' },
    { id: '3', name: 'Bob Wilson', phone: '555-0103', email: 'bob@example.com', totalSpent: 3200.00, lastVisit: '11/24/2025' },
    { id: '4', name: 'Alice Brown', phone: '555-0104', email: 'alice@example.com', totalSpent: 890.00, lastVisit: '11/15/2025' },
    { id: '5', name: 'Charlie Davis', phone: '555-0105', email: 'charlie@example.com', totalSpent: 15.00, lastVisit: '11/25/2025' },
]
