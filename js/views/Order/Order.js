import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width, height } from '../../utils/px2dp'
import { Button } from 'react-native-elements'
import List from '../../components/List'

class Order extends React.PureComponent {
    state = {
        menu: [
            { id: 1, type: 1, text: '未完成订单' },
            { id: 2, type: 2, text: '已完成订单' }
        ],
        type: 1,
    }
    swtchTab = (type) => {
        this.setState({ type })
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
                        <Text style={[styles.menuText, this.state.type === m.type ? styles.acMenuText : null]}>{m.text}</Text>
                        <View style={[styles.line, this.state.type === m.type ? styles.AcLine : null]} />
                    </TouchableOpacity>
                ))}
            </View>
        );
        const _content = (
            <>
                {this.state.type === 1 ? <View>
                    <View style={styles.noOrderBox}>
                        <View style={styles.l} />
                        <Text style={styles.desc}>预计送达时间12:30</Text>
                        <Text style={styles.desc}>由店家配送</Text>
                        <Button
                            title='取消订单'
                            style={styles.btn}
                            onPress={this._comfiom}
                        />
                    </View>
                </View> : null}
                {this.state.type === 2 ? <View style={styles.carryBox}>
                    <View style={styles.carryTop}>
                        <View style={styles.carryLine} />
                        <Text style={styles.carryTitle}>等待评价</Text>
                    </View>
                    <Text style={styles.pingDesc}>评价描述</Text>
                    <ScrollView
                        style={{height: '100%'}}
                        horizontal={false}
                    >
                        <List/>
                    </ScrollView>
                </View> : null}
            </>
        )
        return <SafeAreaView style={styles.container}>
            {renderTopBar}
            {_menu}
            {_content}
        </SafeAreaView>
    }
}

export default Order

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee'
    },
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        justifyContent: 'space-between'
    },
    menuItem: {
        width: px2dp(375 / 2),
        alignItems: 'center',
        backgroundColor: '#ddd',
        paddingVertical: px2dp(8)
    },
    menuText: {
        color: '#000',
        fontSize: px2dp(14)
    },
    acMenuText: {
        color: 'red'
    },
    line: {
        marginTop: px2dp(6),
        width: px2dp(32),
        height: px2dp(2),
        borderRadius: px2dp(4)
    },
    AcLine: {
        backgroundColor: 'red'
    },
    noOrderBox: {
        marginTop: px2dp(490),
        width: px2dp(345),
        alignSelf: 'center',
        height: px2dp(100),
        backgroundColor: '#fff',
        borderRadius: px2dp(6)
    },
    l: {
        marginTop: px2dp(8),
        width: px2dp(40),
        height: px2dp(2),
        borderRadius: px2dp(6),
        backgroundColor: 'red',
        alignSelf: 'center'
    },
    btn: {
        width: px2dp(312),
        alignSelf: 'center',
    },
    desc: {
        marginVertical: px2dp(5),
        paddingHorizontal: px2dp(10)
    },
    carryBox: {
        width: px2dp(345),
        alignSelf: 'center',
    },
    carryTop: {
        marginVertical: px2dp(8),
        marginHorizontal: px2dp(3),
        flexDirection: 'row',
        alignItems: 'center'
    },
    carryLine: {
        height: px2dp(20),
        width: px2dp(2),
        backgroundColor: 'red',
        borderRadius: px2dp(6)
    },
    carryTitle: {
        fontSize: px2dp(20),
        marginLeft: px2dp(6)
    },
    pingDesc: {
        fontSize: px2dp(12),
        color: '#333',
        paddingHorizontal: px2dp(10),
        marginVertical: px2dp(6)
    }
})
