import { Component } from 'react';
import AllDevices from '../components/calculator/AllDevices';
import FormPage from '../components/calculator/FormPage';
import DetailTable from '../components/detail/DetailTable';
import IanAll from '../components/IAN/IanAll';
import IanDetails from '../components/IAN/IanDetails';
import IanNewForm from '../components/IAN/IanNewFrom';
import Home from '../components/main/Home';
import IanStatus from '../components/IAN/IanStatus';
import RFQList from '../pages/RFQ-list/RFQList';
import CommonForm from '../components/CommonForm/CommonForm';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: 'rfq-list',
    component: RFQList,
  },
  {
    path: 'rfq-form',
    component: CommonForm,
  },
  {
    path: 'supplier-quotations',
    component: RFQList,
  },
  {
    path: 'purchase-orders',
    component: RFQList,
  },
  {
    path: 'purchase-receipts/my-deliveries',
    component: RFQList,
  },
  {
    path: 'purchase-invoices/my-sales',
    component: RFQList,
  },
  {
    path: 'my-payments',
    component: RFQList,
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
