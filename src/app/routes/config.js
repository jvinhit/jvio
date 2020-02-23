import React, { lazy } from 'react';
import LazyLoad from '../components/_lazy';

const OrderCpm = lazy(() => import('../containers/order'));
const LazyOrderCpm = props => <LazyLoad component={OrderCpm} {...props} />;

const routerConfig = {
    home: {
        key: 'key_home',
        name: 'Home',
        path: '/',
        component: LazyOrderCpm,
        auth: true,
    },
    order: {
        key: 'key_order',
        name: 'Order',
        path: '/order',
        component: LazyOrderCpm,
        auth: true,
    },
    warehouse: {
        key: 'key_warehouse',
        name: 'Warehouse',
        path: '/warehouse',
        component: LazyOrderCpm,
        auth: true,
    },
    customer: {
        key: 'key_customer',
        name: 'Customer',
        path: '/customer',
        component: LazyOrderCpm,
        auth: true,
    },
    system: {
        key: 'key_system',
        name: 'System',
        path: '/system',
        component: LazyOrderCpm,
        auth: true,
    },
    notification: {
        key: 'key_notification',
        name: 'Notification',
        path: '/notification',
        component: LazyOrderCpm,
        auth: true,
    },
};

export default routerConfig;
