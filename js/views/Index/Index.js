import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import { px2dp, height } from '../../utils/px2dp'
import TabBar from '../../components/TabBar'

class Index extends React.PureComponent {
    state = {
        menu: [{ id: 1, name: '今日推荐' }, { id: 2, name: '附近好友' }, { id: 3, name: '来点新鲜的' }, { id: 4, name: '省点吃吧' }],
        index: 1,
        url: 'https://iph.href.lu/80x80?fg=666666&bg=cccccc'
    }
    onChangeTab = (index, id, type) => {
        // TODO
    }
    render() {
        const _content = (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
                <Image
                    style={styles.scrollItem}
                    source={{uri: this.state.url}}
                />
            </ScrollView>
        );
        const _step = (
            <View style={styles.stepBox}>
                <Text>step</Text>
            </View>
        )
        return (
            <SafeAreaView style={styles.landContainer}>
                <TabBar
                    ref={e => this.tabs = e}
                    index={this.state.index}
                    data={this.state.menu}
                    onChange={(index, id, type) => this.onChangeTab(index, id, type)}
                />
                {_content}
                {_step}
            </SafeAreaView>
        )
    }
}

export default Index

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    scrollItem: {
        width: px2dp(300),
        height: px2dp(300),
        borderRadius: px2dp(8),
        marginHorizontal: px2dp(16),
        marginVertical: px2dp(26)
    }
})
