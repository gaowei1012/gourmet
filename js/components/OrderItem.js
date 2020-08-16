import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { px2dp } from '../utils/px2dp'

function OrderItem({ url, title, desc, num }) {
    return (
        <View style={styles.OrderBox}>
            <Image style={styles.imageBox} source={{ uri: url }} />
            <View style={styles.OrderContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <View style={styles.pricBox}>
                    <Text>{num}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text>1</Text>
                        <TouchableOpacity>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
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
        width: px2dp(200)
    }
})