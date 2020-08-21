import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { px2dp } from '../utils/px2dp'
import PropTypes from 'prop-types'

function OrderItem({ url, title, desc, price, onAdd, onLess, disabled, priceNum }) {
    return (
        <View style={styles.OrderBox}>
            <Image style={styles.imageBox} source={{ uri: url }} />
            <View style={styles.OrderContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <View style={styles.pricBox}>
                    {/* 总价格 */}
                    <Text style={styles.price}>￥{(Number(price) * priceNum)}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={onLess}
                            activeOpacity={1}
                            disabled={disabled}
                            style={styles.lessBtn}
                        >
                            <Text style={styles.less}>-</Text>
                        </TouchableOpacity>
                        <Text>{priceNum}</Text>
                        <TouchableOpacity
                            style={styles.addBtn}
                            activeOpacity={1}
                            onPress={onAdd}
                        >
                            <Text style={styles.add}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

OrderItem.propTypes = {
    price: PropTypes.string,
}

export default OrderItem

const styles = StyleSheet.create({
    conatier: {

    },
    OrderBox: {
        marginLeft: px2dp(6),
        flexDirection: 'row'
    },
    imageBox: {
        width: px2dp(80),
        height: px2dp(80),
        borderRadius: px2dp(4)
    },
    OrderContent: {
        flexDirection: 'column',
        marginLeft: px2dp(8),
        padding: px2dp(4)
    },
    title: {
        marginTop: px2dp(2),
        color: '#000',
        fontSize: px2dp(14),
        fontWeight: '500'
    },
    desc: {
        marginTop: px2dp(6),
        fontSize: px2dp(12),
        color: '#ccc'
    },
    pricBox: {
        marginTop: px2dp(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: px2dp(200),
    },
    lessBtn: {
        width: px2dp(18),
        height: px2dp(18),
        borderRadius: px2dp(9),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: px2dp(2),
        borderColor: '#E8785F',
        marginRight: px2dp(6)
    },
    less: {
        color: '#000',
    },
    addBtn: {
        width: px2dp(18),
        height: px2dp(18),
        borderRadius: px2dp(9),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8785F',
        marginLeft: px2dp(6)
    },
    add: {
        color: '#fff'
    },
    price: {
        color: '#333',
        fontSize: px2dp(12)
    }

})