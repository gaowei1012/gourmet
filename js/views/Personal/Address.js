import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { GoBack } from '../../utils/GoBack'
import TopNavigationBar from '../../common/TopNavigationBar'
import actions from './redux/action'
import { connect } from 'react-redux'
import constant from '../../expand/api'
import { Toast } from '../../utils/Toast'
import { Loading } from '../../utils/Loading'

const { add_address } = constant

class Address extends React.PureComponent {
    state = {
        phone: null,
        address: null,
        username: null
    }
    handleAddress = (address) => {
        this.setState({ address })
    }
    handlePhone = (phone) => {
        this.setState({ phone })
    }
    handleUserName = (username) => {
        this.setState({ username })
    }

    // 保存地址
    _submit = () => {
        let { address, username, phone } = this.state
        const { addAddressData } = this.props
        if (address == null) {
            Toast.showToast('地址不能为空')
        } else if (username == null) {
            Toast.showToast('用户名不能为空')
        } else if (phone == null) {
            Toast.showToast('手机号不能为空')
        } else {
            Loading.show('保存中')
            let data = {
                "username": username,
                "tel": phone,
                "address": address
            }
            addAddressData(add_address, 'POST', data)
            setTimeout(() => {
                Loading.hidden()
                Toast.showLogSuccess('保存成功')
            }, 600)
        }
    }

    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                title='添加用户地址'
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _address = (
            <View style={styles.textInputBox}>
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入姓名'}
                    onChangeText={this.handleUserName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入详细地址'}
                    onChangeText={this.handleAddress}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder={'请输入手机号'}
                    onChangeText={this.handlePhone}
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
                    <Text style={styles.submitText}>提交</Text>
                </TouchableOpacity>
            </>

        );
        return (
            <SafeAreaView style={styles.container}>
                {renderTop}
                {_address}
                {_footerBtn}
            </SafeAreaView>
        )
    }
}


export default connect(({addAddress}) => ({addAddress}), dispatch => ({
    addAddressData(url, method, data) {
        dispatch(actions.addAddressData(url, method, data))
    }
}))(Address)

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