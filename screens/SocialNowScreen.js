import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

function SocialNowScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
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
            <ScrollView style={styles.scrollview}>
                <View style={styles.TopContainer}>
                    <Text>Hi1</Text>
                </View>
                <View style={styles.BottomContainer}>
                    <Text>Hi2</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        backgroundColor: '#FFFFFF',
    },
    TopContainer : {
        backgroundColor : '#284678',
        height : 300
    },
    BottomContainer : {
        backgroundColor : '#FFFFFF',
        height : 600
    },
})
export default SocialNowScreen;
