import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Image, Button } from 'react-native-elements'
import { px2dp } from '../utils/px2dp'

function List({ date, num, nowDate, url, text }) {
    return (
        <View style={styles.list}>
            <>
                <Image
                    style={styles.image}
                    source={{ uri: url }}
                />
                <View>
                    <Text>订单号: {date}</Text>
                    <Text>下单时间: {num}</Text>
                    <Text>送达时间: {nowDate}</Text>
                </View>
            </>
            <>
                <Button
                    title='不推荐'
                />
                <Button
                    title='推荐'
                />
            </>
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
        width: px2dp(312),
        alignSelf: 'center',
        paddingHorizontal: px2dp(4),
        paddingVertical: px2dp(4)
    }
})