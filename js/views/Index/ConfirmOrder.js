import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, Platform } from 'react-native'
import { px2dp, width } from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'
import CheckBox from '../../components/CheckBox'
import OrderItem from '../../components/OrderItem'
import actions from './redux/actions'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { Loading } from '../../utils/Loading'
import { Toast } from '../../utils/Toast'
import NavigationUtil from '../../utils/NavigationUtil'

const { address, addOnesOrder } = constant

class ConfirmOrder extends React.PureComponent {
    state = {
        isCheckBox: false,
        priceNum: 1,
        checkBox: false,
        remarks: null, // 订单备注
        deliveryTime: '12:30',
        price: '12', // 商品价格默认
        latitude: 39.887923,
        longitude: 116.368911,
        shop_name: null,
        shop_detail: null,
        shop_url: null,
        price: null,
        id: null,
    }
    componentDidMount() {
        let { orderNum, shop_detail, shop_name, shop_url, price, id } = this.props.navigation.state.params
        // 父组件传过来的值
        this.setState({
            shop_name: shop_name,
            shop_detail: shop_detail,
            shop_url: shop_url,
            price: price,
            id: id,
            priceNum: orderNum
        })
        this.getAddress()
    }

    // 获取订单地址
    getAddress() {
        const { getAddress } = this.props
        const data = {
            "username": '执念'
        }
        getAddress(address, 'POST', data)
    }

    // 全选
    _allSelectCheckBox = () => {
        this.setState({
            isCheckBox: !this.state.isCheckBox,
            checkBox: !this.state.checkBox
        })
    }

    // 订单备注
    orderBeiZhu = (remarks) => {
        this.setState({ remarks })
    }

    // 减少商品数量
    _less = () => {
        this.setState({
            priceNum: this.state.priceNum - 1
        })
        // if (this.state.priceNum == 1) {
        //     Toast.showToast('最少选择一件餐食')
        // }
    }
    // 添加商品数量
    _add = () => {
        this.setState({
            priceNum: this.state.priceNum + 1
        })
    }

    /**
     * 确认支付页
     */
    _confirm = () => {
        let { priceNum, remarks, deliveryTime, checkBox, latitude, longitude } = this.state
        const { addOrderCat } = this.props
        // 通过传过来的字段，带到后台
        let data = {
            "order_title": "西红柿炒鸡蛋",
            "order_desc": "好吃不乖，经济实惠！谁卖谁受益",
            "price": "12",
            "order_url": "url",
            "price_num": priceNum,
            "remarks": "描述", // 订单备注
            "latitude": latitude, // 纬度
            "longitude": longitude, // 经度
            "status": "0", // 未完成
        }
        // 当没有选择时
        if (checkBox == true) {
            addOrderCat(addOnesOrder, 'POST', data)
            Loading.show('提交中')
            setTimeout(() => {
                // 这里只是做模拟，没有做真正的提交支付操作
                // 集成微信支付， 去微信中申请appid，添加进来 即可调取
                Loading.hidden()
                Toast.showToast('支付成功')
                // 跳转订单页面
                // NavigationUtil.goPage({}, 'Order')
            }, 300)
        } else {
            Toast.showToast('请选择你要购买的商品')
        }
    }

    _header = () => {
        const address = this.props.address.item
        if (!address) {
            // return Loading.show('获取中...')
        } else {
            // Loading.hidden()
            return (
                <>
                    {address.map(a => (
                        <View style={styles.headerBox}>
                            <View style={styles.addressBox}>
                                <Text style={styles.addressTitle}>订单配送至</Text>
                                <Text style={styles.address}>{a.address}</Text>
                                <Text style={styles.tel}>{a.tel}</Text>
                            </View>
                        </View>
                    ))}
                </>
            )
        }
    }
    render() {
        let { deliveryTime, shop_detail, shop_name, shop_url, price } = this.state
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

        const _content = (
            <View style={styles.contentBox}>
                <View style={styles.selectBox}>
                    <CheckBox
                        isCheckBox={this.state.isCheckBox}
                        onCheckBox={this._allSelectCheckBox}
                    />
                    <Text style={styles.selectText}>全选</Text>
                </View>
                <View style={styles.contentOrder}>
                    <CheckBox
                        isCheckBox={this.state.checkBox}
                        onCheckBox={() => {
                            this.setState({
                                checkBox: !this.state.checkBox
                            })
                        }}
                    />
                    {/* 这里的订单数据都是由 props 带过来的 */}
                    <OrderItem
                        title={shop_name}
                        desc={shop_detail}
                        price={price}
                        onAdd={this._add}
                        onLess={this._less}
                        priceNum={this.state.priceNum}
                        disabled={this.state.priceNum == 1 ? true : false}
                        url={shop_url}
                    />
                </View>
            </View>
        );
        const peisong = (
            <View style={styles.pingSongBox}>
                <View style={styles.songDa}>
                    <Text style={styles.timeTitle}>送达时间</Text>
                    <Text style={styles.time}>{deliveryTime}</Text>
                </View>
                <View style={styles.songDa}>
                    <Text style={styles.timeTitle}>配送服务</Text>
                    <Text style={styles.notime}>蜂鸟配送</Text>
                </View>
                <View style={styles.songDa}>
                    <Text style={styles.timeTitle}>订单备注</Text>
                    <TextInput
                        placeholder='这里可以输入内容'
                        onChangeText={this.orderBeiZhu}
                    />
                </View>
            </View>
        );
        const _fotter = (
            <View style={styles.fotterBox}>
                <View style={styles.leftBox}>
                    <Text style={styles.he}>合计</Text>
                    <Text style={styles.jia}>￥{Number(this.state.price) * this.state.priceNum}</Text>
                    <Text style={styles.line}>|</Text>
                    <Text style={styles.you}>以优惠5元</Text>
                </View>
                <TouchableOpacity
                    style={styles.ConfirmBtn}
                    onPress={this._confirm}
                    activeOpacity={1}
                >
                    <Text style={styles.ConfirmText}>确认支付</Text>
                </TouchableOpacity>
            </View>
        )
        return (
            <SafeAreaView
                style={styles.container}>
                {renderTop}
                {this._header()}
                {_content}
                {peisong}
                {_fotter}
            </SafeAreaView>
        )
    }
}

