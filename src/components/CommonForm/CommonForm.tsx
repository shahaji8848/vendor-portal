import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS

const CommonForm = () => {
  const jsonData = {
    formFields: [
      {
        label: 'Series',
        name: 'series',
        type: 'text',
        placeholder: 'Enter Series',
      },
      {
        label: 'Date',
        name: 'date',
        type: 'date',
      },
      {
        label: 'Company Billing Address',
        name: 'company_Billing_address',
        type: 'text',
        placeholder: 'Enter Company Billing Address',
      },
      {
        label: 'Required Date',
        name: 'required_date',
        type: 'date',
      },
      {
        label: 'Status',
        name: 'status',
        type: 'text',
        placeholder: 'Enter Status',
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
        item_code: 'Rishikesh Steel Private Limited ',
        required_date: '9820968615',
        quantity: 'dummy@gmail.com',
        uom: '',
        warehouse: '',
      },
    ],
  };

  return (
    <div className="p-4 card">
      {/* Header */}
      <h2 className="text-lg font-bold mb-4">PUR-RFQ-2025-0001</h2>
      <h5>Vertical</h5>

      <div className="grid">
        <div className="col-6">
          <div className="p-fluid">
            <div className="field">
              <label htmlFor="series">Series</label>
              <InputText id="series" type="text" />
            </div>
            <div className="field">
              <label htmlFor="email1">Company Billing Address</label>
              <InputText id="email1" type="text" />
            </div>
            <div className="field">
              <label htmlFor="age1">Status*</label>
              <InputText id="age1" type="text" />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className=" p-fluid">
            <div className="field">
              <label htmlFor="name1">Date</label>
              <Calendar dateFormat="dd-mm-yy" className="w-full" />
            </div>
            <div className="field">
              <label htmlFor="email1">Required Date</label>
              <InputText id="email1" type="text" />
            </div>
          </div>
        </div>
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
        <Column field="item_code" header="Item Code*" />
        <Column field="required_date" header="Required Date*" />
        <Column field="quantity" header="Quantity*" />
        <Column field="uom" header="UOM*" />
        <Column field="warehouse" header="Warehouse" />
      </DataTable>
      {/* Button */}
      <div className="flex justify-end mt-4">
        <Button label="Add My Quotation" icon="pi pi-plus" className="p-button-primary" />
      </div>
    </div>
  );
};

export default CommonForm;
