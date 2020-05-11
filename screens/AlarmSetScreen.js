import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StatusBar,
    StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

class AddSocialScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
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
                <Text> Alarm!! </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default AddSocialScreen;
