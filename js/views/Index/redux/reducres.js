import {
    get_shop_success,
    get_shop_fail,
    get_address_fail,
    get_address_success
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

export {
    onShopTypeAction,
    onAddressAction
}