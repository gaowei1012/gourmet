import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'

class Index extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.landContainer}>
                <Text>首页</Text>
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    }
})
