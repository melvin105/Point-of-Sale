import { useNavigate } from 'react-router-dom'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
  Group,
  Inject,
  Toolbar,
  Search
} from '@syncfusion/ej2-react-grids'
import { Button } from '../../components/common/Button'
import { inventoryItems } from '../../data/inventory'
import '@syncfusion/ej2-base/styles/material.css'
import '@syncfusion/ej2-buttons/styles/material.css'
import '@syncfusion/ej2-calendars/styles/material.css'
import '@syncfusion/ej2-inputs/styles/material.css'
import '@syncfusion/ej2-navigations/styles/material.css'
import '@syncfusion/ej2-popups/styles/material.css'
import '@syncfusion/ej2-splitbuttons/styles/material.css'
import '@syncfusion/ej2-react-grids/styles/material.css'

export function InventoryListPage() {
  const navigate = useNavigate()

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

  const priceTemplate = (props: any) => {
    return <span>${props.price.toFixed(2)}</span>
  }

  const actionTemplate = (props: any) => {
    return (
      <Button size="sm" variant="outline" onClick={() => navigate(`/inventory/${props.id}`)}>
        Details
      </Button>
    )
  }

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between shrink-0">
        <h1 className="text-2xl font-bold text-gray-900">Item List</h1>
        <Button>Add New Item</Button>
      </div>

      <div className="flex-1 overflow-hidden rounded-lg shadow-sm border border-gray-200 bg-white">
        <GridComponent
          dataSource={inventoryItems}
          allowPaging={true}
          allowSorting={true}
          allowFiltering={true}
          allowGrouping={true}
          toolbar={['Search']}
          width="100%"
          height="100%"
        >
          <ColumnsDirective>
            <ColumnDirective field='sku' headerText='Item #' width='100' />
            <ColumnDirective field='name' headerText='Item Name' width='200' />
            <ColumnDirective field='department' headerText='Department' width='150' />
            <ColumnDirective field='quantity' headerText='On Hand' width='100' textAlign='Center' />
            <ColumnDirective field='price' headerText='Price' width='100' template={priceTemplate} textAlign='Right' />
            <ColumnDirective field='expiryRisk' headerText='Expiry Risk' width='130' template={riskTemplate} textAlign='Center' />
            <ColumnDirective headerText='Actions' width='120' template={actionTemplate} textAlign='Center' />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, Toolbar, Search]} />
        </GridComponent>
      </div>
    </div>
  )
}

