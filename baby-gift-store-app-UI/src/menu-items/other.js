// assets
import { IconBrandChrome, IconHelp, IconFileReport, IconReport } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp, IconFileReport, IconReport };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'activites',
    title: 'Activites',
    type: 'group',
    children: [
        {
            id: 'sale',
            title: 'Sale',
            type: 'item',
            url: '/sale-product',
            icon: icons.IconBrandChrome,
            breadcrumbs: false
        },
        {
            id: 'reports',
            title: 'All Reports',
            type: 'collapse',
            icon: icons.IconFileReport,

            children: [
                {
                    id: 'purchase-report',
                    title: 'Purchase Report',
                    type: 'item',
                    icon: icons.IconReport,
                    url: '/sample-page'
                },
                {
                    id: 'sale-report',
                    title: 'Sale Report',
                    type: 'item',
                    icon: icons.IconReport,
                    url: '/sample-page'
                }
            ]
        }
    ]
};

export default other;
