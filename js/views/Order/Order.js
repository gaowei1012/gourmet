import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'
import List from '../../components/List'
import { MapView } from 'react-native-amap3d'
import { connect } from 'react-redux'
import actions from './redux/actions'
import constant from '../../expand/api'
import Modal from 'react-native-modal'
import { Loading } from '../../utils/Loading'
import { Toast } from '../../utils/Toast'

const { get_order, update_order_status, find_order_status } = constant

class Order extends React.PureComponent {
    state = {
        menu: [
            { id: 1, type: 1, text: '未完成订单' },
            { id: 2, type: 2, text: '已完成订单' }
        ],
        type: 1,
        id: 1,
        isVisible: false, // 取消订单 visible
    }
    swtchTab = (type) => {
        this.setState({ type })
    }
    componentDidMount() {
        let { getOrder } = this.props
        let { id } = this.state
        let data = {
            "id": id
        }
        getOrder(get_order, 'POST', data)

        this.getOrderStatus()
    }

    // orders status
    getOrderStatus() {
        let { getOrderStatus } = this.props
        let data = {
            "status": 0
        }
        getOrderStatus(find_order_status, 'POST', data)
    }

    // 取消订单
    _cancelOrder = () => {
        this.setState({ isVisible: true })
    }

    // modal 按钮取消
    _cancelModal = () => {
        this.setState({ isVisible: false })
    }

    //确定取消按钮
    _saveModal = () => {
        // 会改变订单状态
        this.setState({ isVisible: false })
        const { updateOrderStatus } = this.props
        let data = {
            "status": 1, // 未完成，取消订单
            "id": 1, // 该订单id编号
        }
        updateOrderStatus(update_order_status, 'POST', data)
        Loading.show('删除')
        setTimeout(() => {
            Loading.hidden()
            Toast.showToast('删除成功')
        }, 300)
    }

    // 推荐该商品
    handleRecommend = () => {
        Toast.showToast('推荐成功')
    }

    // 完成 status: 0
    _list=()=> {
        let order = this.props.findOrderStatus.item;
        console.log('order', order)
        if (order == null) {
            return Loading.show('获取中')
        } else {
            return (
                <>
                    {order.map(o => (
                        <List
                            key={o.id}
                            date={o.id}
                            num={o.create_at}
                            nowDate={o.create_at}
                            url={o.shop_url}
                            recommend={this.handleRecommend}
                        />
                    ))}
                </>
            )
        }
    }

    render() {
        let { isVisible } = this.state
        const StatusBar = {
            backgroundColor: "#E8785F",
            barStyle: "dark-content",
        };
        const renderTopBar = (
            <TopNavigationBar
                title='订单'
                statusBar={StatusBar}
                style={{ backgroundColor: "#E8785F" }}
                color="#fff"
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
                    <MapView
                        style={{ width: '100%', height: '100%' }}
                        center={{
                            latitude: 39.91095,
                            longitude: 116.37296
                        }}
                    />
                    <View style={styles.noOrderBox}>
                        <View style={styles.l} />
                        <View style={styles.timeBox}>
                            <Text style={styles.desc}>预计</Text>
                            <Text style={styles.timeDesc}>11:30</Text>
                            <Text style={styles.desc}>送达</Text>
                        </View>
                        <Text style={styles.desc}>由店家配送</Text>
                        <TouchableOpacity
                            activeOpacity={1}
                            style={styles.btn}
                            onPress={this._cancelOrder}
                        >
                            <Text style={styles.comfiomText}>取消订单</Text>
                        </TouchableOpacity>
                    </View>
                </View> : null}
                {this.state.type === 2 ? <View style={styles.carryBox}>
                    <View style={styles.carryTop}>
                        <View style={styles.carryLine} />
                        <Text style={styles.carryTitle}>等待评价</Text>
                    </View>
                    <Text style={styles.pingDesc}>评价描述</Text>
                    <ScrollView
                        style={{ height: '100%' }}
                        horizontal={false}
                    >
                        {this._list()}
                    </ScrollView>
                </View> : null}
            </>
        );
        // 取消订单
        const _modal = (
            <Modal
                isVisible={isVisible}
            >
                <View style={styles.modalBox}>
                    <Text style={styles.updateTitle}>是否取消订单?</Text>
                    <View style={styles.updateFotter}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._cancelModal}
                            style={[styles.btnModal, { borderRightColor: 'rgba(187, 187, 187, 1)', borderRightWidth: px2dp(.5) }]}
                        >
                            <Text style={styles.canleText}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._saveModal}
                            style={styles.btnModal}
                        >
                            <Text style={styles.downloadText}>确定</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
        return (
            <SafeAreaView style={styles.container}>
                {renderTopBar}
                {_menu}
                {_content}
                {_modal}
            </SafeAreaView>
        )
    }
}

