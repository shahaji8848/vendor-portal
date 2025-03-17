import React, { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import styles from "../../styles/list.module.css";
import { Dialog } from "primereact/dialog";
import { useFrappeCreateDoc, useFrappeUpdateDoc } from "frappe-react-sdk";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
const FormModal = ({ show, setShow, dataForForm, mutate }: any) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deviceType: dataForForm?.deviceType || "",
    deviceCost: dataForForm?.deviceCost || "",
    gst: dataForForm?.gst || "",
    roi: dataForForm?.roi || "",
    costOfFundsOperating: dataForForm?.costOfFundsOperating ||  "",
    accDepreciationRate: dataForForm?.accDepreciationRate || "",
    taxDepreciationRate: dataForForm?.taxDepreciationRate || "",
    residualValueOfAsset: dataForForm?.residualValueOfAsset || "",
    otherExpenses: dataForForm?.otherExpenses || "",
    creditCost: dataForForm?.creditCost || "",
    taxRate: dataForForm?.taxRate || "",
    borrowings: dataForForm?.borrowings || "",
    equity: dataForForm?.equity || "",
  });

  const toast = useRef(null);
  const { createDoc, error, loading } = useFrappeCreateDoc();
  const { updateDoc } = useFrappeUpdateDoc();
  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = async () => {
    // Validation
    const isValid = Object.values(formData).every(
      (field) => field !== "" && field !== null && field !== undefined
    );
    if (!isValid) {
      /* @ts-ignore */
      toast?.current.show({
        severity: "warn",
        summary: "Warning",
        detail: "Please Fill all the fields",
        life: 3000,
      });
      return;
    }
    try {
      console.log(formData,"console for for datata")
      const res = await createDoc("Lease Rent Calculator - Unit Matrix", {
        device_type: formData.deviceType,
        device_cost: parseFloat(formData.deviceCost),
        gst: parseFloat(formData.gst),
        rate_of_interest_on_operating_lease: parseFloat(formData.roi),
        number_of_months: 60.0,
        cost_of_funds_for_operating_lease: parseFloat(
          formData.costOfFundsOperating
        ),
        accounting_depreciation_rate: parseFloat(formData.accDepreciationRate),
        tax_depreciation_rate_wdv: parseFloat(formData.taxDepreciationRate),
        residual_value_of_the_asset: parseFloat(formData.residualValueOfAsset),
        other_exps: parseFloat(formData.otherExpenses),
        credit_cost: parseFloat(formData.creditCost),
        tax_rate: parseFloat(formData.taxRate),
        borrowings: parseFloat(formData.borrowings),
        equity__: parseFloat(formData.equity),
      });
      /* @ts-ignore */
      toast?.current.show({
        severity: "success",
        summary: "Success",
        detail: "created successfully",
        life: 3000,
      });
      navigate(`/jio-dashboard/detail/${res?.name}`);
      setFormData({
        deviceType:'',
        deviceCost: "",
        gst: "",
        roi: "",
        costOfFundsOperating: "",
        accDepreciationRate: "",
        taxDepreciationRate: "",
        residualValueOfAsset: "",
        otherExpenses: "",
        creditCost: "",
        taxRate: "",
        borrowings: "",
        equity: "",
      });
      setShow(false);
    } catch (error) {
      console.log(error);
      /* @ts-ignore */
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error while submitting",
        life: 3000,
      });
     
    }
  };

  const handleFormUpdate = async () => {
    try {
      const updateDocType = dataForForm?.name;
      const updatedFields: { [key: string]: number } = {};
      (Object.keys(formData) as (keyof typeof formData)[]).forEach((key) => {
        if (formData[key] !== dataForForm[key]) {
          switch (key) {
            case "deviceType":
              updatedFields["device_type"] =  formData[key] 
              break;
            case "deviceCost":
              updatedFields["device_cost"] = parseFloat(
                formData[key] as string
              );
              break;
            case "gst":
              updatedFields["gst"] = parseFloat(formData[key] as string);
              break;
            case "roi":
              updatedFields["rate_of_interest_on_operating_lease"] = parseFloat(
                formData[key] as string
              );
              break;
            case "costOfFundsOperating":
              updatedFields["cost_of_funds_for_operating_lease"] = parseFloat(
                formData[key] as string
              );
              break;
            case "accDepreciationRate":
              updatedFields["accounting_depreciation_rate"] = parseFloat(
                formData[key] as string
              );
              break;
            case "taxDepreciationRate":
              updatedFields["tax_depreciation_rate_wdv"] = parseFloat(
                formData[key] as string
              );
              break;
            case "residualValueOfAsset":
              updatedFields["residual_value_of_the_asset"] = parseFloat(
                formData[key] as string
              );
              break;
            case "otherExpenses":
              updatedFields["other_exps"] = parseFloat(formData[key] as string);
              break;
            case "creditCost":
              updatedFields["credit_cost"] = parseFloat(
                formData[key] as string
              );
              break;
            case "taxRate":
              updatedFields["tax_rate"] = parseFloat(formData[key] as string);
              break;
            case "borrowings":
              updatedFields["borrowings"] = parseFloat(formData[key] as string);
              break;
            case "equity":
              updatedFields["equity__"] = parseFloat(formData[key] as string);
              break;
            default:
              break;
          }
        }
      });

      if (Object.keys(updatedFields).length === 0) {
        /* @ts-ignore */
        toast?.current.show({
          severity: "info",
          summary: "Info",
          detail: "No changes to update",
          life: 3000,
        });
        return;
      }
      const res = await updateDoc(
        "Lease Rent Calculator - Unit Matrix",
        updateDocType,
        updatedFields
      );
      mutate();
      if (res?.name) {
        /* @ts-ignore */
        toast?.current.show({
          severity: "success",
          summary: "Success",
          detail: "Updated successfully",
          life: 3000,
        });
      }
      setShow(false);
      console.log(res, "console for resrsrs updatess");
    } catch (error) {
      /* @ts-ignore */
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error while Updating",
        life: 3000,
      });
      console.log(error);
    }
  };

  const handleSubmit = async (action: "submit" | "update") => {
    try {
      if (action === "submit") {
        await handleFormSubmit();
      } else if (action === "update") {
        await handleFormUpdate();
      }
    } catch (error) {
      {
        /* @ts-ignore */
      }
      // toast.current.show({ severity: 'error', summary: 'Error', detail: 'Error while submitting', life: 3000 });
      console.log(error);
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <Dialog
        header={`${dataForForm?.name ? "Update" : "Add Details"}`}
        headerClassName={styles.fs}
        visible={show}
        maximizable
        className={styles.modalForm}
        onHide={() => setShow(!show)}
      >
        <form>

          <div className="formgrid grid">
          <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="deviceCost">Device Type</label>
              <input
                id="deviceType"
                value={formData.deviceType}
                onChange={handleInputChange}
                className=" text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="deviceCost">Device Cost</label>
              <input
                id="deviceCost"
              
                type="number"
                value={formData.deviceCost}
                onChange={handleInputChange}
                className=" text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1 ">
              <label htmlFor="gst">GST</label>
              <input
                id="gst"
                type="number"
            
                value={formData.gst}
                onChange={handleInputChange}
                className=" text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="roi">ROI on operating lease</label>
              <input
                id="roi"
                type="number"
            
                value={formData.roi}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
       
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="costOfFundsOperating">
                Cost of funds, for operating lease
              </label>
              <input
                id="costOfFundsOperating"
                type="number"
               
                value={formData.costOfFundsOperating}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="accDepreciationRate">
                Accounting Depreciation Rate
              </label>
              <input
                id="accDepreciationRate"
                type="number"
                value={formData.accDepreciationRate}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="taxDepreciationRate">
                Tax Depreciation rate WDV
              </label>
              <input
                id="taxDepreciationRate"
                type="number"
              
                value={formData.taxDepreciationRate}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="residualValueOfAsset">
                Residual value of the asset
              </label>
              <input
                id="residualValueOfAsset"
                type="number"
               
                value={formData.residualValueOfAsset}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="otherExpenses">Other Expenses</label>
              <input
                id="otherExpenses"
                type="number"
        
                value={formData.otherExpenses}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="creditCost">Credit cost</label>
              <input
                id="creditCost"
                type="number"
              
                value={formData.creditCost}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="taxRate">Tax rate</label>
              <input
                id="taxRate"
                type="number"
               
                value={formData.taxRate}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="borrowings">Borrowings</label>
              <input
                id="borrowings"
                type="number"
               
                value={formData.borrowings}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
            <div className="field col-12 md:col-6 font-sm mb-1">
              <label htmlFor="borrowings">Equity %</label>
              <input
                id="equity"
                type="number"
               
                value={formData.equity}
                onChange={handleInputChange}
                className="text-sm text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none   w-full"
                required
              />
            </div>
          </div>
          <div className="text-right text-sm">
            {dataForForm?.deviceCost ? (
              <Button
                label="update"
                className="primaryButton"
                type="submit"
                onClick={(e: any) => {
                  e.preventDefault();
                  handleSubmit("update");
                }}
              />
            ) : (
              <Button
                label="Submit"
                className="primaryButton"
                type="submit"
                onClick={(e: any) => {
                  e.preventDefault();
                  handleSubmit("submit");
                }}
              />
            )}
          </div>
        </form>
      </Dialog>
    </div>
  );
};

export default FormModal;