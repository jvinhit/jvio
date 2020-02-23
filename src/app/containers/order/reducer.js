import { ActionTypes } from './const';

const initState = {
    orderList: [],
    isLoading: false,
    err: null,
};

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ORDER_LIST:
            return { ...state, isLoading: true };
        case ActionTypes.GET_ORDER_LIST_SUCCESS:
            return { ...state, isLoading: false, orderList: action.payload };
        case ActionTypes.GET_ORDER_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err };
        default:
            return state;
    }
};
export default orderReducer;
