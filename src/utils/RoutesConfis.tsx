import { Component } from "react";
import AllDevices from "../components/calculator/AllDevices";
import FormPage from "../components/calculator/FormPage";
import DetailTable from "../components/detail/DetailTable";
import IanAll from "../components/IAN/IanAll";
import IanDetails from "../components/IAN/IanDetails";
import IanNewForm from "../components/IAN/IanNewFrom";
import Home from "../components/main/Home";
import IanStatus from "../components/IAN/IanStatus";

export const routes = [
  {
    path: "",
    component: Home,
  },
  // {
  //   path: "dashboard/details/:name",
  //   component: DetailTable,
  // },
  // {
  //   path: "calculator/lease-calculator/all",
  //   component: AllDevices,
  // },
  // {
  //   path: "calculator/lease-calculator/new",
  //   component: FormPage,
  // },
  // {
  //   path: "sales/invoice-approval-note/all",
  //   component: IanAll,
  // },
  // {
  //   path: "sales/invoice-approval-note/new",
  //   component: IanNewForm,
  // },
  // {
  //   path: "sales/invoice-approval-note/details/:name",
  //   component: IanDetails,
  // },
  // {
  //   path: "sales/invoice-approval-note/status/:type",
  //   component: IanStatus,
  // },
];
