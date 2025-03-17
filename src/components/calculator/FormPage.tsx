import { useFrappeCreateDoc } from "frappe-react-sdk";
import { Button } from "primereact/button";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrlFrontend } from "../../utils/BasePath";
import { Toast } from "primereact/toast";
import Crump from "../../BreadCrump/Crump";
import ErrorComponenet from "../../error/ErrorComponenet";
import Loader from "../../utils/utils";

type Props = {};

const FormPage = (props: Props) => {
  console.log("rendered ");
  console.log("console for load checker");
  const toast = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    deviceType: "",
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
  const { createDoc, error, loading } = useFrappeCreateDoc();
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
      console.log(res, "console for resosien");
      navigate(`${baseUrlFrontend}/dashboard/details/${res?.name}`);
      setFormData({
        deviceType: "",
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
    } catch (error) {
      /* @ts-ignore */
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Error while submitting",
        life: 3000,
      });
      console.log(error);
    }
  };
  const items = [
    {
      label: "Home",
      template: () => (
        <Link to={`/${baseUrlFrontend}`}>
          <a className="text-primary font-semibold">Home</a>
        </Link>
      ),
    },
    { label: "Calculator" },
    {
      label: "Lease Calculator",
      template: () => (
        <Link to={`/${baseUrlFrontend}/calculator/lease-calculator/all`}>
          <a className="text-primary font-semibold">Lease Calculator</a>
        </Link>
      ),
    },
    {
      label: "New",
    },
  ];

  const formFields = [
    {
      id: "deviceType",
      label: "Device Type",
      value: formData?.deviceType,
    },
    {
      id: "deviceCost",
      label: "Device Cost",
      value: formData?.deviceCost,
    },
    {
      id: "gst",
      label: "GST",
      value: formData?.gst,
    },
    {
      id: "roi",
      label: "ROI on Operating Lease",
      value: formData?.roi,
    },
    {
      id: "costOfFundsOperating",
      label: "Cost Of Funds, for Operating Lease",
      value: formData?.costOfFundsOperating,
    },
    {
      id: "accDepreciationRate",
      label: "Accounting Depreciation Rate",
      value: formData?.accDepreciationRate,
    },
    {
      id: "taxDepreciationRate",
      label: "Tax Depreciation Rate WDV",
      value: formData?.taxDepreciationRate,
    },
    {
      id: "residualValueOfAsset",
      label: "Residual Value of the Asset",
      value: formData?.residualValueOfAsset,
    },
    {
      id: "otherExpenses",
      label: "Other Expenses",
      value: formData?.otherExpenses,
    },
    {
      id: "creditCost",
      label: "Credit Cost",
      value: formData?.creditCost,
    },
    {
      id: "taxRate",
      label: "Tax Rate",
      value: formData?.taxRate,
    },
    {
      id: "borrowings",
      label: "Borrowings",
      value: formData?.borrowings,
    },
    {
      id: "equity",
      label: "Equity %",
      value: formData?.equity,
    },
  ];

  return (
    <div className="">
      <Toast ref={toast} />
      <div className="mb-2">
        <Crump items={items} />
      </div>
      {error ? (
        <ErrorComponenet />
      ) : loading ? (
        <Loader />
      ) : (
        <div className="card pt-4">
          <h4 className=" mx-8 mb-4">Add New Device</h4>
          <form className="mx-8  w-100 md:w-80">
            <div className="formgrid grid">
              {formFields?.map((field: any, index: any) => (
                <div className="field col-12 md:col-4" key={index}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input
                    id={field.id}
                    value={field.value}
                    onChange={handleInputChange}
                    className="text-color surface-overlay p-1 border-1 border-solid surface-border border-round appearance-none outline-none w-full"
                    required
                  />
                </div>
              ))}
            </div>
            <div className="text-right ">
              <Button
                label="Submit"
                type="submit"
                onClick={(e: any) => {
                  e.preventDefault();
                  handleFormSubmit();
                }}
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default FormPage;
