import {
    get_register_success,
    get_register_fail,
    get_recommen_fail,
    get_recommen_success,
    get_login_fail,
    get_login_success,
} from './action'


function onLoginAction(state = {}, action) {
    switch(action.type) {
        case get_login_success:
            return {
                ...state,
                item: action.item
            }
        case get_login_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onRegisterAction(state = {}, action) {
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
    onLoginAction,
}