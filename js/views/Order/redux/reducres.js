import {
    get_order_fail,
    get_order_success,
    update_order_fail,
    update_order_success,
    get_status_orders_fail,
    get_status_orders_success
} from './actions'

export function onGetOrderAction(state = {}, action) {
    switch(action.type) {
        case get_order_success:
            return {
                ...state,
                item: action.item
            }
        case get_order_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

export function onUpdateOrderStatusAction(state = {}, action) {
    switch(action.type) {
        case update_order_success:
            return {
                ...state,
                item: action.item
            }
        case update_order_fail:
            return {
                ...state
            }
        default:
            return state
    }
}


export function onfindOrderStatusAction(state = {}, action) {
    switch(action.type) {
        case get_status_orders_success:
            return {
                ...state,
                item: action.item
            }
        case get_status_orders_fail:
            return {
                ...state
            }
        default:
            return state
    }
}