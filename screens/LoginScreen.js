import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');

class LoginScreen extends React.Component {
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
                <View style={styles.TopContainer}>

                </View>
                <View style={styles.MiddleContainer}>
                    <View style={styles.InputUserForm}>
                        <View style={styles.InputTitle}>
                            <Text>아이디</Text>
                        </View>
                        <View style={styles.InputArea}>
                            <TextInput style={{height : width * 0.12}}/>
                        </View>
                    </View>
                    <View style={styles.InputPasswordForm}>
                        <View style={styles.InputTitle}>
                            <Text>비밀번호</Text>
                        </View>
                        <View style={styles.InputArea}>
                            <TextInput style={{height : width * 0.12}}/>
                        </View>
                    </View>
                    <View style={styles.FindUserForm}>
                        <TouchableOpacity>
                            <Text>아이디/비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <TouchableOpacity style={styles.LoginBtn} onPress={() => this.props.navigation.replace('MainTabs')}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.RegisterBtn} onPress={() => this.props.navigation.push('Register')}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopContainer: {
        flex: 2,
    },
    MiddleContainer: {
        flex: 2,
        width : width * 0.7,
    },
    InputUserForm: {
        flex: 1,
    },
    InputTitle : {
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'flex-start',
        paddingBottom : 5,
    },
    InputArea : {
        width : width * 0.7,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : 'gray'
    },
    InputPasswordForm: {
        flex: 1,
    },
    FindUserForm: {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'flex-end'
    },
    BottomContainer: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginBtn : {
        width : width *0.5,
        height : width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth : 1,
        borderRadius : 10,
        margin : 10,
    },
    RegisterBtn : {
        width : width *0.5,
        height : width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth : 1,
        borderRadius : 10,
        margin : 10,
    }
})
export default LoginScreen;
