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
import { vendors } from '../../data/receiving'
import { Button } from '../../components/common/Button'

export function VendorListPage() {
    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex items-center justify-between shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">Vendor List</h1>
                <Button>Add New Vendor</Button>
            </div>

            <div className="flex-1 overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
                <GridComponent
                    dataSource={vendors}
                    allowPaging={true}
                    allowSorting={true}
                    allowFiltering={true}
                    toolbar={['Search']}
                    width="100%"
                    height="100%"
                >
                    <ColumnsDirective>
                        <ColumnDirective field='id' headerText='Vendor ID' width='120' />
                        <ColumnDirective field='name' headerText='Company Name' width='250' />
                        <ColumnDirective field='contact' headerText='Contact Person' width='200' />
                    </ColumnsDirective>
                    <Inject services={[Page, Sort, Filter, Toolbar, Search]} />
                </GridComponent>
            </div>
        </div>
    )
}
