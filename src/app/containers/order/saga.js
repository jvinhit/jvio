import { put, call, fork, take, delay } from 'redux-saga/effects';
import { ActionTypes } from './const';
import { getOrderListSuccess, getOrderListFail } from './action';
import API from '../../services';

const endPoint = 'jvinhit/react-simple/master/db.json';

const getOrderList = params => {
    const { page = 0, pageSize = 0, status = '' } = params;
    return API.Get(endPoint)
        .then(resp => resp.json())
        .then(resp => {
            if (page && pageSize) {
                if (!status) {
                    return { data: resp.slice((page - 1) * pageSize, page * pageSize), totalItem: resp.length };
                }
                const respFilter = resp.filter(item => item.status.toLowerCase() === status.toLowerCase());
                return { data: respFilter.slice((page - 1) * pageSize, page * pageSize), totalItem: respFilter.length };
            }
            return { data: resp };
        })
        .catch(err => ({ err }));
};
function* getOrderlist() {
    while (true) {
        const { params } = yield take(ActionTypes.GET_ORDER_LIST);
        const { data, err, totalItem } = yield call(getOrderList, params);
        yield delay(1000);
        if (data && !err) {
            yield put(getOrderListSuccess({ data, totalItem }));
        } else {
            yield put(getOrderListFail(err));
        }
    }
}
export default function* root() {
    yield fork(getOrderlist);
}
