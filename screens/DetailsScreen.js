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
    constructor(props) {
        console.log(props.route.params.item)
        super(props)
        this.state = {
            data: null
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
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
        flex: 1,
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
        flexDirection : 'row',
        justifyContent : 'space-between'
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
        height : 600
    },
})

export default DetailsScreen;
