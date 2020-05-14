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
    Image
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
                                    <Text style={{color : '#4C4C4C', fontSize : 20, fontWeight : 'bold', marginRight : 5,}}>7,502.12</Text><Text style={{color : '#4C4C4C', fontSize : 14, fontWeight : '600'}}>STC</Text>
                                </View>
                                <Text style={styles.SubTxt}>소셜에이드 계모임 목적 및 설명입니다</Text>
                                <Text>계기간 : 20.05.11 - 20.05.31</Text>
                            </View>
                            <View style={styles.ProgressBar}>

                            </View>
                        </View>
                        <View style={styles.BottomContainer}>

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
        height: 250,
        flexDirection: 'column',
        alignItems : 'center',
    },
    TopContent : {
        flex : 3,
        flexDirection: 'column',
        alignItems : 'center',
        justifyContent : 'center',
    },
    Title : {
        margin : 5,
        color : '#4C4C4C'
    },
    STCArea : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'flex-end',
        marginBottom : 5,
    },
    SubTxt : {
        color : '#929292',
        marginBottom : 5,
    },
    ProgressBar : {
        flex : 1,
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
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
    joinBtn: {
        margin: width * 0.03,
        width: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    }
})

export default DetailsScreen;
