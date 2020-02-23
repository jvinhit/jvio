import { combineReducers } from 'redux';
import orderReducer from '../containers/order/reducer';

const rootReducer = {
    orderReducer,
};

export default () => combineReducers({ ...rootReducer });
