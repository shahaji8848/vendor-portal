import React from "react";
import styles from "../../styles/detail.module.css";
import { Card } from "primereact/card";
import {
  numberFormatter,
  textFormatNumberWise,
  textFormatPercentageWise,
} from "../../utils/utils";
const BannerSection = ({ data }: any) => {
  console.log("type chevk for number", typeof data?.gst);
  return (
    <div className="grid">
      <div className="md:col-6">
        <div className="card m-o p-0 h-full">
          <div className="my-3">
            <h4
              className={` mt-0 mb-0 ${styles.leftCol}`}
              style={{ paddingLeft: "1.5rem" }}
            >
              Basic Assumptions - Inputs
            </h4>
          </div>
          <div className="">
            <Card className="my-0 headerCards">
              <div className="py-0">
                <p className="flex my-0 py-2 justify-content-between">
                  <strong
                    className={` pe-2 fontForBanner `}
                    // style={{padding}}
                  >
                    Device cost:
                  </strong>
                  <span className="px-2 text-right fontForBanner">
                    {`${
                      data?.device_cost
                        ? numberFormatter(data?.device_cost)
                        : "-"
                    }`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>GST:</strong>
                  <span className="px-2 text-right fontForBanner">
                    {`${data?.gst ? numberFormatter(data?.gst) + "%" : "-"}`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Rate of Interest on operating lease :
                  </strong>
                  <span className="px-2 text-right fontForBanner">
                    {`${
                      data?.rate_of_interest_on_operating_lease
                        ? numberFormatter(
                            data?.rate_of_interest_on_operating_lease
                          ) + "%"
                        : ""
                    }`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Cost of funds, for operating lease:
                  </strong>
                  <span className="px-2 text-right fontForBanner">
                    {`${
                      data?.cost_of_funds_for_operating_lease
                        ? numberFormatter(
                            data?.cost_of_funds_for_operating_lease
                          ) + "%"
                        : "-"
                    }`}
                  </span>
                </p>
              </div>
            </Card>
            <Card className={`card headerCards p-0`}>
              <div className="py-0">
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Accounting Depreciation Rate:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${
                      data?.accounting_depreciation_rate
                        ? numberFormatter(data?.accounting_depreciation_rate) +
                          "%"
                        : "-"
                    }`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Tax Depreciation rate WDV:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${
                      data?.tax_depreciation_rate_wdv
                        ? numberFormatter(data?.tax_depreciation_rate_wdv) + "%"
                        : "-"
                    }`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Residual value of the asset:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${
                      data?.residual_value_of_the_asset
                        ? numberFormatter(data?.residual_value_of_the_asset) +
                          "%"
                        : "-"
                    }`}
                  </span>
                </p>
              </div>
            </Card>
            <Card className="card headerCards p-0">
              <p className="flex  my-0 py-2 justify-content-between">
                <strong className={` pe-2 fontForBanner `}>Other Exps :</strong>
                <span className="px-2 fontForBanner">
                  {`${
                    data?.other_exps
                      ? numberFormatter(data?.other_exps) + "%"
                      : "-"
                  }`}
                </span>
              </p>
              <p className="flex  my-0 py-2 justify-content-between">
                <strong className={` pe-2 fontForBanner `}>Credit cost:</strong>
                <span className="px-2 fontForBanner">
                  {`${textFormatPercentageWise(data?.credit_cost)}`}
                </span>
              </p>
              <p className="flex  my-0 py-2 justify-content-between">
                <strong className={` pe-2 fontForBanner `}>Tax rate:</strong>
                <span className="px-2 fontForBanner">
                  {`${textFormatPercentageWise(data?.tax_rate)}`}
                </span>
              </p>
              <p className="flex  my-0 py-2 justify-content-between">
                <strong className={` pe-2 fontForBanner `}>Borrowings:</strong>
                <span className="px-2 fontForBanner">
                  {`${textFormatPercentageWise(data?.borrowing)}`}
                </span>
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div className="md:col-6">
        <div className="card m-0 p-0 h-full">
          <div className="my-3">
            <h4
              className={`mt-0 mb-0 ${styles.leftCol}`}
              style={{ paddingLeft: "1.5rem" }}
            >
              Actual Results
            </h4>
          </div>

          <div className="">
            <Card className="my-2 diffCard headerCards">
              <div className="py-0">
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner`}>IRR:</strong>
                  <span className="px-2 text-right fontForBanner font-bold">
                    {`${textFormatPercentageWise(data?.irr)}`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner`}>
                    Accounting Return on Equity:
                  </strong>
                  <span className="px-2 text-right fontForBanner font-bold">
                    {`${textFormatPercentageWise(
                      data?.accounting_return_on_equity
                    )}`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner`}>
                    Accounting Return on Assets:
                  </strong>
                  <span className="px-2 text-right fontForBanner font-bold">
                    {`${textFormatPercentageWise(
                      data?.accounting_return_on_assets
                    )}`}
                  </span>
                </p>
                <p className="flex my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner`}>CRAR RoE:</strong>
                  <span className="px-2 text-right fontForBanner font-bold">
                    {`${textFormatPercentageWise(data?.crar_roe)}`}
                  </span>
                </p>
              </div>
            </Card>
            <Card className="card headerCards p-0">
              <div className="py-0">
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Total Cost of Device:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(data?.total_cost_of_device)}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>Equity %:</strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatPercentageWise(data?.equity__)}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>Equity :</strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(data?.equity)}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Borrowings %:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatPercentageWise(data?.borrowings__)}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Borrowings:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(data?.borrowings)}`}
                  </span>
                </p>
              </div>
            </Card>
            <Card className="my-2 headerCards">
              <div>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Mth Lease Rental, excluding GST:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(
                      data?.mth_lease_rental_excluding_gst
                    )}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Mth Lease Rental, including GST:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(
                      data?.mth_lease_rental_including_gst
                    )}`}
                  </span>
                </p>
                <p className="flex  my-0 py-2 justify-content-between">
                  <strong className={` pe-2 fontForBanner `}>
                    Mth Interest EMI:
                  </strong>
                  <span className="px-2 fontForBanner">
                    {`${textFormatNumberWise(data?.mth_interest_emi)}`}
                  </span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
