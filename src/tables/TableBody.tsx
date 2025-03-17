import { Link } from "react-router-dom";
import { baseUrlFrontend } from "../utils/BasePath"; 
import { textFormatNumberWise } from "../utils/utils";
import styles from '../styles/detail.module.css';

export const BodyComponentLink = ({
  field,
  rowData,
  link
}: {
  field: string;
  rowData: any;
  link:string
}) => {
  return (
    <div >
      <Link to={`${baseUrlFrontend}/${link}/details/${rowData?.name}`}>
        {" "}
        {rowData[field]}{" "}
      </Link>
    </div>
  );
};

 export const BodyComponent = ({
    field,
    rowData,
  }: {
    field: string;
    rowData: any;
  }) => {
    return (
      <div className="text-right">
        {textFormatNumberWise(rowData[field])}
      </div>
    );
  };

 export const BodyComponentForMultiple = ({
    field1,
    field2,
    rowData,
  }: {
    field1: string;
    field2: string;
    rowData: any;
  }) => {
    return (
      <div className="text-right">
      {`${textFormatNumberWise(rowData[field1])} % / ${ textFormatNumberWise(rowData[field2])} %`}
        {/* {textFormatNumberWise(rowData[field1]) + '%' +  "/" +  textFormatNumberWise(rowData[field2])}  */}
      </div>
    );
  };

 export const rowSectionForDetailsTable = ({item,value,isBold}: any) => {
    return (
      <div
        className={`${styles.tableRow2} ${
          isBold ? "boldTableText" : ""
        }`}
      >
        {textFormatNumberWise(item[value])}
      </div>
    );
  };



 export const rowClassName = () => {
    return "custom-row-class"; // Add this class to all rows
  };