import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
// import { InputText } from 'primereact/inputtext';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';

const daraForTreeTable = [
  {
    key: '0',
    data: {
      id: '1',
      rfqId: '1000',
      rfqDate: '10/20/2021',
      reqDate: '10/20/2021',
      status: 'Open',
      supplierQuatationId: '1000',
    },
    children: [
      {
        key: '0-0',
        data: {
          id: '',
          rfqId: 'Item Name',
          rfqDate: 'Required Date',
          reqDate: 'Quantity',
          status: 'UOM',
          supplierQuatationId: 'Warehouse',
        },
        children: [
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'CS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'SS Rod',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'MS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'SS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
        ],
      },
    ],
  },
  {
    key: '0',
    data: {
      id: '2',
      rfqId: '1000',
      rfqDate: '10/20/2021',
      reqDate: '10/20/2021',
      status: 'Open',
      supplierQuatationId: '1000',
    },
    children: [
      {
        key: '0-0',
        data: {
          id: '',
          rfqId: 'Item Name',
          rfqDate: 'Required Date',
          reqDate: 'Quantity',
          status: 'UOM',
          supplierQuatationId: 'Warehouse',
        },
        children: [
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'CS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'SS Rod',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'MS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
          {
            key: '0-0-0',
            data: {
              id: '',
              rfqId: 'SS Steel',
              rfqDate: '10/20/2021',
              reqDate: '10/20/2021',
              status: 'Tons',
              supplierQuatationId: 'Rushikesh Store - RSPL',
            },
          },
        ],
      },
    ],
  },
];

export default function TreeTableComponent() {
  //   const [globalFilter, setGlobalFilter] = useState('');

  // const getHeader = () => {
  //   return (
  //     <div className="flex justify-content-end">
  //       {/* <IconField iconPosition="left">
  //         <InputIcon className="pi pi-search" />
  //         <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
  //       </IconField> */}
  //     </div>
  //   );
  // };

  // const header = getHeader();

  return (
    <div className=" p-0">
      <div className="flex justify-content-center mb-4"></div>
      <TreeTable value={daraForTreeTable} removableSort showGridlines tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID" style={{ width: '60px' }} />
        <Column field="rfqId" header="RFQ ID" expander filter filterPlaceholder="" />
        <Column field="rfqDate" header="RFQ Date" filter filterPlaceholder="" />
        <Column field="reqDate" header="Required Date" filter filterPlaceholder="" />
        <Column field="status" header="Status" filter filterPlaceholder="" />
        <Column field="supplierQuatationId" header="Supplier Quatation ID" filter filterPlaceholder="" />
      </TreeTable>
    </div>
  );
}
