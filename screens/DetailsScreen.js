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

class DetailsScreen extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
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
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        backgroundColor: '#FFFFFF',
    },
    TopContainer: {
        backgroundColor: '#284678',
        height: 300
    },
    BottomContainer: {
        backgroundColor: '#FFFFFF',
        height: 600
    },
})

export default DetailsScreen;