export default connect(({ address }) => ({ address }), dispatch => ({
    getAddress(url, method, data) {
        dispatch(actions.getAddress(url, method, data))
    },
    addOrderCat(url, method, data) {
        dispatch(actions.addOrderCat(url, method, data))
    }
}))(ConfirmOrder)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F7F6',
        // backgroundColor: '#E8785F'
    },
    headerBox: {
        width: width,
        height: px2dp(130),
        backgroundColor: '#E8785F',
    },
    addressBox: {
        width: px2dp(345),
        alignSelf: 'center'
    },
    addressTitle: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600',
        lineHeight: px2dp(16)
    },
    address: {
        color: '#fff',
        fontSize: px2dp(18),
        fontWeight: '600',
        lineHeight: px2dp(28)
    },
    tel: {
        color: '#fff',
        fontSize: px2dp(12),
        fontWeight: '500',
        lineHeight: px2dp(18)
    },
    contentBox: {
        width: px2dp(345),
        // height: px2dp(370),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: px2dp(8),
        marginTop: px2dp(-60),
        // shadowColor: '#C5C5C5',  //设置阴影色
        // shadowOffset: { width: 0, height: 0 },  //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        // shadowOpacity: 1,
        // shadowRadius: 1,
        // elevation: 1, // 适配安卓
    },
    selectBox: {
        flexDirection: 'row',
        paddingHorizontal: px2dp(10),
        paddingVertical: px2dp(12),
        alignItems: 'center',
        width: '100%',
        borderBottomColor: '#BBBBBB',
        borderBottomWidth: px2dp(.4)
    },
    selectText: {
        color: '#000',
        marginLeft: px2dp(8),
        fontWeight: '400',
        fontSize: px2dp(14)
    },
    fotterBox: {
        position: 'absolute',
        height: px2dp(60),
        width: width,
        bottom: 0,
        left: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    leftBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: px2dp(30)
    },
    you: {
        color: '#CFCECE',
        fontSize: px2dp(12),
        marginLeft: px2dp(4),
        fontWeight: '500'
    },
    jia: {
        marginLeft: px2dp(4),
        color: '#E8785F',
        fontWeight: '600',
        fontSize: px2dp(14)
    },
    line: {
        color: '#CFCECE',
        marginLeft: px2dp(4)
    },
    ConfirmBtn: {
        height: '100%',
        width: px2dp(120),
        backgroundColor: '#E8785F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ConfirmText: {
        color: '#fff',
        fontSize: px2dp(16),
        fontWeight: '600'
    },
    pingSongBox: {
        width: px2dp(345),
        height: px2dp(120),
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: px2dp(8),
        marginTop: px2dp(20),
        //shadowColor: '#C5C5C5',  //设置阴影色
        // shadowOffset: { width: 0, height: 0 },  //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        // shadowOpacity: 1,
        // shadowRadius: 1,
        // elevation: 1, // 适配安卓
    },
    songDa: {
        flexDirection: 'row',
        paddingHorizontal: px2dp(12),
        paddingVertical: px2dp(12),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    timeTitle: {
        color: '#000',
        fontSize: px2dp(14)
    },
    time: {
        color: '#E8785F',
        fontSize: px2dp(14)
    },
    notime: {
        color: '#000',
        fontSize: px2dp(14)
    },
    contentOrder: {
        paddingHorizontal: px2dp(10),
        paddingVertical: px2dp(10),
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    }
})