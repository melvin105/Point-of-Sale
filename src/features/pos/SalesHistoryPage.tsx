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
import { salesHistory } from '../../data/sales'
import '@syncfusion/ej2-react-grids/styles/material.css'

export function SalesHistoryPage() {
    const totalTemplate = (props: any) => <span>${props.total.toFixed(2)}</span>

    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Sales History</h1>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                <GridComponent
                    dataSource={salesHistory}
                    allowPaging={true}
                    allowSorting={true}
                    allowFiltering={true}
                    toolbar={['Search']}
                    width="100%"
                    height="100%"
                    pageSettings={{ pageSize: 20 }}
                >
                    <ColumnsDirective>
                        <ColumnDirective field='date' headerText='Date' width='180' />
                        <ColumnDirective field='status' headerText='Status' width='120' />
                        <ColumnDirective field='id' headerText='Receipt #' width='120' />
                        <ColumnDirective field='cashier' headerText='Cashier' width='120' />
                        <ColumnDirective field='customerName' headerText='Customer' width='180' />
                        <ColumnDirective field='itemCount' headerText='Items' width='100' textAlign='Center' />
                        <ColumnDirective field='total' headerText='Total' width='120' template={totalTemplate} textAlign='Right' />
                        <ColumnDirective field='paymentType' headerText='Payment' width='120' />
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Toolbar, Search]} />
                </GridComponent>
            </div>
        </div>
    )
}
