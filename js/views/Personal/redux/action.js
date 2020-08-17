import {request} from '../../../expand/request'
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle'

export const get_register_success = 'get_register_success';
export const get_register_fail = 'get_register_fail';
export const get_recommen_success = 'get_recommen_success';
export const get_recommen_fail = 'get_recommen_fail';
export const get_login_success = 'get_login_success';
export const get_login_fail = 'get_login_fail'

function getLogin(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res
                handleData(dispatch, data, get_login_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_login_fail)
            })
    }
}

function getRegister(url, method, data) {
    return dispatch => {
        request(url, method, data)
            .then(res => {
                const data = res
                handleData(dispatch, data, get_register_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_register_fail)
            })
    }
}

function getRecommen(url, method) {
    return dispatch => {
        request(url, method)
            .then(res => {
                const data = res.data
                handleData(dispatch, data, get_recommen_success)
            })
            .catch(err => {
                handleErrorData(dispatch, err, get_recommen_fail)
            })
    }
}

export default {
    getRegister,
    getRecommen,
    getLogin,
}
