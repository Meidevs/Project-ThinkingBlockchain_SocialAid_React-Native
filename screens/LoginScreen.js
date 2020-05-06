import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

function LoginScreen({navigation}) {
    return (
    <View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableOpacity>
    </View>
    )
}

export default LoginScreen;
