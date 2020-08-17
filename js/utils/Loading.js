import React from 'react'
import RootSilblings from 'react-native-root-siblings'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import {width, height} from '../utils/px2dp'

let sibling = undefined

const Loading = {
    show: () => {
        sibling = new RootSilblings(
            <View style={styles.maskStyle}>
                <View style={styles.backViewStyle}>
                    <ActivityIndicator size='large' color='white' />
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
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
    }
})