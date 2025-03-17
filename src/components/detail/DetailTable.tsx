import styles from "../../styles/detail.module.css";
import BannerSection from "./BannerSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useFrappeGetDoc } from "frappe-react-sdk";
import Loader, { textFormatNumberWise } from "../../utils/utils";
import Crump from "../../BreadCrump/Crump";
import { MegaMenu } from "primereact/megamenu";
import { baseUrlFrontend } from "../../utils/BasePath";
import TableDetails from "../../tables/TableDetails";
import { TableEmi } from "../../tables/TablesDetailsPage";
import ErrorComponenet from "../../error/ErrorComponenet";

const DetailTable = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const { name } = useParams();
  const { data, isLoading, error } = useFrappeGetDoc(
    "Lease Rent Calculator - Unit Matrix",
    name
  );

  console.log(data, "console for datat");
  // const dataForForm = {
  //   name: data?.name,
  //   deviceCost: data?.device_cost,
  //   gst: data?.gst,
  //   roi: data?.rate_of_interest_on_operating_lease,
  //   costOfFundsOperating: data?.cost_of_funds_for_operating_lease,
  //   accDepreciationRate: data?.accounting_depreciation_rate,
  //   taxDepreciationRate: data?.tax_depreciation_rate_wdv,
  //   residualValueOfAsset: data?.residual_value_of_the_asset,
  //   otherExpenses: data?.other_exps,
  //   creditCost: data?.credit_cost,
  //   taxRate: data?.tax_rate,
  //   borrowings: data?.borrowings,
  //   equity: data?.equity__,
  // };

  const backClick = () => {
    navigate(`${baseUrlFrontend}`);
  };
  const bannerRef = useRef(null);
  const pnlRef = useRef(null);
  const balanceRef = useRef(null);
  const cashRef = useRef(null);
  const irrRef = useRef(null);
  const emiRef = useRef(null);
  const emiRef2 = useRef(null);

  const handleScroll = (refVal: any) => {
    if (refVal.current) {
      refVal.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const RowSectionText = ({ item, rowData }: any) => {
    return (
      <div className={` ${rowData?.is_bold ? "boldTableText" : ""}`}>
        {item}
      </div>
    );
  };

  const RowSectionNumber = ({ item, rowData }: any) => {
    return (
      <div
        className={`${styles.tableRow2} ${
          rowData?.is_bold ? "boldTableText" : ""
        }`}
      >
        {textFormatNumberWise(item)}
      </div>
    );
  };

  const items = [
    {
      label: "Home",
    },
    {
      label: "Calculator",
      template: () => (
        <Link to="/jio-dashboard">
          <a className="text-primary font-semibold">Calculator</a>
        </Link>
      ),
    },
    {
      label: "Lease Calculator",
      template: () => (
        <Link to="/jio-dashboard">
          <a className="text-primary font-semibold">Lease Calculator</a>
        </Link>
      ),
    },
    { label: `${data?.name}` },
  ];

  const itemsForMegaMunu = [
    {
      label: "Basic Assumptions & Inputs",
      command: () => {
        handleScroll(bannerRef);
      },
    },
    {
      label: "Profit & Loss",
      command: () => {
        handleScroll(pnlRef);
      },
    },
    {
      label: "Balance Sheet",
      command: () => {
        handleScroll(balanceRef);
      },
    },
    {
      label: "Cash Flow",
      command: () => {
        handleScroll(cashRef);
      },
    },
    {
      label: "IRR Computation",
      command: () => {
        handleScroll(irrRef);
      },
    },
    {
      label: "Emi Calulation (Lending)",
      command: () => {
        handleScroll(emiRef);
      },
    },
    {
      label: "Emi Calulation (Borrowings)",
      command: () => {
        handleScroll(emiRef2);
      },
    },
  ];

  const ColumnsForAll = [
    {
      body: (item: any) => (
        <RowSectionText rowData={item} item={item?.event_type} />
      ),
      headerClassName: styles.tableHeader,
      className: styles.tableRow,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y1} />,
      header: "Year 1",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y2} />,
      header: "Year 2",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y3} />,
      header: "Year 3",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y4} />,
      header: "Year 4",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y5} />,
      header: "Year 4",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
  ];
  const ColumnsForIRR = [
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.irr} />,
      headerClassName: styles.tableHeader,
      className: styles.tableRow,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y1} />,
      header: "Year 1",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y2} />,
      header: "Year 2",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y3} />,
      header: "Year 3",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y4} />,
      header: "Year 4",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      body: (item: any) => <RowSectionNumber rowData={item} item={item?.y5} />,
      header: "Year 4",
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
  ];
  const columnsForEmi = [
    {
      field: "months",
      header: "Months",
      body: (e: any) => textFormatNumberWise(e?.months),
      headerClassName: styles.tableHeader,
      className: styles.tableRowEmi,
    },
    {
      field: "opening_balance",
      header: "Opening Balance",
      body: (e: any) => textFormatNumberWise(e?.opening_balance),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      field: "principal",
      header: "Principal",
      body: (e: any) => textFormatNumberWise(e?.principal),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      field: "interest",
      header: "Interest",
      body: (e: any) => textFormatNumberWise(e?.interest),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      field: "advance_payment",
      header: "Advance Payment",
      body: (e: any) => textFormatNumberWise(e?.advance_payment),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      field: "closing_balance",
      header: "Closing Balance",
      body: (e: any) => textFormatNumberWise(e?.closing_balance),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
    {
      field: "total_payment",
      header: "Total Payment",
      body: (e: any) => textFormatNumberWise(e?.total_payment),
      headerClassName: styles.tableHeader,
      className: styles.tableRow2,
    },
  ];

  return (
    <div>
      <div className="mb-2">
        <Crump items={items} />
      </div>
      {error ? (
        <ErrorComponenet />
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="pt-3">
          <div className="grid ">
            {/* {!isLoading ? (
              <FormModal
                show={show}
                handleShow={handleShow}
                setShow={setShow}
                handleClose={handleClose}
                dataForForm={dataForForm}
                mutate={mutate}
              />
            ) : (
              ""
            )} */}
            <div className="md:col-3 ">
              <div className="" style={{ position: "fixed" }}>
                <MegaMenu
                  className="megaMenu"
                  model={itemsForMegaMunu}
                  orientation="vertical"
                  breakpoint="960px"
                />
              </div>
            </div>

            <div className="md:col-9">
              <div className="" ref={bannerRef}>
                <BannerSection data={data} />
              </div>
              <div className="my-5" ref={pnlRef}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>
                  {" "}
                  Profit and Loss{" "}
                </h3>
                <TableDetails data={data?.pnl} columnForTable={ColumnsForAll} />
              </div>
              <div className="my-5" ref={balanceRef}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>
                  Balance Sheet{" "}
                </h3>
                <TableDetails
                  data={data?.balance_sheet_table}
                  columnForTable={ColumnsForAll}
                />
              </div>

              <div className="my-5" ref={cashRef}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>Cash flow</h3>
                <TableDetails
                  data={data?.cash_flow_table}
                  columnForTable={ColumnsForAll}
                />
              </div>
              <div className="my-5" ref={irrRef}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>
                  {" "}
                  IRR Computation{" "}
                </h3>
                <TableDetails
                  data={data?.irr_table}
                  columnForTable={ColumnsForIRR}
                />
              </div>

              <div className="my-5" ref={emiRef}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>
                  {" "}
                  EMI Calculation (Lending){" "}
                </h3>
                <TableEmi
                  data={data?.emi_calculation}
                  columns={columnsForEmi}
                />
              </div>
              <div className="my-5" ref={emiRef2}>
                <h3 className={`mb-2 pl-4 ${styles.leftCol}`}>
                  {" "}
                  EMI Calculation (Borrowing){" "}
                </h3>
                <TableEmi
                  data={data?.emi_calculation_table}
                  columns={columnsForEmi}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailTable;
