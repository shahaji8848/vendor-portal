import HomePageCards from "../../cards/HomePageCards";
import { useFrappeGetCall, useFrappeGetDocList } from "frappe-react-sdk";
import { BodyComponentLink, BodyComponent } from "../../tables/TableBody";
import { Link } from "react-router-dom";
import { baseUrlFrontend } from "../../utils/BasePath";
import Crump from "../../BreadCrump/Crump";
import ErrorComponenet from "../../error/ErrorComponenet";
import Loader from "../../utils/utils";
import TableMain from "../../tables/TableMain";
const IanAll = () => {
  const { data: dataForCard } = useFrappeGetCall(
    "jio_fiber.jio_fiber.doctype.invoice_approval_note.invoice_approval_note.get_status_counts"
  );
  const { data: dataForcardPR } = useFrappeGetCall(
    "jio_fiber.custom_purchase.customization.purchase_receipt.api_for_ui.get_status_counts"
  );
  const { data: dataForcardPI } = useFrappeGetCall(
    "jio_fiber.custom_purchase.customization.purchase_invoice.api_for_ui.get_status_counts"
  );

  const dataForCards = [
    {
      id: 1,
      title: "IAN - Draft",
      count: dataForCard ? dataForCard?.message[`Draft`] : 0,
      time: "24 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Draft",
      status: "IAN",
    },
    {
      id: 2,
      title: "IAN - Pending for L-1 Approval",
      count: dataForCard
        ? dataForCard?.message["Pending for Level 1 Approval"]
        : 0,
      time: "7 New",
      since: "Since last 24 hours ",
      icon: "",
      link: "Pending for Level 1 Approval",
      status: "IAN",
    },
    {
      id: 3,
      title: "IAN - Pending for L-2 Approval",
      count: dataForCard
        ? dataForCard?.message["Pending for Level 2 Approval"]
        : 0,
      time: "7 New",
      since: "New since last 24 hours",
      icon: "",
      link: "Pending for Level 2 Approval",
      status: "IAN",
    },
    {
      id: 5,
      title: "IAN - Final Approved & Released",
      count: dataForCard
        ? dataForCard?.message[`Approved and Final Release`]
        : 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Approved and Final Release",
      status: "IAN",
    },
    {
      id: 4,
      title: "IAN - Rejected",
      count: dataForCard ? dataForCard?.message[`Rejected`] : 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Rejected",
      status: "IAN",
    },
    {
      id: 5,
      title: "PR & PI - Draft",
      count:
        Number(dataForcardPR?.message[`Draft`]) +
          Number(dataForcardPR?.message[`Draft`]) || 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Draft",
    },
    {
      id: 6,
      title: "PR or PI - Pending for Approval",
      count:
        Number(dataForcardPR?.message[`Pending for Level 1 Approval`]) +
          Number(dataForcardPI?.message[`Pending for Level 1 Approval`]) || 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Pending for Level 1 Approval",
      status: "PRandPI",
    },
    {
      id: 7,
      title: "PR & PI - Approved & Released",
      count:
        Number(dataForcardPR?.message[`Approved and Final Release`]) +
          Number(dataForcardPI?.message[`Approved and Final Release`]) || 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "Approved and Final Release",
      status: "PRandPI",
    },
    {
      id: 8,
      title: "PI - Payment Status",
      count: 0,
      time: "70 New",
      since: "Since last 24 hours",
      icon: "",
      link: "",
      status: "PRandPI",
    },
  ];

  const { data, isLoading, error } = useFrappeGetDocList(
    "Invoice Approval Note",
    {
      fields: ["*"],
    }
  );

  const IanTableColumn = [
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
      field: "Tax and Other Chareges",
      header: "Other Charges",
      sortable: true,
      body: (data: any) => (
        <BodyComponent field="other_charges" rowData={data} />
      ),
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
      header: "Purchase Order Number",
      sortable: true,
    },
    {
      field: "purchase_invoice",
      header: "Purchase Invoice",
      sortable: true,
    },
    {
      field: "purchase_receipt",
      header: "Purchase Receipt",
      sortable: true,
    },
    {
      field: "supplier_invoice_date",
      header: "Supplier Invoice Date",
      sortable: true,
      // body: (data: any) => (
      //   <BodyComponent field="supplier_invoice_date" rowData={data} />
      // ),
    },
    {
      field: "supplier_invoice_no",
      header: "Supplier Invoice NO",
      sortable: true,
      // body: (data: any) => (
      //   <BodyComponent field="supplier_invoice_no" rowData={data} />
      // ),
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
        <>
          <div>
            <HomePageCards data={dataForCards} />
          </div>
          <div>
            <TableMain
              data={data}
              columnList={IanTableColumn}
              title={"All Notes"}
            />
          </div>
        </>
      )}
    </>
  );
};

export default IanAll;
