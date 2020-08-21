import { request } from '../../../expand/request'
import { handleData, handleErrorData } from '../../../utils/asyncActionHandle'

export const get_shop_success = 'get_shop_success'
export const get_shop_fail = 'get_shop_fail'
export const get_address_success = 'get_address_success'
export const get_address_fail = 'get_address_fail'
export const add_order_cat_success = 'add_order_cat_success'
export const add_order_cat_fail = 'add_order_cat_fail'
export const get_order_success = 'get_order_success'
export const get_order_fail = 'get_order_fail'

function getOrder(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res
                handleData(dispatch, data, get_order_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_order_fail)
            })
    }
}

function addOrderCat(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res
                handleData(dispatch, data, add_order_cat_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, add_order_cat_fail)
            })
    }
}

function getShopType(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res.message
                handleData(dispatch, data, get_shop_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_shop_fail)
            })
    }
}

function getAddress(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res.data
                handleData(dispatch, data, get_address_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_address_fail)
            })
    }
}

export default {
    getShopType,
    getAddress,
    addOrderCat,
    getOrder,
}
