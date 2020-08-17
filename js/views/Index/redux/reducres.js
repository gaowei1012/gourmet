import {
    get_shop_success,
    get_shop_fail,
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

export {
    onShopTypeAction,
}