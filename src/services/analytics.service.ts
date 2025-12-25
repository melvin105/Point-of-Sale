import { apiRequest } from './api'
import type { AnalyticsData } from '../types/analytics'

export const analyticsService = {
  async getExpiryRisk(): Promise<AnalyticsData> {
    return apiRequest<AnalyticsData>('/analytics/expiry-risk')
  },

  async getWasteTrend(startDate: string, endDate: string): Promise<AnalyticsData> {
    return apiRequest<AnalyticsData>(`/analytics/waste-trend?startDate=${startDate}&endDate=${endDate}`)
  },

  async getSalesVelocity(): Promise<AnalyticsData> {
    return apiRequest<AnalyticsData>('/analytics/sales-velocity')
  },
}

