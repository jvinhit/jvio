import { ActionTypes } from './const';

export const getOrderList = params => ({
    type: ActionTypes.GET_ORDER_LIST,
    params,
});
export const getOrderListSuccess = data => ({
    type: ActionTypes.GET_ORDER_LIST_SUCCESS,
    payload: data,
});
export const getOrderListFail = err => ({
    type: ActionTypes.GET_ORDER_LIST_FAIL,
    err,
});
