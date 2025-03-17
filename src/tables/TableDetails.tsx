import { DataTable } from "primereact/datatable";
import { rowClassName } from "./TableBody";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import { Column } from "primereact/column";
import styles from "../styles/detail.module.css";

type Props = {};

const TableDetails = ({ data, columnForTable }: any) => {
  const tableHead = () => {
    return (
      <ColumnGroup>
        <Row>
          <Column
            header=""
            headerClassName={styles.tableHeader}
            style={{ width: "20%" }}
            rowSpan={2}
          />
          <Column
            header="Year"
            headerClassName={styles.tableHeader}
            colSpan={5}
          />
        </Row>
        <Row>
          <Column header="Y1" headerClassName={styles.tableHeader} />
          <Column header="Y2" headerClassName={styles.tableHeader} />
          <Column header="Y3" headerClassName={styles.tableHeader} />
          <Column header="Y4" headerClassName={styles.tableHeader} />
          <Column header="Y5" headerClassName={styles.tableHeader} />
        </Row>
      </ColumnGroup>
    );
  };

  return (
    <div>
      <DataTable
        value={data}
        resizableColumns
        showGridlines
        size="small"
        stripedRows
        rowClassName={rowClassName}
        headerColumnGroup={tableHead()}
      >
        {columnForTable?.map((item: any, index: any) => {
          return (
            <Column
              key={index}
              body={item?.body}
              header={item.header}
              headerClassName={item.headerClassName}
              className={item.className}
            />
          );
        })}
      </DataTable>
    </div>
  );
};

export default TableDetails;
