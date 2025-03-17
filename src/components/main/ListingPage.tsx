import {  useFrappeGetDocList } from "frappe-react-sdk";
import HomePageCards from "../../cards/HomePageCards";
import { BodyComponent, BodyComponentLink, BodyComponentForMultiple } from "../../tables/TableBody";
import TableMain from "../../tables/TableMain";
import Loader from "../../utils/utils";
import ErrorComponenet from "../../error/ErrorComponenet";

const ListingPage = () => {
  const { data, isLoading, error } = useFrappeGetDocList(
    "Lease Rent Calculator - Unit Matrix",
    {
      fields: ["*"],
    }
  );

  const dataForCards = [
    {
      id: 1,
      title: "Orders",
      count: 25,
      time: "24 new",
      since: "since last visit",
      icon : 'pi-shopping-cart text-blue-500',
      link:""
    },
    {
      id: 2,
      title: "Revenue",
      count: "$2.100",
      time: "%52+",
      since: "since last Week",
      icon : 'pi-map-marker text-orange-500',
       link:""
    },
    {
      id: 3,
      title: "Customers",
      count: 28441,
      time: 520,
      since: "since last Week",
      icon: 'pi-inbox text-cyan-500',
       link:""

    },
    {
      id: 4,
      title: "Comments",
      count: "152 Unread",
      time: 85,
      since: "since last Week",
      icon: 'pi-comment text-purple-500',
       link:""
    },
  ];

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


  return (
    <div className="">
      {
      error ? <ErrorComponenet/> :
      isLoading ? (
        <Loader/>
      ) : (
        <>
          <div className="pb-2">
            <HomePageCards data={dataForCards} />
          </div>
          <div className=" pt-3">
            <TableMain data={data} columnList={ColumnsList} isLoading={isLoading} title={'Lease Report'}/>
          </div>
        </>
      )}
    </div>
  );
};

export default ListingPage;
