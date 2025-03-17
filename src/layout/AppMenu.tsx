/* eslint-disable @next/next/no-img-element */
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../types/layout';
import { baseUrlFrontend } from '../utils/BasePath';

const AppMenu = () => {
  const model: AppMenuItem[] = [
    {
      label: 'Dashboards',
      items: [
        // {
        //   label: 'My Vendor Data',
        //   to: `/`,
        // },
        {
          label: 'Request for Quotations',
          to: `rfq-list`,
        },
        {
          label: 'Supplier Quotations',
          to: `/`,
        },
        {
          label: 'Purchase Orders',
          to: `rfq-list`,
        },
        {
          label: 'Purchase Receipts/ My Deliveries',
          to: `/`,
        },
        {
          label: 'Purchase Invoices/ My Sales',
          to: `rfq-list`,
        },
        {
          label: 'My Payments',
          to: `/`,
        },
      ],
    },
    // {
    //   label: 'Sales',
    //   items: [
    //     {
    //       label: 'Invoice Approval Note',
    //       icon: 'pi pi-fw pi-server',
    //       items: [
    //         {
    //           label: 'All Notes',
    //           icon: 'pi pi-fw pi-id-card',
    //           to: `${baseUrlFrontend}/sales/invoice-approval-note/all`,
    //         },
    //         {
    //           label: 'New Notes',
    //           icon: 'pi pi-fw pi-plus-circle',
    //           to: `${baseUrlFrontend}/sales/invoice-approval-note/new`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: 'Calculator',
    //   items: [
    //     {
    //       label: 'Lease Dashboard',
    //       icon: 'pi pi-fw pi-calculator',
    //       items: [
    //         {
    //           label: 'All Devices',
    //           icon: 'pi pi-fw pi-id-card',
    //           to: `${baseUrlFrontend}/calculator/lease-calculator/all`,
    //         },
    //         {
    //           label: 'New Device',
    //           icon: 'pi pi-fw pi-plus-circle',
    //           to: `${baseUrlFrontend}/calculator/lease-calculator/new`,
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   label: 'Procurement',
    //   items: [
    //     {
    //       label: 'Material Request',
    //       icon: 'pi pi-fw pi-truck',
    //       to: `${baseUrlFrontend}/procurement/material-request`,
    //     },
    //     {
    //       label: 'RFQ',
    //       icon: 'pi pi-fw pi-tablet',
    //       to: `${baseUrlFrontend}/procurement/rfq`,
    //     },
    //     {
    //       label: 'Supplier',
    //       icon: 'pi pi-fw pi-user',
    //       to: `${baseUrlFrontend}/procurement/supplier`,
    //       items: [
    //         {
    //           label: 'All Suplier',
    //           icon: 'pi pi-fw pi-id-card',
    //           to: `all`,
    //         },
    //         {
    //           label: 'New Supplier',
    //           icon: 'pi pi-fw pi-plus-circle',
    //           to: `new`,
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Purchase Order',
    //       icon: 'pi pi-fw pi-cart-plus',
    //       to: `${baseUrlFrontend}/procurement/purchase-order`,
    //     },
    //     {
    //       label: 'Purchase Receipt',
    //       icon: 'pi pi-fw pi-money-bill',
    //       to: `${baseUrlFrontend}/procurement/purchase-receipt`,
    //     },
    //     {
    //       label: 'Purchase Invoice',
    //       icon: 'pi pi-print',
    //       to: `${baseUrlFrontend}/procurement/purchase-invoice`,
    //     },
    //   ],
    // },
    // {
    //   label: 'Finance',
    //   items: [
    //     {
    //       label: 'Payment Entry',
    //       icon: 'pi pi-fw pi-wallet',
    //       to: `${baseUrlFrontend}/payment-entry`,
    //     },
    //   ],
    // },
  ];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? (
            <AppMenuitem item={item} root={true} index={i} key={item.label} />
          ) : (
            <li className="menu-separator"></li>
          );
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
