import {request} from '../../../expand/request'
import {handleData, handleErrorData} from '../../../utils/asyncActionHandle'

export const get_register_success = 'get_register_success';
export const get_register_fail = 'get_register_fail';

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

export default {
    getRegister
}
