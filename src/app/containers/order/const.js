export const ActionTypes = {
    GET_ORDER_LIST: 'GET_ORDER_LIST',
    GET_ORDER_LIST_SUCCESS: 'GET_ORDER_LIST_SUCCESS',
    GET_ORDER_LIST_FAIL: 'GET_ORDER_LIST_FAIL',
};
export const Columns = [
    { name: 'name', label: 'Name' },
    { name: 'quanity', label: 'Quanity' },
    { name: 'order_date', label: 'Date order' },
    { name: 'order_id', label: 'Order ID' },
    { name: 'total_amount', label: 'Total' },
];
export const FilterList = [
    { key: 'confirm', label: 'Confirm' },
    { key: 'process', label: 'Process' },
    { key: 'waiting', label: 'Waiting' },
    { key: 'payment', label: 'Payment' },
    { key: 'success', label: 'Success' },
];
export const Label = {
    count_filter: count => `You have ${count} orders, waiting for your confirm!`,
};
