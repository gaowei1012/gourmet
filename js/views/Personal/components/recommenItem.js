import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { px2dp } from '../../../utils/px2dp'
import PropTypes from 'prop-types'

function RecommenItem({ url, content, goToPage }) {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={goToPage}
            style={styles.recommen}
        >
            <Image style={styles.image} source={{ uri: url }} />
            <Text style={styles.recommenText}>{content}</Text>
        </TouchableOpacity>
    )
}

RecommenItem.propTypes = {
    url: PropTypes.string,
    content: PropTypes.string,
    goToPage: PropTypes.func
}


export default RecommenItem

const styles = StyleSheet.create({
    recommen: {
        width: px2dp(335),
        alignSelf: 'center',
        height: px2dp(80),
        borderRadius: px2dp(6),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ddd',
        paddingHorizontal: px2dp(8)
    },
    image: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(6)
    },
    recommenText: {
        marginLeft: px2dp(6),
        fontSize: px2dp(14),
        color: '#333'
    }
})