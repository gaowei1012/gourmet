import {request} from '../../../expand/request'
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle'

export const get_shop_success = 'get_shop_success'
export const get_shop_fail = 'get_shop_fail'
export const get_address_success = 'get_address_success'
export const get_address_fail = 'get_address_fail'

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
}
