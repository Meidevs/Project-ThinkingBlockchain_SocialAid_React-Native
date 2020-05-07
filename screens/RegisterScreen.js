import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

function RegisterScrenn({ navigation }) {
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
            <Text>Hi</Text>
            <TouchableOpacity onPress={() => navigation.goBack('Login')}>
                <Text>Go to Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterScrenn;
