import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Image,
    Modal
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
            <View style={styles.Container}>
                <SafeAreaView >
                    <ScrollView style={styles.scrollview}>
                        <ImageBackground source={require('../assets/images/back_img.jpg')} style={styles.ImageContainer}>
                            <View style={styles.Overlay}>
                                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Image source={require('../assets/images/ico_back_white.png')} style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                        <View style={styles.TopContainer}>
                            <View style={styles.TopContent}>
                                <Text style={styles.Title}>상품명 및 제목입니다.</Text>
                                <View style={styles.STCArea}>
                                    <Text style={styles.STCCount}>7,502.12</Text><Text style={styles.STCTxt}>STC</Text>
                                </View>
                                <Text style={styles.SubTxt}>소셜에이드 계모임 목적 및 설명입니다</Text>
                                <Text>계기간 : 20.05.11 - 20.05.31</Text>
                            </View>
                            <View style={styles.ProgressBar}>
                                <View style={{ width: width * 0.9, backgroundColor: '#E8E8E8', borderRadius: 10, }}>
                                    <LinearGradient colors={['#29C1E8', '#907CEC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: width * 0.9 * 4 / 10, height: 6, borderRadius: 10, }} />
                                </View>
                                <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={styles.Participants}>현재참여인원</Text>
                                    <Text style={styles.ParticipantsCount}>4명</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>

                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={styles.joinBtnContent} onPress={() => this.OpenModal(true)}>
                    <TouchableOpacity style={styles.calBtn}>
                        <Image source={require('../assets/images/ico_calculator.png')} style={{ marginRight: 5, width: 15, height: 15, resizeMode: 'contain' }} />
                        <Text style={styles.Txt}>수익 계산</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.joinBtn}>
                        <Text style={styles.Txt}>참가 하기</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    scrollview: {
        flexGrow: 1,
    },
    ImageContainer: {
        height: 200,
        resizeMode: 'cover',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    Overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    TopContainer: {
        height: 200,
        flexDirection: 'column',
        alignItems: 'center',
    },
    TopContent: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Title: {
        margin: 5,
        color: '#4C4C4C'
    },
    STCArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 5,
    },
    SubTxt: {
        color: '#929292',
        marginBottom: 5,
    },
    ProgressBar: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Participants: {
        fontSize: 12,
        fontWeight: '900',
        color: '#4F79D5'
    },
    ParticipantsCount: {
        fontSize: 12,
        fontWeight: '900',
        color: '#929292'
    },
    BottomContainer: {
        height: 600,
        backgroundColor: '#F7F7F7',
        marginBottom: width * 0.08,
    },
    joinBtnContent: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    calBtn: {
        flex: 1,
        height: width * 0.135,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9F9F9F'
    },
    joinBtn: {
        flex: 2,
        height: width * 0.135,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4F79D5'
    },
    Txt: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    STCCount: {
        color: '#4C4C4C',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5
    },
    STCTxt: {
        color: '#4C4C4C',
        fontSize: 14,
        fontWeight: '600'
    }
})

export default DetailsScreen;
