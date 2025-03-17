import { useFrappeGetDocList } from "frappe-react-sdk";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { baseUrlFrontend } from "../../utils/BasePath";
import { BodyComponent, BodyComponentLink } from "../../tables/TableBody";
import TableMain from "../../tables/TableMain";
import ErrorComponenet from "../../error/ErrorComponenet";
import Loader from "../../utils/utils";
import Crump from "../../BreadCrump/Crump";

type Props = {};

const PrPiStatus = (props: Props) => {
  const { type } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const status = searchParams.get("status");

  const { data, isLoading, error } = useFrappeGetDocList(
    "Invoice Approval Note",
    {
      filters: [["workflow_state", "=", `${type}`]],
      fields: ["*"],
    }
  );

  const items = [
    {
      label: "Sales",
    },
    {
      label: "Invoice Approval Note",
      template: () => (
        <Link to={`${baseUrlFrontend}/sales/invoice-approval-note/all`}>
          <a className="text-primary font-semibold">Invoice Approval Note</a>
        </Link>
      ),
    },
    {
      label: "Status",
    },
    {
      label: "Type",
      template: () => (
        <Link to={`${baseUrlFrontend}/sales/invoice-approval-note`}>
          <a className="text-primary font-semibold">{type}</a>
        </Link>
      ),
    },
  ];
  const IanStatusColumn = [
    {
      field: "proposer",
      header: "Proposer",
      sortable: true,
      expander: true,
      body: (data: any) => (
        <BodyComponentLink
          field="proposer"
          link="sales/invoice-approval-note"
          rowData={data}
        />
      ),
    },
    {
      header: "Status",
      field: "workflow_state",
    },
    {
      field: "total_amount",
      header: "Total Amount",
      sortable: true,
      body: (data: any) => (
        <BodyComponent field="total_amount" rowData={data} />
      ),
    },
    {
      field: "cost_of_service",
      header: "Cost Of Service",
      sortable: true,
      body: (data: any) => (
        <BodyComponent field="cost_of_service" rowData={data} />
      ),
    },
    {
      field: "other_charges",
      header: "Other Charges",
      sortable: true,
      body: (data: any) => (
        <BodyComponent field="other_charges" rowData={data} />
      ),
    },
    {
      field: "purchase_invoice",
      header: "Purchase Invoice",
      sortable: true,
    },
    {
      field: "purchase_order_amount",
      header: "Purchase Order Amount",
      sortable: true,
      body: (data: any) => (
        <BodyComponent field="purchase_order_amount" rowData={data} />
      ),
    },
    {
      field: "purchase_order_number",
      header: "urchase Order Number",
      sortable: true,
    },
    {
      field: "purchase_receipt",
      header: "Purchase Receipt",
      sortable: true,
    },
    {
      field: "approver_1",
      header: "Approver 1",
      sortable: true,
    },
    {
      field: "approver_2",
      header: "Approver 2",
      sortable: true,
    },
  ];

  return (
    <>
      <div className="my-2">
        <Crump items={items} />
      </div>
      {error ? (
        <ErrorComponenet />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div>
          <TableMain
            data={data}
            columnList={IanStatusColumn}
            title={`${type} List`}
          />
        </div>
      )}
    </>
  );
};

export default PrPiStatus;
