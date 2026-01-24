import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    DataLabel,
    LineSeries,
    ColumnSeries,
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    PieSeries,
    AccumulationLegend,
    AccumulationTooltip,
    AccumulationDataLabel
} from '@syncfusion/ej2-react-charts'
import { salesByCategory, weeklySales, expiryRiskData } from '../../data/analytics'

export function AnalyticsPage() {
    return (
        <div className="space-y-6 h-full overflow-y-auto pb-8">
            <h1 className="text-2xl font-bold text-gray-900">Data Analytics</h1>

            <div className="grid grid-cols-2 gap-6">
                {/* Weekly Sales Trend */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Weekly Sales Trend</h3>
                    <ChartComponent
                        id="weekly-sales"
                        primaryXAxis={{ valueType: 'Category' }}
                        title="Sales by Day"
                        tooltip={{ enable: true }}
                    >
                        <Inject services={[LineSeries, Category, Tooltip, DataLabel, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={weeklySales}
                                xName="day"
                                yName="amount"
                                name="Sales ($)"
                                type="Line"
                                marker={{ visible: true, width: 10, height: 10 }}
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>

                {/* Sales by Category */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
                    <AccumulationChartComponent
                        id="category-sales"
                        title="Distribution"
                        legendSettings={{ visible: true }}
                        tooltip={{ enable: true }}
                    >
                        <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]} />
                        <AccumulationSeriesCollectionDirective>
                            <AccumulationSeriesDirective
                                dataSource={salesByCategory}
                                xName="category"
                                yName="sales"
                                dataLabel={{ visible: true, position: 'Inside', name: 'text' }}
                                innerRadius="40%"
                            />
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
                </div>

                {/* Expiry Risk Distribution */}
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Inventory Expiry Risk</h3>
                    <ChartComponent
                        id="expiry-risk"
                        primaryXAxis={{ valueType: 'Category' }}
                        title="Product Count by Risk Level"
                        tooltip={{ enable: true }}
                    >
                        <Inject services={[ColumnSeries, Category, Tooltip, DataLabel, Legend]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={expiryRiskData}
                                xName="risk"
                                yName="count"
                                name="Products"
                                type="Column"
                                fill="#ef4444"
                            />
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        </div>
    )
}
