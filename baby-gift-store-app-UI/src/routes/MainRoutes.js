import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import PurchaseProduct from 'custom-component/purchase/PurchaseProduct';
import AllPurchaseProductRecords from '../custom-component/purchase/AllPurchaseProductRecords';
import AllSaleProductRecords from 'custom-component/sale/AllSaleProductRecords';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sale product routing
const SaleProduct = Loadable(lazy(() => import('custom-component/sale/SaleProduct')));

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/purchase-product/add',
            element: <PurchaseProduct />
        },
        {
            path: '/purchase-product/list',
            element: <AllPurchaseProductRecords />
        },
        {
            path: '/sale-product/add',
            element: <SaleProduct />
        },
        {
            path: '/sale-product/list',
            element: <AllSaleProductRecords />
        }
    ]
};

export default MainRoutes;
