import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import { Image } from 'react-native-elements'
import { px2dp } from '../utils/px2dp'
import moment from 'moment'

function List({ date, num, nowDate, url, text, noRecommend, recommend }) {
    return (
        <View style={styles.list}>
            <View style={styles.topBox}>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
                <View style={styles.topDesc}>
                    <Text style={styles.desc}>订单号: {date}</Text>
                    <Text style={styles.desc}>下单时间: {moment(num).format('YYYY-MM-DD hh:mm:ss')}</Text>
                    <Text style={styles.desc}>送达时间: {moment(nowDate).format('YYYY-MM-DD hh:mm:ss')}</Text>
                </View>
            </View>
            <View style={styles.btnBox}>
                <TouchableOpacity
                    disabled={true}
                    onPress={noRecommend}
                    style={styles.nobtn}
                    activeOpacity={1}
                >
                    <Text style={styles.nobtnText}>不推荐</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={recommend}
                    activeOpacity={1}
                >
                    <Text style={styles.btnText}>推荐!!!</Text>
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
    text: PropTypes.string,
    noRecommend: PropTypes.func,
    recommend: PropTypes.func
}

export default List

const styles = StyleSheet.create({
    list: {
        marginTop: px2dp(12),
        width: px2dp(312),
        alignSelf: 'center',
        paddingHorizontal: px2dp(4),
        paddingTop: px2dp(8),
        backgroundColor: '#F6F7F6',
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
    nobtn: {
        width: px2dp(120),
        height: px2dp(30),
        borderWidth: px2dp(.5),
        borderColor: '#C4C3C3',
        borderRadius: px2dp(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    nobtnText: {
        color: '#C4C3C3',
        fontSize: px2dp(14)
    },
    btn: {
        width: px2dp(120),
        height: px2dp(30),
        borderWidth: px2dp(.5),
        borderColor: '#E8785F',
        borderRadius: px2dp(6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: '#E8785F',
        fontSize: px2dp(14)
    }
})