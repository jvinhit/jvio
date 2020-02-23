import { put, call, fork, take } from 'redux-saga/effects';
import { ActionTypes } from './const';
import { getOrderListSuccess, getOrderListFail } from './action';
import API from '../../services';

const endPoint = 'jvinhit/react-simple/master/db.json';

const getOrderList = params => {
    const { page = 0, pageSize = 0 } = params;
    return API.Get(endPoint)
        .then(resp => resp.json())
        .then(resp => {
            if (page && pageSize) {
                return { data: resp.slice((page - 1) * pageSize, page * pageSize) };
            }
            return { data: resp };
        })
        .catch(err => ({ err }));
};
function* getOrderlist() {
    while (true) {
        const { params } = yield take(ActionTypes.GET_ORDER_LIST);
        const { data, err } = yield call(getOrderList, params);
        if (data && !err) {
            yield put(getOrderListSuccess(data));
        } else {
            yield put(getOrderListFail(err));
        }
    }
}
export default function* root() {
    yield fork(getOrderlist);
}
