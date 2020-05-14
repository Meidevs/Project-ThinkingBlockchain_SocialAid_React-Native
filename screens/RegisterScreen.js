import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
const { width, height } = Dimensions.get('window');

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
            }
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
                            <TextInput placeholder={'이메일을 입력하세요.'} />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text style={styles.InputTxt}>이름</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'이름을 입력하세요.'} />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text style={styles.InputTxt}>휴대폰번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'휴대폰번호를 입력하세요.'} />
                        </View>
                    </View>
                    <View style={styles.InputFormA}>
                        <View>
                            <Text style={styles.InputTxt}>비밀번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'영문,숫자,특수문자 조합 8자리 이상'} />
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'비밀번호 확인'} />
                        </View>
                    </View>
                    <View style={styles.InputFormA}>
                        <View>
                            <Text style={styles.InputTxt}>PIN번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'PIN번호를 입력하세요'} />
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput placeholder={'PIN번호 확인'} />
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
                <TouchableOpacity style={styles.RegisterBtn}onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.RegisterBtnTxt}>동의하고 회원가입</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor : '#F7F7F7'
    },
    TopTitle: {
        flex: 1,
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
        flex: 1,
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
        flex: 10,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InputForm: {
        flex: width * 0.003,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    InputFormA: {
        flex: width * 0.0052,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    TxtInputForm: {
        flex: 1,
        marginTop: 5,
        marginBottom: 5,
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
        fontWeight :'bold'
    },
    InputOffTxt: {
        fontSize: 12,
        color: '#4C4C4C'
    },
    InputTxt : {
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CBCBCB'
    },
    RegisterBtnTxt : {
        fontSize : 12,
        fontWeight : 'bold',
        color : '#FFFFFF'
    },
    Open: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})

export default RegisterScrenn;
