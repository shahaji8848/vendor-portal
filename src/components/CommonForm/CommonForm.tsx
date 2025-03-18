import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';

const CommonForm = () => {
  const jsonData = {
    formFields: [
      {
        label: 'Series',
        name: 'series',
        type: 'text',
        placeholder: 'Enter Series',
        value: 'PUR-RFQ-YYYY ',
      },
      {
        label: 'Date',
        name: 'date',
        type: 'date',
        value: '28-02-2025',
      },
      {
        label: 'Company Billing Address',
        name: 'company_Billing_address',
        type: 'text',
        placeholder: 'Enter Company Billing Address',
        value: '8848 Digital Office',
      },
      {
        label: 'Required Date',
        name: 'required_date',
        type: 'date',
        value: '10-03-2025',
      },
      {
        label: 'Status',
        name: 'status',
        type: 'text',
        placeholder: 'Enter Status',
        value: 'Submitted',
      },
    ],

    supplier: [
      {
        id: 1,
        supplier: 'Rishikesh Steel Private Limited ',
        contact: '9820968615',
        email: 'dummy@gmail.com',
        sendEmail: '',
      },
    ],
    tableData: [
      {
        id: 1,
        item_code: 'CS Steel',
        required_date: '10-03-2025',
        quantity: '50.00',
        uom: 'Tons',
        warehouse: 'Rishikesh Store - RSPL',
      },
      {
        id: 2,
        item_code: 'CS Steel',
        required_date: '10-03-2025',
        quantity: '50.00',
        uom: 'Tons',
        warehouse: 'Rishikesh Store - RSPL',
      },
      {
        id: 3,
        item_code: 'CS Steel',
        required_date: '10-03-2025',
        quantity: '50.00',
        uom: 'Tons',
        warehouse: 'Rishikesh Store - RSPL',
      },
      {
        id: 4,
        item_code: 'CS Steel',
        required_date: '10-03-2025',
        quantity: '50.00',
        uom: 'Tons',
        warehouse: 'Rishikesh Store - RSPL',
      },
      {
        id: 5,
        item_code: 'CS Steel',
        required_date: '10-03-2025',
        quantity: '50.00',
        uom: 'Tons',
        warehouse: 'Rishikesh Store - RSPL',
      },
    ],
  };

  return (
    <div className="p-4 card">
      {/* Header */}
      <h2 className="text-lg font-bold mb-4">PUR-RFQ-2025-0001</h2>

      {/* Dynamic Form Fields */}
      <div className="grid">
        {jsonData.formFields.map((field: any, index: number) => (
          <div className="col-6" key={index}>
            <div className="p-fluid field">
              <label htmlFor={field.name}>{field.label}</label>
              {field.type === 'date' ? (
                <Calendar id={field.name} value={field?.value} dateFormat="dd-mm-yy" className="w-full" />
              ) : (
                <InputText id={field.name} type="text" placeholder={field.placeholder || ''} value={field?.value} />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Suppliers Table */}
      <h3 className="text-sm font-bold mt-6">Suppliers</h3>
      <DataTable value={jsonData?.supplier} className="p-datatable-sm mt-2" showGridlines>
        <Column field="id" header="No." />
        <Column field="supplier" header="Supplier" />
        <Column field="contact" header="Contact" />
        <Column field="email" header="Email id" />
        <Column field="send_email" header="Send Email" />
      </DataTable>

      <DataTable value={jsonData?.tableData} className="p-datatable-sm mt-5" showGridlines>
        <Column field="id" header="No." />
        <Column field="item_code" header="Item Code" />
        <Column field="required_date" header="Required Date*" />
        <Column field="quantity" header="Quantity" />
        <Column field="uom" header="UOM" />
        <Column field="warehouse" header="Warehouse" />
      </DataTable>
      {/* Button */}
      <div className="text-right mt-4">
        <Button label="Add My Quotation" icon="pi pi-plus" className="p-button-primary" />
      </div>
    </div>
  );
};

export default CommonForm;
