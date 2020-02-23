import { all, fork } from 'redux-saga/effects';
import orderSaga from '../containers/order/saga';

export default function* rootSaga() {
    yield all([fork(orderSaga)]);
}
