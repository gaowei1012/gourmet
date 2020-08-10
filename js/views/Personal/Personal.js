import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'
import NavigationUtil from '../../utils/NavigationUtil'
import RecommenItem from './components/recommenItem'

export default class Personal extends React.PureComponent {
    handleLogin = () => {
        NavigationUtil.goPage({}, 'Login')
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='个人中心'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
            />
        );
        const _topHeader = (
            <View style={styles.topWrap} />
        );
        const _topBox = (
            <View style={styles.topBox}>
                <TouchableOpacity
                    onPress={this.handleLogin}
                    activeOpacity={1}
                >
                    <View style={styles.avatarBox}></View>
                </TouchableOpacity>
                <View style={styles.topAvatarDesc}>
                    <View>
                        <Text>11</Text>
                        <Text>22</Text>
                    </View>
                    <Text>hhh</Text>
                </View>
            </View>
        );
        const _list = (
            <ScrollView>
                <RecommenItem
                    url={'https://iph.href.lu/80x80?fg=666666&bg=cccccc'}
                    content={'我是美食，我是美食，我是美食'}
                />
            </ScrollView>
        )
        const _content = (
            <View style={styles.contentBox}>
                <View style={styles.titleBox}>
                    <View style={styles.line} />
                    <Text style={styles.recommen}>我的推荐</Text>
                </View>
                <Text style={styles.desc}>你的推荐会帮助更多有选择困难症的小伙伴!</Text>
            </View>
        );
        return <SafeAreaView style={styles.personalContainer}>
            {renderTop}
            {_topHeader}
            {_topBox}
            {_content}
            {_list}
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    personalContainer: {
        flex: 1,
        //backgroundColor: 'rgba(255, 155, 155, 1)'
    },
    topWrap: {
        width: width,
        height: px2dp(120),
        backgroundColor: 'blue'
    },
    topBox: {
        width: px2dp(335),
        alignSelf: 'center',
        backgroundColor: 'red',
        marginTop: px2dp(-60),
        height: px2dp(120),
        borderRadius: px2dp(10)
    },
    avatarBox: {
        width: px2dp(80),
        height: px2dp(80),
        backgroundColor: '#000',
        alignSelf: 'center',
        marginTop: px2dp(-40),
        borderRadius: px2dp(40)
    },
    contentBox: {
        width: px2dp(335),
        alignSelf: 'center',
        marginTop: px2dp(10)
    },
    titleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        width: px2dp(1),
        height: px2dp(16),
        backgroundColor: 'red',
        marginRight: px2dp(4)
    },
    recommen: {
        fontSize: px2dp(16),
        color: '#333'
    },
    topAvatarDesc: {
        marginTop: px2dp(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(20)
    },
    desc: {
        color: '#333',
        fontSize: px2dp(12),
        marginVertical: px2dp(6),
        marginHorizontal: px2dp(3)
    }
})