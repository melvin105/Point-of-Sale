export const EXPIRY_RISK_THRESHOLDS = {
  CRITICAL: 3, // days
  HIGH: 7, // days
  MEDIUM: 30, // days
} as const

export const ROUTES = {
  DASHBOARD: '/',
  POS: '/pos',
  INVENTORY: '/inventory',
  RECEIVING: '/receiving',
  ALERTS: '/alerts',
  REPORTS: '/reports',
} as const

