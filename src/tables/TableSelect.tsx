import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React from "react";

type Props = {};

const TableSelect = ({ data, selected, setSelected, title }: any) => {
  return (
    <div>
      <h6>{title}</h6>
      <DataTable
        loadingIcon
        value={data}
        selectionMode={"radiobutton"}
        selection={selected}
        onSelectionChange={(e) => setSelected(e.value)}
        dataKey="name"
        tableStyle={{ minWidth: "50rem" }}
        title={title}
      >
        <Column selectionMode="single" headerStyle={{ width: "3rem" }}></Column>
        <Column field="name" header="Name"></Column>
        <Column field="posting_date" header="Date"></Column>
        <Column field="amount" header="Amount"></Column>
        <Column field="outstanding_amount" header="OutStanding"></Column>
      </DataTable>
    </div>
  );
};

export default TableSelect;
