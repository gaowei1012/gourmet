import {
    get_shop_success,
    get_shop_fail,
    get_address_fail,
    get_address_success,
    add_order_cat_fail,
    add_order_cat_success
} from './actions'

function onShopTypeAction(state = {}, action) {
    switch(action.type) {
        case get_shop_success:
            return {
                ...state,
                item: action.item
            }
        case get_shop_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onAddressAction(state = {}, action) {
    switch(action.type) {
        case get_address_success:
            return {
                ...state,
                item: action.item
            }
        case get_address_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

function onAddOrderCatAction(state = {}, action) {
    switch(action.type) {
        case add_order_cat_success:
            return {
                ...state,
                item: action.item
            }
        case add_order_cat_fail:
            return {
                ...state
            }
        default:
            return state
    }
}

export {
    onShopTypeAction,
    onAddressAction,
    onAddOrderCatAction,
}