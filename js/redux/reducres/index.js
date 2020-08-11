import {combineReducers} from 'redux'
import {rootCom, RootNavigation} from '../../navigation/AppNavigation'
import theme from './theme/index'
import {registerAction} from '../../views/Personal/redux/reducre'

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
    register: registerAction,
})

export default root
