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
                                    <Text style={styles.TopTitleTxt}>소제목</Text>
                                    <Text style={styles.TopTitleTxt}>No.1</Text>
                                </View>
                                <View style={styles.TopBox}>
                                    <View style={styles.TopBoxInner}>
                                        <View style={styles.TopBoxInnerContent}>
                                            <Text>계 금액</Text>
                                            <Text>XXX STC</Text>
                                        </View>
                                        <View style={styles.TopBoxInnerContent}>
                                            <Text>계 기간</Text>
                                            <Text>10일</Text>
                                        </View>
                                        <View style={styles.TopBoxInnerContent}>
                                            <Text>계 목적</Text>
                                            <Text>금모으기</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.TopParticipants}>
                                    <View style={styles.TopCircle}>
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#284678' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#284678' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#284678' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                        <View style={{ borderRadius: 50, backgroundColor: '#FFFFFF', borderWidth: 6, borderColor: '#FFFFFF' }} />
                                    </View>
                                    <View style={{ margin: 6, }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FFFFFF' }}>현재 참가 인원</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>

                        </View>
                        <View style={{ height: 50 }}>

                        </View>
                    </ScrollView>
                </SafeAreaView>

                <View style={styles.joinBtnContent}>
                    <TouchableOpacity style={styles.calBtn}>
                        <Text>수익계산</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.joinBtn}>
                        <Text>참가 하기</Text>
                    </TouchableOpacity>
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
    },
    TopContainer: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7E90AE',
    },
    TopContent: {
        flex: 1,
        width: width * 0.9,
    },
    TopBlank: {
        flex: 2,
    },
    TopTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TopTitleTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    TopBox: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TopBoxInner: {
        flex: 1,
        margin: 10,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    TopBoxInnerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopParticipants: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    TopCircle: {
        width: width * 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BottomContainer: {
        backgroundColor: '#FFFFFF',
    },
    joinBtnContent: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calBtn: {
        margin: width * 0.03,
        width: width * 0.3,
        height: width * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
    },
    joinBtn: {
        margin: width * 0.03,
        width: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 5,
    }
})

export default DetailsScreen;
