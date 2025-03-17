import { DataTable } from "primereact/datatable"
import { rowClassName } from "./TableBody"
import { Column } from "primereact/column"
import styles from '../styles/detail.module.css'

export const TableEmi = ({data,columns}:any)=>{
    console.log(data,columns,"EMi Tav;elel")
    return(
        <DataTable
        value={data}
        resizableColumns
        showGridlines
        size="small"
        scrollable
        scrollHeight="600px"
        rowClassName={rowClassName}
      >
        {
            columns.map((item:any,index:any)=>(
             <Column
             key={index}
             body={item.body}
             header={item.header}
             headerClassName={styles.tableHeader}
             className={styles.tableRowEmi}
             />
            ))
        }
        </DataTable>
    )
}