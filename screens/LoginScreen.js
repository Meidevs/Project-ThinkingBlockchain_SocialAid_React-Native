import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }
    CheckBtn = () => {
        this.state.isSelected = this.state.isSelected ? false : true;
        this.setState({ isSelect: this.state.isSelected })
    }
    render() {
        return (
            <View style={styles.Container}>
                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#00BCD4"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <View style={styles.LogoContainer}>
                    <Image source={require('../assets/images/logo/logo.png')} style={styles.LogoImage} />
                </View>
                <View style={styles.MainContainer}>
                    <View style={styles.UserInputForm}>
                        <View style={styles.UserEmail}>
                            <TextInput placeholder={'이메일 아이디'} />
                        </View>
                        <View style={styles.UserPassword}>
                            <TextInput placeholder={'비밀번호'} />
                        </View>
                        <View style={styles.UserCheckForm}>
                            <TouchableOpacity style={styles.CheckBox} onPress={() => this.CheckBtn()}>
                                <View style={this.state.isSelect ? styles.CheckImageBox : styles.NonCheckImageBox}>
                                    {this.state.isSelected ?
                                        <Image source={require('../assets/images/ico_check_blue.png')} style={styles.checkImage} />
                                        :
                                        <Image source={require('../assets/images/input_checkbox.png')} style={styles.checkImage} />
                                    }
                                </View>
                                <Text style={this.state.isSelected ? { color: '#4C4C4C', fontWeight: 'bold' } : { color: '#4C4C4C' }}>
                                    아이디 기억하기
                                </Text>
                            </TouchableOpacity>
                            {/* <View style={styles.SearchUserPassword}> */}
                            <TouchableOpacity>
                                <Text style={styles.SearchUserPasswordTxt}>아이디 비밀번호 찾기</Text>
                            </TouchableOpacity>
                            {/* </View> */}
                        </View>
                    </View>
                </View>
                <View style={styles.ButtonContainer}>
                    <View style={styles.ButtonForm}>
                        <TouchableOpacity style={styles.LoginBtn} onPress={() => this.props.navigation.replace('MainTabs')}>
                            <Text style={styles.LoginBtnTxt}>로그인</Text>
                        </TouchableOpacity>
                        <View style={styles.RegisterForm}>
                            <Text style={styles.AskRegiTxt}>아직 회원이 아니신가요?</Text>
                            <TouchableOpacity style={styles.RegisterBtn} onPress={() => this.props.navigation.push('Register')}>
                                <Text style={styles.RegiBtnTxt}>회원가입</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
{/* <TouchableOpacity style={styles.LoginBtn} onPress={() => this.props.navigation.replace('MainTabs')}>
<Text>Login</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.RegisterBtn} onPress={() => this.props.navigation.push('Register')}>
<Text>Register</Text>
</TouchableOpacity> */}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7F7F7'
    },
    LogoContainer: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    LogoImage: {
        width: width * 0.6,
        height: width * 0.4,
        resizeMode: 'contain'
    },
    MainContainer: {
        flex: 1.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserInputForm: {
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    UserEmail: {
        width: width * 0.9,
        height: width * 0.2,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    UserPassword: {
        width: width * 0.9,
        height: width * 0.2,
        borderWidth: 2,
        borderTopWidth: 1,
        borderTopColor: '#F3F3F3',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    UserCheckForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        paddingTop: 10,
    },
    CheckBox: {
        flexDirection: 'row',
        width: width * 0.3,
    },
    NonCheckImageBox: {
        width: width * 0.06,
        height: width * 0.06,
        padding: 3,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    CheckImageBox: {
        width: width * 0.06,
        height: width * 0.06,
        padding: 3,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#4f79d5',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkImage: {
        width: width * 0.03,
        height: width * 0.03,
        resizeMode: 'contain'
    },
    SearchUserPasswordTxt: {
        color: '#929292'
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonForm: {
        flex: 1,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    LoginBtn: {
        width: width * 0.9,
        height: width * 0.15,
        backgroundColor: '#4F79D5',
        borderRadius : 10,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 10,
    },
    RegisterForm : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
    },
    LoginBtnTxt : {
        color : '#FFFFFF',
        fontWeight : 'bold'
    },
    AskRegiTxt : {
        color : '#929292'
    },
    RegisterBtn : {
        marginLeft : 10,
    },
    RegiBtnTxt : {
        color : '#4F79D5',
        textDecorationLine : 'underline',
        textDecorationStyle : 'solid',
        textDecorationColor : '#4F79D5'
    }
})
export default LoginScreen;
