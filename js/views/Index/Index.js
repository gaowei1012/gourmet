import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import { px2dp, height } from '../../utils/px2dp'
import TabBar from '../../components/TabBar'
import CheckBox from '../../components/CheckBox'
import NavigationUtil from '../../utils/NavigationUtil'

import OrderCat from '../../assets/svg/order.svg'

class Index extends React.PureComponent {
    state = {
        menu: [{ id: 1, name: '今日推荐' }, { id: 2, name: '附近好友' }, { id: 3, name: '来点新鲜的' }, { id: 4, name: '省点吃吧' }],
        index: 1,
        url: 'https://iph.href.lu/80x80?fg=666666&bg=cccccc',
        checkbox: false
    }
    onChangeTab = (index, id, type) => {
        // TODO
    }
    onCheckBox=()=> {
        this.setState({checkbox: !this.state.checkbox})
    }
    render() {
        const _content = (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
            </ScrollView>
        );
        const _step = (
            <View style={styles.stepBox}>
               <View style={styles.checkBox}>
                    <CheckBox
                        onCheckBox={this.onCheckBox}
                        isCheckBox={this.state.checkbox}
                    />
                    <Text style={styles.name}>西红柿炒鸡蛋</Text>
               </View>
               <View style={styles.stepCont}>
                   <Text>今日已有300人下单了</Text>
                   <TouchableOpacity
                        style={styles.stepBtn}
                   >
                       <Text style={styles.btnText}>￥12.00 来一份</Text>
                   </TouchableOpacity>
               </View>
            </View>
        );
        const order = (
            <TouchableOpacity
                onPress={() => {
                    NavigationUtil.goPage({}, 'ConfirmOrder')
                }}
                style={styles.orderBox}>
                <OrderCat width='24' height='24'/>
                <View style={styles.orderNum}>
                    <Text>1</Text>
                </View>
            </TouchableOpacity>
        );
        return (
            <SafeAreaView style={styles.landContainer}>
                <TabBar
                    ref={e => this.tabs = e}
                    index={this.state.index}
                    data={this.state.menu}
                    onChange={(index, id, type) => this.onChangeTab(index, id, type)}
                />
                {_content}
                {_step}
                {order}
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    scrollItem: {
        width: px2dp(300),
        height: px2dp(300),
        borderRadius: px2dp(8),
        marginHorizontal: px2dp(16),
        marginVertical: px2dp(26)
    },
    stepBox: {
        width: px2dp(335),
        alignSelf: 'center'
    },
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkIcon: {
        width: px2dp(12),
        height: px2dp(12),
        borderRadius: px2dp(6),
        borderWidth: px2dp(1),
        borderColor: '#333'
    },
    checkName: {
        paddingLeft: px2dp(6),
        fontSize: px2dp(14)
    },
    name: {
        marginLeft: px2dp(8),
        color: '#000',
        fontSize: px2dp(14)
    },
    orderBox: {
        position: 'absolute',
        bottom: px2dp(0),
        right: 0,
        width: px2dp(60),
        height: px2dp(36),
        backgroundColor: '#E8785F',
        borderTopLeftRadius: px2dp(36/2),
        borderBottomLeftRadius: px2dp(36/2),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    orderNum: {
        width: px2dp(12),
        height: px2dp(12),
        borderRadius: px2dp(6),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: px2dp(2),
        right: px2dp(10)
    },
    stepCont: {
        marginVertical: px2dp(100),
        alignItems: 'center'
    },
    stepBtn: {
        width: px2dp(120),
        height: px2dp(36),
        marginTop: px2dp(10),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8785F',
        borderRadius: px2dp(36/2)
    },
    btnText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    }
})
