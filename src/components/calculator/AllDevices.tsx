import { useFrappeGetDocList } from "frappe-react-sdk";
import { Link } from "react-router-dom";
import Crump from "../../BreadCrump/Crump";
import TableMain from "../../tables/TableMain";
import { BodyComponent, BodyComponentForMultiple, BodyComponentLink } from "../../tables/TableBody";
import ErrorComponenet from "../../error/ErrorComponenet";
import Loader from "../../utils/utils";

const AllDevices = () => {
  const { data, isLoading, error } = useFrappeGetDocList(
    "Lease Rent Calculator - Unit Matrix",
    {
      fields: ["*"],
    }
  );
  const ColumnsList = [
    {
      sortable: true,
      alignFrozen: "left",
      frozen: true,
      field: "name",
      header: "Name",
      body: (data: any) => <BodyComponentLink field="name" link="dashboard" rowData={data} />,
    },
    {
      field: "device_type",
      header: "Type",
      style: { width: "15%" },
    },
    {
      field: "device_cost",
      header: "Cost",
      sortable: true,
      body: (rowData: any) => (
        <BodyComponent field="device_cost" rowData={rowData} />
      ),
    },
    {
      header: "Interest",
      body: (rowData: any) => (
        <BodyComponentForMultiple
          field1="rate_of_interest_on_operating_lease"
          field2="cost_of_funds_for_operating_lease"
          rowData={rowData}
        />
      ),
    },
    {
      field: "irr",
      header: "IRR",
      sortable: true,
      body: (rowData: any) => <BodyComponent field="irr" rowData={rowData} />,
    },
    {
      field: "",
      header: "Accounting Return",
      body: (rowData: any) => (
        <BodyComponentForMultiple
          field1="accounting_return_on_equity"
          field2="accounting_return_on_assets"
          rowData={rowData}
        />
      ),
    },
    {
      field: "crar_roe",
      header: "CRAR RoE",
      sortable: true,
      body: (rowData: any) => (
        <BodyComponent field="crar_roe" rowData={rowData} />
      ),
    },
    {
      field: "gst",
      header: "GST",
      sortable: true,
      body: (rowData: any) => <BodyComponent field="gst" rowData={rowData} />,
    },
    {
      field: "",
      header: "Depreciation Rate(Acc/Tax)",
      body: (rowData: any) => (
        <BodyComponentForMultiple
          field1="accounting_depreciation_rate"
          field2="tax_depreciation_rate_wdv"
          rowData={rowData}
        />
      ),
    },
    {
      field: "",
      header: "Residual Value",
      sortable: true,
      body: (rowData: any) => (
        <BodyComponent field="residual_value_of_the_asset" rowData={rowData} />
      ),
    },
    {
      field:"modified_by",
      header: "Modified By",
      body: (rowData: any) => (
        <BodyComponent field="modified_by" rowData={rowData} />
      )
    },
    {
      field:"creation",
      header:'Created On',
      body: (rowData: any) => (
        <BodyComponent field="creation" rowData={rowData} />
      )
    }
  ];

  const items = [
    {
      label: "Home",
      template: () => (
        <Link to="/jio-dashboard">
          <a className="text-primary font-semibold">Home</a>
        </Link>
      )
    },
    {
      label: "Calculator",
    },
    {
      label: "Lease Calculator",
    },
    {
      label: "All",
      // template: () => (
      //   <Link to="/jio-dashboard">
      //     <a className="text-primary font-semibold">Lease Calculator</a>
      //   </Link>
      // ),
    },
  ];

  return (
    <>
      <div>
        <Crump items={items} />
        {/* <FormModal
          show={show}
          handleShow={handleShow}
          setShow={setShow}
          handleClose={handleClose}
          dataForForm={dataForForm}
        /> */}
      </div>
      {
      error ?  <ErrorComponenet /> :
      isLoading ? <Loader/> : (
        <div className="my-3">
          <TableMain data={data} columnList={ColumnsList} title={'Lease Report'} />
        </div>
      )}
    </>
  );
};

export default AllDevices;
