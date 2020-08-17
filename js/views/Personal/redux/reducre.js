import {
    get_register_success,
    get_register_fail,
    get_recommen_fail,
    get_recommen_success
} from './action'
import {initState} from '../../../utils/asyncActionHandle'

function onRegisterAction(state = initState, action) {
    switch(action.type) {
        case get_register_success:
            return {
                ...state,
                item: action.item
            }
        case get_register_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onRecommenAction(state = {}, action) {
    switch(action.type) {
        case get_recommen_success:
            return {
                ...state,
                item: action.item
            }
        case get_recommen_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

export {
    onRecommenAction,
    onRegisterAction,
}