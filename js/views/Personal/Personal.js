import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp, width } from '../../utils/px2dp'
import NavigationUtil from '../../utils/NavigationUtil'
import RecommenItem from './components/recommenItem'

// svg
import HanBao from '../../assets/svg/hanbao.svg'

export default class Personal extends React.PureComponent {
    state = {
        url: 'https://iph.href.lu/80x80?text=%E5%A4%B4%E5%83%8F&fg=ffffff&bg=ead1dc'
    }
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
                color='#fff'
                statusBar={StatusBar}
                style={{ backgroundColor: "#E8785F" }}
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
                    <Image style={styles.avatarBox} source={{uri: this.state.url}}/>
                </TouchableOpacity>
                <View style={styles.topAvatarDesc}>
                    <View style={styles.topTitleBox}>
                        <Text style={styles.title}>Hi，风湿老年人</Text>
                        <Text style={styles.lv}>L1 单层汉堡</Text>
                    </View>
                    <HanBao width="28" height="28"/>
                </View>
            </View>
        );
        const _list = (
            <ScrollView>
                <RecommenItem
                    url={'https://iph.href.lu/80x80?fg=666666&bg=cccccc'}
                    content={'我是美食，我是美食，我是美食,我是美食，我是美食，我是美食'}
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
        backgroundColor: '#fff'
    },
    topWrap: {
        width: width,
        height: px2dp(120),
        backgroundColor: '#E8785F'
    },
    topBox: {
        width: px2dp(335),
        alignSelf: 'center',
        backgroundColor: '#fff',
        marginTop: px2dp(-60),
        height: px2dp(120),
        borderRadius: px2dp(10),
        shadowColor: '#C5C5C5',  //设置阴影色
        shadowOffset:{width:0,height:0},  //设置阴影偏移,该值会设置整个阴影的偏移，width可以看做x,height可以看做y,x向右为正，y向下为正
        shadowOpacity: 1,
        shadowRadius: 1.5,
        elevation:1.5, // 适配安卓
    },
    avatarBox: {
        width: px2dp(80),
        height: px2dp(80),
        // backgroundColor: '#000',
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
        backgroundColor: '#E8785F',
        marginRight: px2dp(4)
    },
    recommen: {
        fontSize: px2dp(16),
        color: '#000'
    },
    topAvatarDesc: {
        marginTop: px2dp(18),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: px2dp(20)
    },
    desc: {
        color: '#CAC9C9',
        fontSize: px2dp(12),
        marginVertical: px2dp(6),
        marginHorizontal: px2dp(3)
    },
    topTitleBox: {

    },
    title: {
        color: '#000',
        fontSize: px2dp(18)
    },
    lv: {
        marginTop: px2dp(10),
        color: '#B8B8B8',
        fontSize: px2dp(12)
    }
})