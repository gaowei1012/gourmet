import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native'
import {px2dp} from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import {GoBack} from '../../utils/GoBack'

class ConfirmOrder extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='确认订单'
                color='#fff'
                statusBar={StatusBar}
                style={{ backgroundColor: "#E8785F" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                <Text>订单</Text>
            </SafeAreaView>
        )
    }
}

export default ConfirmOrder

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})