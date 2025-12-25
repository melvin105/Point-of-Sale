/**
 * Calculate Expiry Risk Score (ERS)
 * ERS = (Days Until Expiry / Average Sales Velocity) * Risk Multiplier
 */
export function calculateERS(
  expiryDate: string,
  salesVelocity: number,
  currentDate: Date = new Date()
): number {
  const expiry = new Date(expiryDate)
  const daysUntilExpiry = Math.ceil((expiry.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24))

  if (daysUntilExpiry < 0) return 100 // Already expired
  if (salesVelocity === 0) return 50 // No sales data

  const riskMultiplier = daysUntilExpiry <= 7 ? 2 : daysUntilExpiry <= 30 ? 1.5 : 1
  const ers = (daysUntilExpiry / salesVelocity) * riskMultiplier

  return Math.min(100, Math.max(0, ers))
}

