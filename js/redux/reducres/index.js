import { combineReducers } from 'redux'
import { rootCom, RootNavigation } from '../../navigation/AppNavigation'
import theme from './theme/index'
import { onRecommenAction, onRegisterAction, onLoginAction, onAddAddressAction } from '../../views/Personal/redux/reducre'
import { onShopTypeAction, onAddressAction, onAddOrderCatAction } from '../../views/Index/redux/reducres'
import { onGetOrderAction, onUpdateOrderStatusAction, onfindOrderStatusAction } from '../../views/Order/redux/reducres'

const navState = RootNavigation.router.getStateForAction(
    RootNavigation.router.getActionForPathAndParams(rootCom),
);

const navReducer = (state = navState, action) => {
    const nextState = RootNavigation.router.getStateForAction(action, state);
    return nextState || state
}

const root = combineReducers({
    nav: navReducer,
    theme: theme,
    register: onRegisterAction,
    shop: onShopTypeAction,
    address: onAddressAction,
    recommen: onRecommenAction,
    login: onLoginAction,
    orderCat: onAddOrderCatAction,
    addAddress: onAddAddressAction,
    getOrder: onGetOrderAction,
    updateOrderStatus: onUpdateOrderStatusAction,
    findOrderStatus: onfindOrderStatusAction,
})

export default root
