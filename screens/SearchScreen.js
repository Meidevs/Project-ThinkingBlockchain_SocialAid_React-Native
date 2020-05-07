import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function RegisterScrenn({navigation}) {
    return (
    <View>
        <Text>Hi</Text>
        <TouchableOpacity onPress={() => navigation.goBack('Login')}>
            <Text>Search Screen</Text>
        </TouchableOpacity>
    </View>
    )
}

export default RegisterScrenn;
