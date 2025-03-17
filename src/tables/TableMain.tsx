import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { rowClassName } from "./TableBody";
import { Column } from "primereact/column";
import { IconField } from "primereact/iconfield";
import { InputText } from "primereact/inputtext";
import { InputIcon } from "primereact/inputicon";

// Define the interface for the props of the TableMain component
interface TableMainProps {
  data: any;
  columnList: any;
  isLoading?: boolean;
  title: string;
}

const TableMain: React.FC<TableMainProps> = ({ data, columnList, isLoading, title }) => {
  const [globalFilterValue, setGlobalFilterValue] = useState("")
  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(data);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "data");
    });
  };

  const saveAsExcelFile = (buffer: any, fileName: string) => {
    import("file-saver")
      .then((FileSaver) => {
        if (FileSaver && FileSaver.default) {
          const EXCEL_MIME_TYPE =
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
          const EXCEL_EXTENSION = ".xlsx";

          const data = new Blob([buffer], {
            type: EXCEL_MIME_TYPE,
          });

          FileSaver.default.saveAs(
            data,
            `${fileName}_export_${new Date().getTime()}${EXCEL_EXTENSION}`
          );
        }
      })
      .catch((error) => {
        console.error("Error saving the file:", error);
      });
  };
  const handleInputChange = (value:string) => {
    setGlobalFilterValue(value);
  };
  const RenderHeader = () => {
    return (
      <div className="flex justify-content-end align-items-center mb-3">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
            placeholder="Keyword Search"
          />
        </IconField>
        <div>
          <Button
            text
            className="p-1"
            type="button"
            severity="success"
            rounded
            onClick={exportExcel}
            data-pr-tooltip="XLS"
          >
            <i className="pi pi-file-excel text-2xl" />
          </Button>
        </div>
      </div>
    );
  };

  // const header = renderHeader();

  return (
    <div className="card">
      <div className="flex justify-content-between align-items-center">
        <h6>{title}</h6>
        <RenderHeader />
      </div>
      <div>
        <DataTable
          rowClassName={rowClassName}
          value={data}
          showGridlines={true}
          stripedRows
          scrollable
          paginator
          removableSort
          globalFilter={globalFilterValue}
          // header={header}
          rows={10}
          resizableColumns
          size="small"
        >
          {columnList?.map((item: any, index: any) => (
            <Column
              key={index}
              field={item?.field}
              header={item?.header}
              sortable={item?.sortable}
              style={item?.style}
              frozen={item?.frozen}
              alignFrozen={item?.alignFrozen}
              body={item?.body}
            />
          ))}
        </DataTable>
      </div>
    </div>
  );
};

export default TableMain;
