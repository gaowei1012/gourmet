import {combineReducers} from 'redux'
import {rootCom, RootNavigation} from '../../navigation/AppNavigation'
import theme from './theme/index'
import {onRecommenAction, onRegisterAction} from '../../views/Personal/redux/reducre'
import {onShopTypeAction, onAddressAction} from '../../views/Index/redux/reducres'

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
})

export default root
