import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity, ViewBase } from 'react-native'
import { px2dp, height } from '../../utils/px2dp'
import TabBar from '../../components/TabBar'
import CheckBox from '../../components/CheckBox'
import NavigationUtil from '../../utils/NavigationUtil'
import actions from './redux/actions'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { Toast } from '../../utils/Toast'

import OrderCat from '../../assets/svg/order.svg'

const { shopType } = constant

class Index extends React.PureComponent {
    state = {
        menu: [{ id: 1, name: '今日推荐', type: 1 }, { id: 2, name: '附近好友', type: 2 }, { id: 3, name: '来点新鲜的', type: 3 }, { id: 4, name: '省点吃吧', type: 4 }, { id: 5, name: '欢迎再来', type: 5 }],
        index: 1,
        url: 'https://iph.href.lu/80x80?fg=666666&bg=cccccc',
        checkbox: false
    }

    componentDidMount() {
        const { getShopType } = this.props
        const data = {
            "type": 1
        }
        getShopType(shopType, 'POST', data)
    }

    onChangeTab = (index, type) => {
        const { getShopType } = this.props
        const data = {
            "type": type
        }
        getShopType(shopType, 'POST', data)
    }
    onCheckBox = () => {
        this.setState({ checkbox: !this.state.checkbox })
    }
    // 添加购物车
    _addCat = () => {

    }

    _content = () => {
        const shop = this.props.shop.item
        console.log('shop', shop)
        if (!shop) {
            return <View />
        }
        return <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {shop.map(s => (
                <Image
                    key={s.id}
                    style={styles.scrollItem}
                    source={{ uri: s.shop_url }}
                />
            ))}
        </ScrollView>
    }

    render() {

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
                        activeOpacity={1}
                        onPress={this._addCat}
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
                <OrderCat width='24' height='24' />
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
                    onChange={(index, type) => this.onChangeTab(index, type)}
                />
                {this._content()}
                {_step}
                {order}
            </SafeAreaView>
        )
    }
}

export default connect(({ shop }) => ({ shop }), dispatch => ({
    getShopType(url, method, data) {
        dispatch(actions.getShopType(url, method, data))
    }
}))(Index)

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    scrollItem: {
        width: px2dp(335),
        height: px2dp(300),
        borderRadius: px2dp(8),
        marginHorizontal: px2dp(16),
        marginVertical: px2dp(26),
        alignSelf: 'center'
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
        borderTopLeftRadius: px2dp(36 / 2),
        borderBottomLeftRadius: px2dp(36 / 2),
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
        borderRadius: px2dp(36 / 2)
    },
    btnText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    }
})
