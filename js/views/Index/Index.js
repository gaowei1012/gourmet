import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { px2dp, height } from '../../utils/px2dp'
import TabBar from '../../components/TabBar'
import CheckBox from '../../components/CheckBox'
import NavigationUtil from '../../utils/NavigationUtil'
import actions from './redux/actions'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { Loading } from '../../utils/Loading'

import OrderCat from '../../assets/svg/order.svg'
import Cat from '../../assets/svg/cat.svg'

const { shopType } = constant

class Index extends React.PureComponent {
    state = {
        menu: [{ id: 1, name: '今日推荐', type: 1 }, { id: 2, name: '附近好友', type: 2 }, { id: 3, name: '来点新鲜的', type: 3 }, { id: 4, name: '省点吃吧', type: 4 }, { id: 5, name: '欢迎再来', type: 5 }],
        index: 1,
        url: 'https://iph.href.lu/80x80?fg=666666&bg=cccccc',
        checkbox: false,
        orderNum: 0,
        price: null,
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
    handleAddCat = (id) => {
        this.setState({ orderNum: this.state.orderNum + 1 })
    }

    // 商品列表
    _renderItem(data) {
        console.log(data)
        let shop = data.item
        
    }

    // 内容
    _content = () => {
        const shop = this.props.shop.item
        if (!shop) {
            return Loading.show('推荐中...')
        } else {
            Loading.hidden()
            return (
                <ScrollView>
                    {shop.map(s => {
                        return <View key={s.id} style={styles.shopWrap}>
                        <View style={styles.shopItemBox}>
                            <Image
                                source={{ uri: s.shop_url }}
                                style={styles.shopImage}
                            />
                            <View style={styles.contentBox}>
                                <View style={styles.shopConTopBox}>
                                    <Text style={styles.shop_name}>{s.shop_name}</Text>
                                    <Text style={styles.shop_detail}>{s.shop_detail}</Text>
                                </View>
                                <View style={styles.shopConBtnBox}>
                                    <Text style={styles.price}>￥{s.price}</Text>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => this.handleAddCat(s.id)}
                                        style={styles.catBox}
                                    >
                                        <Cat width='18' height='18' />
                                        {/* <Text>加入购物车</Text> */}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    })}
                </ScrollView>
            )
        }
    }

    // 添加购物车
    _goToPage = () => {
        let { orderNum } = this.state

        Loading.show('加载中...')
        setTimeout(() => {
            Loading.hidden()
            NavigationUtil.goPage({ orderNum }, 'ConfirmOrder')
        }, 200)
    }

    render() {
        let { orderNum } = this.state

        const order = (
            <TouchableOpacity
                onPress={this._goToPage}
                style={styles.orderBox}>
                <OrderCat width='24' height='24' />
                {orderNum === 0 ? null : <View style={styles.orderNum}>
                    <Text style={styles.orderText}>{orderNum}</Text>
                </View>}
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
        bottom: px2dp(60),
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
    },
    orderText: {
        color: '#333'
    },

    // 内容列表
    shopWrap: {
        height: height,
    },
    shopItemBox: {
        marginVertical: px2dp(15),
        width: px2dp(340),
        alignSelf: 'center',
        // padding: px2dp(8),
        paddingVertical: px2dp(10),
        paddingHorizontal: px2dp(6),
        borderRadius: px2dp(3),
        backgroundColor: '#F6F7F6',
        flexDirection: 'row'
    },
    shopImage: {
        width: px2dp(80),
        height: px2dp(80),
        borderRadius: px2dp(3)
    },
    contentBox: {
        flexDirection: 'column',
        marginLeft: px2dp(3),
    },
    shopConTopBox: {
        flexDirection: 'column',
    },
    shopConBtnBox: {
        width: px2dp(240),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: px2dp(6)
    },
    catBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shop_name: {
        color: '#333',
        fontSize: px2dp(16),
        fontWeight: '500',
        marginVertical: px2dp(3)
    },
    shop_detail: {
        marginVertical: px2dp(8),
        color: '#333',
        fontSize: px2dp(14),
    },
    price: {
        color: '#333',
        fontSize: px2dp(14),
        fontWeight: '400'
    }
})
