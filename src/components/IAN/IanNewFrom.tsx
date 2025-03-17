import {
  useFrappeCreateDoc,
  useFrappeFileUpload,
  useFrappeGetDocList,
  useFrappePostCall,
} from "frappe-react-sdk";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { FileUpload } from "primereact/fileupload";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Toast } from "primereact/toast";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Crump from "../../BreadCrump/Crump";
import ErrorComponenet from "../../error/ErrorComponenet";
import { baseUrlFrontend } from "../../utils/BasePath";
import Loader, { formatDate, textFormatNumberWise } from "../../utils/utils";
import TableSelect from "../../tables/TableSelect";
import { Calendar } from "primereact/calendar";

const IanNewForm = () => {
  const navigate = useNavigate();
  const {
    data: dataForSupplier,
    isLoading,
    error,
  } = useFrappeGetDocList("Supplier", {
    fields: ["name"],
  });

  const { data: dataForApprover } = useFrappeGetDocList("User", {
    fields: ["*"],
    filters: [["enabled", "=", 1]],
  });

  console.log("Dt", dataForApprover);

  const {
    call,
    loading: poLoading,
    error: poError,
  } = useFrappePostCall(
    "jio_fiber.jio_fiber.doctype.invoice_approval_note.invoice_approval_note.get_pending_purchase_orders"
  );

  const { createDoc } = useFrappeCreateDoc();
  const toast = useRef(null);
  const [formData, setFormData] = useState({
    Proposer: "",
    Summary: "",
    CostCenter: "",
    supplierInvoiceNumber: "",
    supplierInvoiceDate: null,
    // costOfService: 0,
    // purchaseNumber: "",
    purchaseAmount: 0,
    otherCharges: 0,
    // totalAmount: 0,
    // Representative: "",
    // Entity: "",
    Approver1: "",
    Approver2: "",
    // PurchaseOrderNum: "",
    PrAndPiApprover: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  // const [processFlow, setProcessFlow] = useState<string | null>(null);
  // const [financialRadio, setFinancialRadio] = useState<string | null>(null);
  const [commercial, setCommercial] = useState<string | null>(null);
  const [supplierVendor, setSupplierVendor] = useState("");
  const [poNumber, setPoNumber] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [selectedTableRow, setSelectedRow] = useState<any>({});

  // const dropdownValuesForApprover = [
  //   dataForApprover?.map((item: any) => item?.email),
  // ];
  // console.log(
  //   dropdownValuesForApprover,
  //   dataForApprover?.map((item: any) => item?.email)
  // );

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const { upload } = useFrappeFileUpload();
  const handleFileUpload = async () => {
    const file = files[0];
    try {
      if (file) {
        const res = await upload(file, {
          doctype: "Invoice Approval Note",
          fieldname: "upload_business_note",
          isPrivate: false,
        });
        return res.file_url;
      }
    } catch (error) {
      /* @ts-ignore */
      toast?.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error while uploading file",
        life: 3000,
      });
      console.error(error);
    }
  };

  const handleNumberChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async () => {
    console.log(formData, supplierVendor, files, selectedTableRow);
    const isValid =
      Object.values(formData).every(
        (field) => field !== "" && field !== null && field !== undefined
      ) &&
      // processFlow &&
      supplierVendor &&
      // commercial &&
      files &&
      selectedTableRow;
    if (!isValid) {
      /* @ts-ignore */
      toast?.current?.show({
        severity: "warn",
        summary: "Warning",
        detail: "All Fields Are Mandatory",
        life: 3000,
      });
      return;
    }
    try {
      const fileName: any = await handleFileUpload();
      console.log(fileName, "console for file name");
      if (!fileName) {
        return;
      }
      const res = await createDoc("Invoice Approval Note", {
        proposer: formData.Proposer,
        // financial: processFlow === "financial" ? 1 : 0,
        // non_financial: processFlow === "non-financial" ? 1 : 0,
        supplier__vendor_name: supplierVendor,
        // no: financialRadio === "no" ? 1 : 0,
        // yes: financialRadio === "yes" ? 1 : 0,
        cost_centre: formData.CostCenter,
        capex: commercial === "CAPEX" ? 1 : 0,
        opex: commercial === "OPEX" ? 1 : 0,
        // cost_of_service: formData.costOfService,
        other_charges: formData.otherCharges,
        total_amount:
          Number(formData.otherCharges) + Number(formData.purchaseAmount),
        upload_business_note: fileName,
        summary: formData.Summary,
        // representative: formData.Representative,
        // entity: formData.Entity,
        approver_1: formData.Approver1,
        approver_2: formData.Approver2,
        purchase_order_number: selectedTableRow.name,
        purchase_order_amount: selectedTableRow.outstanding_amount,
        supplier_invoice_no: formData.supplierInvoiceNumber,
        supplier_invoice_date: formatDate(formData.supplierInvoiceDate),
        pr_pi_approver: formData.PrAndPiApprover,
      });
      /* @ts-ignore */
      toast?.current.show({
        severity: "success",
        summary: "Success",
        detail: "Created successfully",
        life: 3000,
      });

      navigate(
        `${baseUrlFrontend}/sales/invoice-approval-note/details/${res.name}`
      );
    } catch (error) {
      /* @ts-ignore */
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error while submitting",
        life: 3000,
      });
      console.error("Submission error:", error);
    }
  };

  const handleSupplierChange = () => {
    setShowTable(true);
    call({
      supplier: supplierVendor,
    }).then((res) => {
      setPoNumber(res.message);
    });
  };

  const handleSupplierDropDown = (e: any) => {
    setShowTable(false);
    setSupplierVendor(e.value);
    setPoNumber([]);
    setSelectedRow({});
  };
  const items = [
    {
      label: "Sales",
    },
    {
      label: "Invoice Approval Note",
      template: () => (
        <Link to={`${baseUrlFrontend}/sales/invoice-approval-note`}>
          <a className="text-primary font-semibold">Invoice Approval Note</a>
        </Link>
      ),
    },
    {
      label: "New Invoice",
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
        <div className="card">
          <Toast ref={toast} />
          <div className="p-fluid formgrid grid">
            <div className="field col-12 md:col-6">
              <label htmlFor="Proposer">Proposer</label>
              <InputText
                id="Proposer"
                value={formData.Proposer}
                onChange={handleInputChange}
                type="text"
                required
              />
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="supplierVendor">Supplier / Vendor Name</label>
              <Dropdown
                id="supplierVendor"
                value={supplierVendor}
                onChange={handleSupplierDropDown}
                options={dataForSupplier?.map((supplier) => supplier.name)}
                optionLabel="name"
                required
              />
            </div>
            <div className="field col-12" onClick={handleSupplierChange}>
              {supplierVendor ? (
                <Button className="w-max">Get Purchase Order</Button>
              ) : (
                ""
              )}
            </div>
            {showTable ? (
              <div className="card w-full">
                <TableSelect
                  data={poNumber}
                  selected={selectedTableRow}
                  setSelected={setSelectedRow}
                  title={supplierVendor}
                />
              </div>
            ) : (
              ""
            )}
            {showTable ? (
              <>
                <div className="field col-12 md:col-6">
                  <label htmlFor="purchaseOrderNumber">
                    Purchase Order Number
                  </label>
                  <InputText
                    id="purchaseOrderNumber"
                    value={selectedTableRow?.name}
                    readOnly
                    disabled
                  />
                </div>
                <div className="field col-12 md:col-6">
                  <label htmlFor="purchaseOrderAmount">
                    Purchase Order Amount
                  </label>
                  <InputText
                    id="purchaseOrderNumber"
                    value={textFormatNumberWise(
                      selectedTableRow?.outstanding_amount
                    )}
                    disabled
                    readOnly
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <div className="field col-12 md:col-6">
              <label htmlFor="supplierInvoiceNumber">
                Supplier Invoice Number
              </label>
              <InputText
                id="supplierInvoiceNumber"
                value={formData.supplierInvoiceNumber}
                onChange={handleInputChange}
                type="text"
                required
              />
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="supplierInvoiceDate">Supplier Invoice Date</label>
              <Calendar
                id="supplierInvoiceDate"
                dateFormat="dd/mm/yy"
                value={formData.supplierInvoiceDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    // @ts-ignore
                    supplierInvoiceDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="CostCenter">Cost Center</label>
              <InputText
                id="CostCenter"
                value={formData.CostCenter}
                onChange={handleInputChange}
                type="text"
                required
              />
            </div>
            <div className="field col-12 md:col-6"></div>
            <div className="col-12"></div>
            <div className="field col-12 md:col-4">
              <label htmlFor="purchaseAmount">Purchase Amount</label>
              <InputNumber
                id="purchaseAmount"
                value={formData.purchaseAmount}
                onValueChange={handleNumberChange}
                mode="decimal"
              ></InputNumber>
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="otherCharges">Tax and Charges</label>
              <InputNumber
                id="otherCharges"
                value={formData.otherCharges}
                onValueChange={handleNumberChange}
                mode="decimal"
              ></InputNumber>
            </div>
            <div className="field col-12 md:col-4">
              <label htmlFor="totalAmount">Total Amount</label>
              <InputNumber
                id="totalAmount"
                value={
                  Number(formData.otherCharges) +
                    Number(formData.purchaseAmount) >
                  0
                    ? Number(formData.otherCharges) +
                      Number(formData.purchaseAmount)
                    : 0
                }
                // onValueChange={handleNumberChange}
                disabled
                readOnly
                mode="decimal"
              ></InputNumber>
            </div>
            <div className="col-12"></div>
            {/* <div className="field col-12 md:col-6">
              <label htmlFor="Representative">Representative</label>
              <InputText
                id="Representative"
                value={formData.Representative}
                onChange={handleInputChange}
                type="text"
              />
            </div> */}
            {/* <div className="field col-12 md:col-6">
              <label htmlFor="Entity">Entity</label>
              <InputText
                id="Entity"
                value={formData.Entity}
                onChange={handleInputChange}
                type="text"
              />
            </div> */}
            <div className="field col-12 md:col-6">
              <label htmlFor="Approver1">Approver 1 </label>
              <Dropdown
                id="Approver1"
                value={formData.Approver1}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    Approver1: e.value,
                  }))
                }
                options={dataForApprover?.map((item: any) => item?.email)}
                optionLabel="name"
              />
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="Approver2">Approver 2 </label>
              <Dropdown
                id="Approver2"
                value={formData.Approver2}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    Approver2: e.value,
                  }))
                }
                options={dataForApprover?.map((item: any) => item?.email)}
                optionLabel="name"
              />
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="prAndPi">PR & PI Approver </label>
              <Dropdown
                id="prAndPi"
                value={formData.PrAndPiApprover}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    PrAndPiApprover: e.value,
                  }))
                }
                options={dataForApprover?.map((item: any) => item?.email)}
                optionLabel="name"
              />
            </div>
            <div className="col-12 col:md-6"></div>
            <div className="field col-12 md:col-6">
              <label htmlFor="commercial">Commercial</label>
              <div className="grid mt-1">
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="CAPEX"
                    name="Commercial"
                    value="CAPEX"
                    checked={commercial === "CAPEX"}
                    onChange={(e) => setCommercial(e.value)}
                  />
                  <label htmlFor="CAPEX">CAPEX</label>
                </div>
                <div className="field-radiobutton col-6">
                  <RadioButton
                    inputId="OPEX"
                    name="Commercial"
                    value="OPEX"
                    checked={commercial === "OPEX"}
                    onChange={(e) => setCommercial(e.value)}
                  />
                  <label htmlFor="OPEX">OPEX</label>
                </div>
              </div>
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="uploadBusinessNote">Supplier Invoice</label>
              <div className="flex align-items-center">
                <FileUpload
                  id="uploadBusinessNote"
                  mode="basic"
                  accept=".pdf,.doc,.docx,.jpeg,.jpg,.png,.gif,.xlsx"
                  maxFileSize={10000000}
                  auto
                  customUpload
                  uploadHandler={(item) => setFiles(item.files)}
                  chooseLabel="Upload"
                />
                <div className="ml-2">{files && files[0]?.name}</div>
              </div>
            </div>
            <div className="field col-12 md:col-6">
              <label htmlFor="Summary">Summary</label>
              <InputTextarea
                id="Summary"
                value={formData.Summary}
                onChange={handleInputChange}
                rows={5}
                cols={30}
              />
            </div>
          </div>
          <div className="text-right">
            <Button onClick={handleSubmit}>Save</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default IanNewForm;
