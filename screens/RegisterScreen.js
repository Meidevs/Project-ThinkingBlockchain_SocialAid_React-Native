import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    StyleSheet,
    TextInput
} from 'react-native';
const { width, height } = Dimensions.get('window');

class RegisterScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: [
                { isSelect: true, },
                { isSelect: false, }
            ]
        }
    }

    switchBtn = (num) => {
        if (num == 0) {
            this.state.styles[0].isSelect = true;
            this.state.styles[1].isSelect = false;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        } else if (num == 1) {
            this.state.styles[0].isSelect = false;
            this.state.styles[1].isSelect = true;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        }
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
                    <TouchableOpacity style={this.state.styles[0].isSelect ? styles.UserSwitchBtnOn : styles.UserSwitchBtnOff} onPress={() => this.switchBtn(0)}>
                        <Text style={this.state.styles[0].isSelect ? styles.UserSwitchBtnOnTxt : styles.UserSwitchBtnOffTxt}>산타 월렛 기가입자</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={this.state.styles[1].isSelect ? styles.UserSwitchBtnOn : styles.UserSwitchBtnOff} onPress={() => this.switchBtn(1)}>
                        <Text style={this.state.styles[1].isSelect ? styles.UserSwitchBtnOnTxt : styles.UserSwitchBtnOffTxt}>산타 월렛 미가입자</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.UserRegisterForm}>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>아이디(이메일주소)</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>이름</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>휴대폰번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>비밀번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>PIN번호</Text>
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                        <View style={styles.TxtInputForm}>
                            <TextInput />
                        </View>
                    </View>
                    <View style={styles.InputForm}>
                        <View>
                            <Text>이용약관에 동의합니다</Text>
                        </View>
                        <View>
                            <Text>약관보기</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.RegisterBtn}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
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
        flex: 8,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    InputForm: {
        width : width * 0.9,
        flexDirection: 'column',
        justifyContent : 'center',
        alignItems : 'flex-start'
    },
    TxtInputForm : {
        width: width * 0.9,
        height : width * 0.2,
        borderWidth: 2,
        borderBottomWidth: 0,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF'
    },
    RegisterBtn: {
        height: width * 0.15,
        backgroundColor: 'pink'
    },
    
})

export default RegisterScrenn;
