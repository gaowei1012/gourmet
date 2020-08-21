import { request } from '../../../expand/request'
import { handleData, handleErrorData } from '../../../utils/asyncActionHandle'

export const get_order_success = 'get_order_success'
export const get_order_fail = 'get_order_fail'
export const update_order_success = 'update_order_success'
export const update_order_fail = 'update_order_fail'

function getOrder(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                let data = ret
                handleData(dispatch, data, get_order_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_order_fail)
            })
    }
}

function updateOrderStatus(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(ret => {
                let data = ret
                handleData(dispatch, data, update_order_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, update_order_fail)
            })
    }
}

export default {
    getOrder,
    updateOrderStatus,
}
