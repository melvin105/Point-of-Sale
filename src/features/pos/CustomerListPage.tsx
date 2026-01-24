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
import { customers } from '../../data/customers'
import { Button } from '../../components/common/Button'

export function CustomerListPage() {
    const spentTemplate = (props: any) => <span>${props.totalSpent.toFixed(2)}</span>

    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Customer List</h1>
                <Button>Add New Customer</Button>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                <GridComponent
                    dataSource={customers}
                    allowPaging={true}
                    allowSorting={true}
                    allowFiltering={true}
                    toolbar={['Search']}
                    width="100%"
                    height="100%"
                >
                    <ColumnsDirective>
                        <ColumnDirective field='name' headerText='Name' width='200' />
                        <ColumnDirective field='phone' headerText='Phone' width='150' />
                        <ColumnDirective field='email' headerText='Email' width='200' />
                        <ColumnDirective field='totalSpent' headerText='Total Spent' width='150' template={spentTemplate} textAlign='Right' />
                        <ColumnDirective field='lastVisit' headerText='Last Visit' width='150' textAlign='Center' />
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Toolbar, Search]} />
                </GridComponent>
            </div>
        </div>
    )
}
