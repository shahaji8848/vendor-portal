import IanBanner from "./IanBanner";
import Crump from "../../BreadCrump/Crump";
import { Link, useParams } from "react-router-dom";
import { baseUrlBackend, baseUrlFrontend } from "../../utils/BasePath";
import { useFrappeGetDoc } from "frappe-react-sdk";
import ErrorComponenet from "../../error/ErrorComponenet";
import Loader from "../../utils/utils";
import Button from "./Button";

const IanDetails = () => {
  const { name } = useParams();
  const { data, isLoading, mutate, error } = useFrappeGetDoc(
    "Invoice Approval Note",
    name
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
      label: name ? name : "",
    },
  ];

  const downloadFile = () => {
    const fileName = `${data?.upload_business_note}`;
    const url = `${baseUrlBackend}/${fileName}`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
  };

  const arrForCard1 = [
    {
      name: "Proposer",
      value: data?.proposer,
      field: data?.proposer,
    },
    {
      name: "Supplier / Vendor Name",
      value: data?.supplier__vendor_name,
      field: data?.supplier__vendor_name,
    },

    {
      name: "Cost Center",
      value: data?.cost_centre,
      field: data?.cost_centre,
    },
    {
      name: "Commercial",
      value: data?.capex ? "CAPEX" : data?.opex ? "OPEX" : "",
      field: data?.capex || data?.opex,
    },
    {
      name: "Supplier Invoice No",
      value: data?.supplier_invoice_no,
      field: data?.supplier_invoice_no,
    },
    {
      name: "Supplier Invoice Date",
      value: data?.supplier_invoice_date,
      field: data?.supplier_invoice_date,
    },
    {
      name: "Supplier Invoice",
      value: (
        <i
          className="pi pi-download text-base"
          onClick={() => {
            downloadFile();
          }}
        ></i>
      ),
      field: data?.upload_business_note,
    },
  ];

  const arrForCard2 = [
    {
      name: "Status",
      value: data?.workflow_state,
      field: data?.workflow_state,
    },
    {
      name: "Purchase Order Number",
      value: data?.purchase_order_number,
      field: data?.purchase_order_number,
    },
    {
      name: "Purchase Order Amount",
      value: data?.purchase_order_amount,
      field: data?.purchase_order_amount,
    },
    {
      name: "Purchase Invoice",
      value: data?.purchase_invoice,
      field: data?.purchase_invoice,
      link: true,
    },
    {
      name: "Purchase Receipt",
      value: data?.purchase_receipt,
      field: data?.purchase_receipt,
      link: true,
    },

    {
      name: "Tax and Charges",
      value: data?.other_charges,
      field: data?.other_charges,
    },
    {
      name: "Total Amount",
      value: data?.total_amount,
      field: data?.total_amount,
    },
    // {
    //   name: "Approver 1",
    //   value: data?.approver_1,
    //   field: data?.approver_1,
    // },
    // {
    //   name: "Approver 2",
    //   value: data?.approver_2,
    //   field: data?.approver_2,
    // },
  ];

  return (
    <div>
      <div className="my-2">
        <Crump items={items} />
      </div>
      {error ? (
        <ErrorComponenet />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="my-2">{!isLoading && <IanBanner data={data} />}</div>
          <div className="grid">
            <div className="col-12">
              <div className="text-right">
                <Button data={data} mutate={mutate} />
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="card h-full">
                {arrForCard1.map((item: any, index: any) => (
                  <p
                    className="flex my-0 py-2 justify-content-between"
                    key={index}
                  >
                    <strong className={` pe-2 text-base `}>{item?.name}</strong>
                    <span className="px-2 text-right text-base">
                      {item?.field ? item.value : ""}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <div className="col-12 md:col-6">
              <div className="card h-full">
                {arrForCard2.map((item: any, index: any) => (
                  <p
                    className="flex my-0 py-2 justify-content-between"
                    key={index}
                  >
                    <strong className={` pe-2 text-base `}>{item?.name}</strong>
                    {item?.link ? (
                      <a
                        href={`${baseUrlBackend}/app/purchase-invoice/${encodeURI(
                          item?.value
                        )}`}
                        target="blank"
                        className="inline px-2 text-right text-base"
                      >
                        {item.field ? item.value : ""}
                      </a>
                    ) : (
                      <span className="px-2 text-right text-base">
                        {item.field ? item.value : ""}
                      </span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IanDetails;