export default connect(({ getOrder, findOrderStatus }) => ({ getOrder, findOrderStatus }), dispatch => ({
    getOrder(url, method, data) {
        dispatch(actions.getOrder(url, method, data))
    },
    updateOrderStatus(url, method, data) {
        dispatch(actions.updateOrderStatus(url, method, data))
    },
    getOrderStatus(url, method, data) {
        dispatch(actions.getOrderStatus(url, method, data))
    }
}))(Order)

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
        paddingTop: px2dp(8),
        paddingBottom: px2dp(4),
        width: px2dp(375 / 2),
        alignItems: 'center',
        backgroundColor: '#E8785F',
        // paddingVertical: px2dp(8)
    },
    menuText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    },
    acMenuText: {
        color: '#fff',
        fontWeight: '600'
    },
    line: {
        marginTop: px2dp(6),
        width: px2dp(32),
        height: px2dp(2),
        borderRadius: px2dp(4)
    },
    AcLine: {
        backgroundColor: '#fff'
    },
    noOrderBox: {
        position: 'absolute',
        bottom: px2dp(80),
        left: px2dp(14),
        // marginTop: px2dp(490),
        width: px2dp(345),
        alignSelf: 'center',
        height: px2dp(100),
        backgroundColor: '#fff',
        borderRadius: px2dp(6),
        zIndex: 9999
    },
    l: {
        marginTop: px2dp(8),
        width: px2dp(40),
        height: px2dp(2),
        borderRadius: px2dp(6),
        backgroundColor: '#E8785F',
        alignSelf: 'center'
    },
    btn: {
        backgroundColor: '#E8785F',
        width: px2dp(312),
        alignSelf: 'center',
        borderRadius: px2dp(3),
        height: px2dp(32),
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontSize: px2dp(16),
        color: '#333',
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
        height: px2dp(18),
        width: px2dp(2),
        backgroundColor: '#E8785F',
        borderRadius: px2dp(6)
    },
    carryTitle: {
        fontSize: px2dp(20),
        marginLeft: px2dp(6),
        color: '#060606'
    },
    pingDesc: {
        fontSize: px2dp(12),
        color: '#BBB9B9',
        paddingHorizontal: px2dp(10),
        marginVertical: px2dp(6)
    },
    timeBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeDesc: {
        color: '#E8785F',
        fontSize: px2dp(16)
    },
    comfiomText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    },
    modalBox: {
        width: px2dp(259),
        height: px2dp(100),
        borderRadius: px2dp(13),
        backgroundColor: '#FDFFFB',
        alignSelf: 'center',
        alignItems: 'center'
    },
    updateTitle: {
        fontSize: px2dp(16),
        color: '#030303',
        marginTop: px2dp(21)
    },
    updateVersion: {
        marginTop: px2dp(4),
        fontSize: px2dp(14),
        color: '#333'
    },
    updateFotter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: px2dp(44),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: px2dp(.5),
        borderTopColor: 'rgba(187, 187, 187, 1)'
    },
    btnModal: {
        width: px2dp(259 / 2),
        height: px2dp(44),
        alignItems: 'center',
        justifyContent: 'center'
    },
    canleText: {
        color: '#E31E1E',
        fontSize: px2dp(17)
    },
    downloadText: {
        fontSize: px2dp(17),
        color: '#4DAB6D'
    }
})
