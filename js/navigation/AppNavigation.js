import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { connect } from 'react-redux';
import {
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
} from 'react-navigation-redux-helpers';

import Welcom from '../views/Welcom/Welcom';
import Home from '../views/Home/Home';
import Index from '../views/Index/Index';
import Order from '../views/Order/Order';
import Personal from '../views/Personal/Personal';
import Login from '../views/Personal/Login';
import ConfirmOrder from '../views/Index/ConfirmOrder'
import Address from '../views/Personal/Address'
import Register from '../views/Personal/Register'

export const rootCom = 'Init';

const InitNavigator = createStackNavigator({
    Welcom: {
        screen: Welcom,
        navigationOptions: {
            header: null,
        },
    },
});

const MainNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    Index: {
        screen: Index,
        navigationOptions: {
            header: null,
        },
    },
    Personal: {
        screen: Personal,
        navigationOptions: {
            header: null
        }
    },
    Order: {
        screen: Order,
        navigationOptions: {
            header: null
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    ConfirmOrder: {
        screen: ConfirmOrder,
        navigationOptions: {
            header: null
        }
    },
    Address: {
        screen: Address,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    }
});

export const RootNavigation = createAppContainer(
    createSwitchNavigator(
        {
            Init: InitNavigator,
            Main: MainNavigator,
        },
        {
            navigationOptions: {
                header: null,
            },
        },
    ),
);

export const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);


const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);