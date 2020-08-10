import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'

class Order extends React.PureComponent {
    state = {
        menu: [
            { id: 1, type: 1, text: '未完成' },
            { id: 2, type: 2, text: '已完成' }
        ]
    }
    swtchTab(type) {
        console.log('type', type)
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTopBar = (
            <TopNavigationBar
                title='订单'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
            // rightButton={_addLand}
            />
        );
        const _menu = (
            <View style={styles.menuBox}>
                {this.state.menu.map(m => (
                    <TouchableOpacity
                        style={styles.menuItem}
                        key={m.id}
                        activeOpacity={1}
                        onPress={() => this.swtchTab(m.type)}
                    >
                        <Text style={styles.menuText}>{m.text}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        )
        return <SafeAreaView style={{flex: 1}}>
            {renderTopBar}
            {_menu}
        </SafeAreaView>
    }
}

export default Order

const styles = StyleSheet.create({
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        justifyContent: 'space-between'
    },
    menuItem: {
        width: px2dp(375/2),
        alignItems: 'center',
        backgroundColor: '#ccc',
        paddingVertical: px2dp(10)
    },
    menuText: {
        color: '#fff'
    }
})
