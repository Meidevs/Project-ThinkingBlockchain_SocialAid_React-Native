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

class SocialNowScreen extends React.Component {
    render() {
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
                <ScrollView nestedScrollEnabled={true} style={styles.scrollview}>
                    <View style={styles.TopContainer}>
                        <View style={styles.TopContentUpper}>
                            <View>
                                <Text>
                                    계 현황
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    전체 계모임 금액
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    예상 수익률
                                </Text>
                            </View>
                        </View>
                        <View style={styles.TopContentDowner}>
                            <ScrollView nestedScrollEnabled={true} horizontal={true} style={{paddingVertical: 10}}>
                                <View style={styles.SubDetails}>
                                    <Text>1</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>2</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>1</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>3</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>4</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>5</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <Text>6</Text>
                                </View>
                            </ScrollView>
                        </View>
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
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    TopContainer: {
        flex : 1,
        backgroundColor: '#284678',
        height: 300,
    },
    TopContentUpper : {
        flex : 2,
        backgroundColor : 'red'
    },
    TopContentDowner : {
        flex : 1,
    },
    SubDetails : {
        backgroundColor : 'white',
        width : 100,
        height : 80,
        margin : 10,
    },
    BottomContainer: {
        backgroundColor: '#FFFFFF',
        height: 600
    },
})
export default SocialNowScreen;
