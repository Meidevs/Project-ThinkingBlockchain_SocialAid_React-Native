import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

class RegisterScrenn extends React.Component {
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
                <Text>Hi</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                    <Text>Search Screen</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default RegisterScrenn;
