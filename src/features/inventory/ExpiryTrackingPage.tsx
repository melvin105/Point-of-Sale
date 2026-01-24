import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Sort,
    Filter,
    Inject,
    Toolbar,
    Search
} from '@syncfusion/ej2-react-grids'
import { inventoryItems } from '../../data/inventory'
import { Button } from '../../components/common/Button'

export function ExpiryTrackingPage() {
    const riskTemplate = (props: any) => {
        const risk = props.expiryRisk
        let colorClass = 'bg-green-100 text-green-800'
        if (risk === 'medium') colorClass = 'bg-yellow-100 text-yellow-800'
        if (risk === 'high') colorClass = 'bg-orange-100 text-orange-800'
        if (risk === 'critical') colorClass = 'bg-red-100 text-red-800'

        return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClass} capitalize`}>
                {risk}
            </span>
        )
    }

    // Filter only items with risk
    const riskyItems = inventoryItems.filter(item => item.expiryRisk !== 'low')

    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Expiry Monitoring</h1>
                    <p className="text-sm text-gray-500">Intelligent tracking of products nearing shelf-life end.</p>
                </div>
                <Button variant="danger">Generate Risk Report</Button>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                <GridComponent
                    dataSource={riskyItems}
                    allowPaging={true}
                    allowSorting={true}
                    allowFiltering={true}
                    toolbar={['Search']}
                    width="100%"
                    height="100%"
                >
                    <ColumnsDirective>
                        <ColumnDirective field='name' headerText='Product' width='200' />
                        <ColumnDirective field='sku' headerText='SKU' width='120' />
                        <ColumnDirective field='department' headerText='Department' width='150' />
                        <ColumnDirective field='quantity' headerText='Stock' width='100' textAlign='Center' />
                        <ColumnDirective field='expiryRisk' headerText='Risk Level' width='150' template={riskTemplate} textAlign='Center' />
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Toolbar, Search]} />
                </GridComponent>
            </div>
        </div>
    )
}
