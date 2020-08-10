import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { GoBack } from '../../utils/GoBack'
import TopNavigationBar from '../../common/TopNavigationBar'

export default class Login extends React.PureComponent {
    state = {
        account: null,
        password: null
    }
    handleChangeAccout = (account) => {
        this.setState({ account })
    }
    handleChangePassword = (password) => {
        this.setState({ password })
    }
    handleSubmit=()=> {
        // 登录
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _title = (
            <Text style={styles.loginTitle}>账号密码登录</Text>
        );
        const _content = (
            <View style={styles.textInputBox}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入账号'}
                    onChangeText={this.handleChangeAccout}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    onChangeText={this.handleChangePassword}
                    secureTextEntry={true}
                />
            </View>
        );
        const _password = (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.handleSubmit}
                style={styles.password}
            >
                <Text style={styles.passwordText}>忘记密码？</Text>
            </TouchableOpacity>
        );
        const _footerBtn = (
            <>
                <TouchableOpacity
                    onPress={this._submit}
                    activeOpacity={1}
                    style={styles.submitBox}
                >
                    <Text style={styles.submitText}>登录</Text>
                </TouchableOpacity>
                {_password}
            </>

        );

        return (
            <SafeAreaView style={styles.loginBox}>
                {renderTop}
                {_title}
                {_content}
                {_footerBtn}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        flex: 1
    },
    loginTitle: {
        fontSize: px2dp(22),
        color: '#333',
        marginHorizontal: px2dp(16),
        marginVertical: px2dp(20)
    },
    textInputBox: {
        marginTop: px2dp(30),
        alignSelf: 'center',
        width: px2dp(335)
    },
    textInput: {
        backgroundColor: '#ddd',
        height: px2dp(30),
        marginBottom: px2dp(16),
        paddingLeft: px2dp(8),
        borderRadius: px2dp(4)
    },
    submitBox: {
        marginTop: px2dp(100),
        width: px2dp(335),
        height: px2dp(36),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        borderRadius: px2dp(3)
    },
    submitText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    },
    password: {
        marginTop: px2dp(6),
        width: px2dp(335),
        alignSelf: 'center',
        alignItems: 'flex-end',
    },
    passwordText: {
        color: '#333'
    }
})
