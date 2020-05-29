import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput,
    Image,
    SafeAreaView,
    ScrollView
} from 'react-native';
const { width, height } = Dimensions.get('window');
import PasswordMatch from '../assets/component/PasswordMatch';
import PinMatch from '../assets/component/PinMatch';
import { onChange } from 'react-native-reanimated';


class RegisterScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [
                { isSelect: true, },
                { isSelect: false, }
            ],
            form: {
                isSelect: false,
            },
            pText_1: '',
            pText_2: '',
            pText_3: '',
            pText_4: '',
        }
    }

    switchBtn = (num) => {
        if (num == 0) {
            this.state.user[0].isSelect = true;
            this.state.user[1].isSelect = false;
        } else if (num == 1) {
            this.state.user[0].isSelect = false;
            this.state.user[1].isSelect = true;
        } else if (num == 2) {
            this.state.form.isSelect = this.state.form.isSelect ? false : true;
        }
        this.setState({
            user: [
                { isSelect: this.state.user[0].isSelect },
                { isSelect: this.state.user[1].isSelect },
            ],
            form: { isSelect: this.state.form.isSelect }
        })
    }

    checkText = (index, data) => {
        if (index == 0) {
            var result = PasswordMatch(data);
            this.setState({ boolean_1: result.res, pText_1: result.text })
        } else if (index == 1) {
            var result = PasswordMatch(data);
            this.setState({ boolean_1: result.res, pText_2: result.text })
        }

        if (index == 2) {
            var result = PinMatch(data);
            this.setState({ boolean_2: result.res, pText_3: result.text })
        } else if (index == 3) {
            var result = PinMatch(data);
            this.setState({ boolean_2: result.res, pText_4: result.text })
        }
    }

    render() {
        const { boolean_1, boolean_2, pText_1, pText_2, pText_3, pText_4 } = this.state;
        var showObj = new Object();
        var showPin = new Object();
        if (boolean_1 == false)
            showObj = {
                flags: 1,
                showText: '비밀번호는 영문, 특수문자, 숫자를 조합하여 8자 이상 입력해 주세요.'
            }
        if (pText_1.length > 0 && pText_2.length > 0) {
            if (pText_1 == pText_2) {
                showObj = {
                    flags: 0,
                    showText: '정상처리 되었습니다.'
                }
            } else {
                showObj = {
                    flags: 1,
                    showText: '비밀번호가 일치하지 않습니다.'
                }
            }
        }

        if (boolean_2 == false)
            showPin = {
                flags: 1,
                showText: 'PIN 번호는 숫자만 가능합니다'
            }
        if (pText_3.length > 0 && pText_4.length > 0) {
            if (pText_3 == pText_4) {
                showPin = {
                    flags: 0,
                    showText: '정상처리 되었습니다.'
                }
            } else {
                showPin = {
                    flags: 1,
                    showText: 'PIN번호가 일치하지 않습니다.'
                }
            }
        }
        return (
            <SafeAreaView style={styles.Container}>
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
                <ScrollView >
                    <View style={styles.TopTitle}>
                        <Text style={styles.TopTitleTxt}>산타 월렛 API 요청 정보 입력</Text>
                    </View>
                    <View style={styles.UserSelectionForm}>
                        <TouchableOpacity
                            style={this.state.user[0].isSelect ? styles.UserSwitchBtnOn : styles.UserSwitchBtnOff}
                            onPress={() => this.switchBtn(0)}>
                            <Text
                                style={this.state.user[0].isSelect ? styles.UserSwitchBtnOnTxt : styles.UserSwitchBtnOffTxt}>
                                산타 월렛 기가입자
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={this.state.user[1].isSelect ? styles.UserSwitchBtnOn : styles.UserSwitchBtnOff}
                            onPress={() => this.switchBtn(1)}>
                            <Text
                                style={this.state.user[1].isSelect ? styles.UserSwitchBtnOnTxt : styles.UserSwitchBtnOffTxt}>
                                산타 월렛 미가입자
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.UserRegisterForm}>
                        <View style={styles.InputForm}>
                            <View>
                                <Text style={styles.InputTxt}>아이디(이메일주소)</Text>
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'이메일을 입력하세요.'}
                                    onChangeText={text => this.setState({ email: text })}
                                />
                            </View>
                        </View>
                        <View style={styles.InputForm}>
                            <View>
                                <Text style={styles.InputTxt}>이름</Text>
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'이름을 입력하세요.'}
                                    onChangeText={text => this.setState({ name: text })}
                                />
                            </View>
                        </View>
                        <View style={styles.InputForm}>
                            <View>
                                <Text style={styles.InputTxt}>휴대폰번호</Text>
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'휴대폰번호를 입력하세요.'}
                                    onChangeText={text => this.setState({ phonenumber: text })}
                                />
                            </View>
                        </View>
                        <View style={styles.InputFormA}>
                            <View>
                                <Text style={styles.InputTxt}>비밀번호</Text>
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'영문,숫자,특수문자 조합 8자리 이상'}
                                    onChangeText={text => this.checkText(0, text)}
                                />
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'비밀번호 확인'}
                                    onChangeText={text => this.checkText(1, text)}
                                />
                            </View>
                            <View>
                                <Text style={showObj.flags == 0 ? styles.ShowTxt : styles.NonShowTxt}>{showObj.showText}</Text>
                            </View>
                        </View>
                        <View style={styles.InputFormA}>
                            <View>
                                <Text style={styles.InputTxt}>PIN번호</Text>
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'PIN번호를 입력하세요'}
                                    onChangeText={text => this.checkText(2, text)}
                                />
                            </View>
                            <View style={styles.TxtInputForm}>
                                <TextInput
                                    placeholder={'PIN번호 확인'}
                                    onChangeText={text => this.checkText(3, text)}
                                />
                            </View>
                            <View>
                                <Text style={showPin.flags == 0 ? styles.ShowTxt : styles.NonShowTxt}>{showPin.showText}</Text>
                            </View>
                        </View>
                        <View style={styles.AcceptForm}>
                            <View>
                                <TouchableOpacity style={styles.CheckBox} onPress={() => this.switchBtn(2)}>
                                    <View style={this.state.form.isSelect ? styles.CheckImageBox : styles.NonCheckImageBox}>
                                        {this.state.form.isSelect ?
                                            <Image source={require('../assets/images/ico_check_blue.png')} style={styles.CheckImage} />
                                            :
                                            <Image source={require('../assets/images/input_checkbox.png')} style={styles.CheckImage} />
                                        }
                                    </View>
                                    <Text style={this.state.form.isSelect ? styles.InputOnTxt : styles.InputOffTxt}>이용약관에 동의합니다</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.Open}>
                                <Text style={styles.InputTxt}>약관보기</Text>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={styles.CheckImage} />
                            </View>
                        </View>
                    </View>
                    {/* <TouchableOpacity style={styles.RegisterBtn} onPress={() => this.props.navigation.navigate('Login')}>
                     */}
                    <TouchableOpacity style={styles.RegisterBtn} onPress={() => this.Register()}>
                        <Text style={styles.RegisterBtnTxt}>동의하고 회원가입</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }

     Register = async () => {
        const { email, name, phonenumber, pText_1, pText_2, pText_3, pText_4, boolean_1, boolean_2 } = this.state;

        // if (pText_3.length > 0 && pText_4.length > 0) {
        //     if (pText_3 != pText_4) {
        //         showPin = {
        //             flags: 0,
        //             showText: '정상처리 되었습니다.'
        //         }
        //     }
        // }
        const response = await fetch('http://localhost:3000/api/users/register', {
            
        })
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#F7F7F7'
    },
    TopTitle: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    TopTitleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#5D5D5D'
    },
    UserSelectionForm: {
        // flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 10,
    },
    UserSwitchBtnOn: {
        borderRadius: 20,
        marginRight: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5D5D5D',
        height: width * 0.09
    },
    UserSwitchBtnOff: {
        borderRadius: 20,
        marginRight: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: width * 0.09
    },
    UserSwitchBtnOnTxt: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12
    },
    UserSwitchBtnOffTxt: {
        color: '#929292',
        fontWeight: 'bold',
        fontSize: 12
    },
    UserRegisterForm: {
        height: height * 0.85,
        // paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputForm: {
        // flex: width * 0.003,
        flex: 1,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    InputFormA: {
        flex: 1.7,
        // flex: width * 0.0052,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    TxtInputForm: {
        // flex: 1,
        marginTop: 5,
        marginBottom: 5,
        height: height * 0.06,
        width: width * 0.9,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    InputOnTxt: {
        fontSize: 12,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },
    InputOffTxt: {
        fontSize: 12,
        color: '#4C4C4C'
    },
    InputTxt: {
        fontSize: 12,
        color: '#929292'
    },
    AcceptForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        paddingTop: 10,
        marginBottom: 10,
    },
    CheckBox: {
        flexDirection: 'row',
        width: width * 0.6,
        alignItems: 'center',
    },
    CheckImage: {
        width: width * 0.03,
        height: width * 0.03,
        resizeMode: 'contain'
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
    NonCheckImageBox: {
        width: width * 0.06,
        height: width * 0.06,
        padding: 3,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#CBCBCB',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RegisterBtn: {
        flex: 1,
        height: width * 0.135,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CBCBCB'
    },
    RegisterBtnTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    Open: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ShowTxt: {
        fontSize: 10,
        fontWeight: '800',
        color: '#4F79D5'
    },
    NonShowTxt: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FC2667'
    }
})

export default RegisterScrenn;
