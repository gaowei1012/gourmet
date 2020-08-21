import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { GoBack } from '../../utils/GoBack'
import TopNavigationBar from '../../common/TopNavigationBar'
import NavigationUtil from '../../utils/NavigationUtil'
import actions from './redux/action'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { Toast } from '../../utils/Toast'
import { Loading } from '../../utils/Loading'

const { register } = constant

class Register extends React.PureComponent {
    state = {
        username: null,
        password: null,
        newPassword: null
    }
    handleComfimPass = (newPassword) => {
        this.setState({ newPassword })
    }
    handlePass = (password) => {
        this.setState({ password })
    }
    handleUserName = (username) => {
        this.setState({ username })
    }
    _submit = () => {
        let { username, password, newPassword } = this.state
        if (username == null) {
            Toast.showToast('用户名不能为空')
        } else if (password == null) {
            Toast.showToast('密码不能为空')
        } else if (newPassword == null) {
            Toast.showToast('确认密码不能为空')
        } else {
            if (password !== newPassword) {
                Toast.showToast('两次输入密码不一致')
            } else {
                let { username, password } = this.state
                const { getRegister } = this.props
                let data = {
                    "username": username,
                    "password": password
                }
                getRegister(register, 'POST', data)
                Loading.show('注册中')
                setTimeout(() => {
                    Loading.hidden()
                    Toast.showToast('注册成功')
                    NavigationUtil.goBack(this.props.navigation)
                }, 800)
            }
        }
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='用户注册'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _register = (
            <View style={styles.textInputBox}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入姓名'}
                    onChangeText={this.handleUserName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入密码'}
                    onChangeText={this.handlePass}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请再次输入密码'}
                    onChangeText={this.handleComfimPass}
                    secureTextEntry={true}
                />
            </View>
        )
        const _footerBtn = (
            <>
                <TouchableOpacity
                    onPress={this._submit}
                    activeOpacity={1}
                    style={styles.submitBox}
                >
                    <Text style={styles.submitText}>注册</Text>
                </TouchableOpacity>
            </>

        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                {_register}
                {_footerBtn}
            </SafeAreaView>
        )
    }
}

export default connect(({ register }) => ({ register }), dispatch => ({
    getRegister(url, method, data) {
        dispatch(actions.getRegister(url, method, data))
    }
}))(Register)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputBox: {
        marginTop: px2dp(30),
        alignSelf: 'center',
        width: px2dp(335)
    },
    textInput: {
        backgroundColor: '#eee',
        height: px2dp(36),
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
        backgroundColor: '#E8785F',
        borderRadius: px2dp(3)
    },
    submitText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    },
})