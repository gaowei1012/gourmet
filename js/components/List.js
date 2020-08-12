import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Image } from 'react-native-elements'
import { px2dp } from '../utils/px2dp'

function List({ date, num, nowDate, url, text }) {
    return (
        <View style={styles.list}>
            <View style={styles.topBox}>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
                <View style={styles.topDesc}>
                    <Text style={styles.desc}>订单号: {date}</Text>
                    <Text style={styles.desc}>下单时间: {num}</Text>
                    <Text style={styles.desc}>送达时间: {nowDate}</Text>
                </View>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity
                    disabled={true}
                    onPress={() => {}}
                    style={styles.btn}
                    activeOpacity={1}
                >
                    <Text style={styles.btnText}>不推荐</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {}}
                    activeOpacity={1}
                >
                    <Text style={styles.btnText}>推荐</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

List.propTypes = {
    date: PropTypes.string,
    num: PropTypes.string,
    nowDate: PropTypes.string,
    url: PropTypes.string,
    text: PropTypes.string
}

export default List

const styles = StyleSheet.create({
    list: {
        marginTop: px2dp(6),
        width: px2dp(312),
        alignSelf: 'center',
        paddingHorizontal: px2dp(4),
        paddingVertical: px2dp(6),
        backgroundColor: '#fff',
        borderRadius: px2dp(8)
    },
    topBox: {
        flexDirection: 'row',
        paddingHorizontal: px2dp(6)
    },
    image: {
        width: px2dp(80),
        height: px2dp(80),
        borderRadius: px2dp(6)
    },
    topDesc: {
        marginLeft: px2dp(10),
        paddingVertical: px2dp(4)
    },
    desc: {
        marginTop: px2dp(6),
        color: '#333'
    },
    btnBox: {
        paddingHorizontal: px2dp(6),
        marginVertical: px2dp(10),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        width: px2dp(120),
        height: px2dp(30),
        borderWidth: px2dp(.5),
        borderColor: 'red',
        borderRadius: px2dp(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#333',
        fontSize: px2dp(14)
    }
})