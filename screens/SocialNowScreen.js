import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

function SocialNowScreen({ navigation }) {
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
            <Text>Social Now Screen</Text>
        </View>
    )
}

export default SocialNowScreen;
