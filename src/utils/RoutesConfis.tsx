import Home from '../components/main/Home';
import RFQList from '../pages/RFQ-list/RFQList';
import CommonForm from '../components/CommonForm/CommonForm';
import SupplierQuatations from '../pages/supplier-quatations/SupplierQuatations';
import PurchaseOrders from '../pages/purchase-orders/PurchaseOrders';
import PROrMyDeleveries from '../pages/purchase-receipy-my-deleveries/PROrMyDeleveries';
import PIorMySales from '../pages/pi-my-sales/PIorMySales';
import MyPayments from '../pages/my-payments/MyPayments';

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
    component: SupplierQuatations,
  },
  {
    path: 'purchase-orders',
    component: PurchaseOrders,
  },
  {
    path: 'purchase-receipts-my-deliveries',
    component: PROrMyDeleveries,
  },
  {
    path: 'purchase-invoices-my-sales',
    component: PIorMySales,
  },
  {
    path: 'my-payments',
    component: MyPayments,
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
