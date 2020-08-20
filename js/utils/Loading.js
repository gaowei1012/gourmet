import React from 'react'
import RootSilblings from 'react-native-root-siblings'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'

import {width, height, px2dp} from '../utils/px2dp'

let sibling = undefined

const Loading = {
    show: (msg) => {
        sibling = new RootSilblings(
            <View style={styles.maskStyle}>
                <View style={styles.backViewStyle}>
                    <ActivityIndicator size='large' color='white' />
                    <Text style={styles.msg}>{msg}</Text>
                </View>
            </View>
        )
    },
    hidden: () => {
        if (sibling instanceof RootSilblings) {
            sibling.destroy()
        }
    }
}

export {
    Loading
}

const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backViewStyle: {
        backgroundColor: '#111',
        width: 120,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    msg: {
        color: '#fff',
        fontSize: px2dp(12),
        marginTop: px2dp(6)
    }
})