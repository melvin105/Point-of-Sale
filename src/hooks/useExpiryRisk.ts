import { useMemo } from 'react'

interface ExpiryRiskParams {
  expiryDate: string
  currentDate?: Date
}

export type ExpiryRiskLevel = 'low' | 'medium' | 'high' | 'critical'

export function useExpiryRisk({ expiryDate, currentDate = new Date() }: ExpiryRiskParams): ExpiryRiskLevel {
  return useMemo(() => {
    const expiry = new Date(expiryDate)
    const today = currentDate
    const daysUntilExpiry = Math.ceil((expiry.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    if (daysUntilExpiry < 0) return 'critical'
    if (daysUntilExpiry <= 3) return 'critical'
    if (daysUntilExpiry <= 7) return 'high'
    if (daysUntilExpiry <= 30) return 'medium'
    return 'low'
  }, [expiryDate, currentDate])
}

