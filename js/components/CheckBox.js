import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

import Sel from '../assets/svg/sel.svg'
import No from '../assets/svg/no.svg'

function CheckBox({isCheckBox, onCheckBox}) {
    return <TouchableOpacity
        style={styles.checkbox}
        onPress={onCheckBox}
        activeOpacity={1}
    >
        {isCheckBox ? <Sel width='20' height='20'/> : <No width='20' height='20'/>}
    </TouchableOpacity>
}

export default CheckBox

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
