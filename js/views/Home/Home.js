import React from 'react'
import {BackHandler, ToastAndroid} from 'react-native'
import NavigationUtil from '../../utils/NavigationUtil'
import DynamicTabNavigator from '../../navigation/DynamicTabNavigator'

export default class Home extends React.PureComponent {
    componentDidMount() {
        BackHandler.addEventListener(
            'hardwareBackPress',
            this.onBackButtonPressAndroid
        )
    }
    // 对安卓返回物理键处理
    onBackButtonPressAndroid=()=> {
        if (this.props.navigation.isFocused()) {
            if (this.lastBackPressed && this.lastBackPressed + 2000) {
                return false;
            }
            this.lastBackPressed = Date.now()
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
            return true;
        }
    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    }

    render() {
        // 保存 navigation
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>
    }
}
