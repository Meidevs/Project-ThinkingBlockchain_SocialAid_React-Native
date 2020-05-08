import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

class LoginScreen extends React.Component {
    render() {
        return (
            <View>
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
                <View>
                    <View>
                        <Text>로그인 아이디</Text>
                        <TextInput></TextInput>
                    </View>
                    <View>
                        <Text>로그인 패스워드</Text>
                        <TextInput></TextInput>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>아이디 / 비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.replace('MainTabs')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.push('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default LoginScreen;
