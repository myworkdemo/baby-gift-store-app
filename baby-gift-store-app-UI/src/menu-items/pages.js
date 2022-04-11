// assets
import { IconKey, IconCirclePlus, IconCaretRight } from '@tabler/icons';

// constant
const icons = {
    IconKey,
    IconCirclePlus,
    IconCaretRight
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    type: 'group',
    children: [
        {
            id: 'add-stock',
            title: 'Purchase',
            type: 'collapse',
            icon: icons.IconCirclePlus,

            children: [
                {
                    id: 'add',
                    title: 'Add Purchase',
                    type: 'item',
                    icon: icons.IconCaretRight,
                    url: '/purchase-product/add'
                },
                {
                    id: 'list',
                    title: 'Purchase Records',
                    type: 'item',
                    icon: icons.IconCaretRight,
                    url: '/purchase-product/list'
                }
            ]
        },
        {
            id: 'sale-stock',
            title: 'Sale',
            type: 'collapse',
            icon: icons.IconCirclePlus,

            children: [
                {
                    id: 'sale',
                    title: 'Add Sale',
                    type: 'item',
                    icon: icons.IconCaretRight,
                    url: '/sale-product/add'
                },
                {
                    id: 'list',
                    title: 'Sale Records',
                    type: 'item',
                    icon: icons.IconCaretRight,
                    url: '/sale-product/list'
                }
            ]
        }
    ]
};

export default pages;
