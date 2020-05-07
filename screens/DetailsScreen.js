import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

function DetailsScreen({navigation}) {
    return (
    <View>
        <TouchableOpacity onPress={() => navigation.goBack('Main')}>
            <Text>Details Screen</Text>
        </TouchableOpacity>
    </View>
    )
}

export default DetailsScreen;
