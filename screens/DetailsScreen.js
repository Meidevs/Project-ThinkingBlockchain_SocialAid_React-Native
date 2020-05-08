import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Button
} from 'react-native';
const { width, height } = Dimensions.get('window');

class DetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView >
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.TopContainer}>
                            <View style={styles.TopContent}>
                                <View style={styles.TopBlank}>
                                </View>
                                <View style={styles.TopTitle}>
                                    <Text>소제목</Text>
                                    <Text>No.</Text>
                                </View>
                                <View style={styles.TopBox}>
                                    <View style={styles.TopBoxInner}>
                                        <View>
                                            <Text>계 금액</Text>
                                        </View>
                                        <View>
                                            <Text>계 기간</Text>
                                        </View>
                                        <View>
                                            <Text>계 목적</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.TopParticipants}>
                                    <View style={styles.TopCircle}>
                                        <Text>Circle</Text>
                                    </View>
                                    <View>
                                        <Text>현재 참가 인원</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi22</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi2</Text>
                            <Text>Hi22</Text>
                        </View>
                        <View style={{height: 50}}>

                        </View>
                    </ScrollView>
                </SafeAreaView>

                <View style={styles.joinBtnContent}>
                    <TouchableOpacity style={styles.joinBtn}><Text>Hi</Text></TouchableOpacity>
                </View>
            </View>


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
        backgroundColor: '#284678',
        height: 250,
    },
    TopContent: {
        flex: 1,
        padding: 10
    },
    TopBlank: {
        flex: 2
    },
    TopTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    TopBox: {
        backgroundColor: '#FFFFFF',
        flex: 2,
    },
    TopBoxInner: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TopParticipants: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    TopCircle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    BottomContainer: {
        backgroundColor: '#FFFFFF',
    },
    joinBtnContent: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    joinBtn: {
        height: 50,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})

export default DetailsScreen;
