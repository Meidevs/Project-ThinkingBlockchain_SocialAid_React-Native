import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
const { width, height } = Dimensions.get('window');

class MyinfoScreen extends React.Component {
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
                <View style={styles.TopContainer}>
                    <View style={styles.TopTitle}>
                        <Text style={styles.TopTitleTxt}>더보기</Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.WalletSector_1}>
                            <Text style={styles.WalletTxt}>XXX님의 산타 월렛 계좌</Text>
                            <Text style={styles.WalletAddrTxt}>XXXXXXXXXXXXXXXXXXXXXXXXX</Text>
                        </View>
                        <View style={styles.WalletSector_2}>
                            <Text style={styles.WalletSTCTxt}>이용가능 STC</Text>
                            <Text style={styles.WalletSTCSubTxt}>XXX STC</Text>
                        </View>
                        <View style={styles.WalletSector_2}>
                            <Text style={styles.WalletSTCTxt}>총 보유 STC</Text>
                            <Text style={styles.WalletSTCSubTxt}>XXX STC</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox} onPress={() => this.props.navigation.navigate('Alarm')}>
                            <Text style={styles.BottomContentTxt}>계모임 알림</Text>
                            <View style={styles.BottomContentBtn}>
                                <Text style={styles.BottomContentTxt}>해제됨</Text>
                                <Text style={styles.BottomContentTxt}>></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox}>
                            <Text style={styles.BottomContentTxt}>자동참가 설정</Text>
                            <View style={styles.BottomContentBtn}>
                                <Text style={styles.BottomContentTxt}>해제됨</Text>
                                <Text style={styles.BottomContentTxt}>></Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox}>
                            <Text style={styles.BottomContentTxt}>공지사항</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopContainer: {
        flex: 4,
    },
    TopTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
    },
    TopTitleTxt: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 6,
        margin: 10,
        backgroundColor: '#7A8CAB',
        borderRadius: 10,
        elevation : 3,
    },
    WalletSector_1: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        
    },
    WalletTxt: {
        fontSize: 12,
        fontWeight: '900',
        color: '#FFFFFF'
    },
    WalletAddrTxt: {
        fontSize: 10,
        fontWeight: '900',
        color: '#FFFFFF'
    },
    WalletSector_2: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    WalletSTCTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    WalletSTCSubTxt: {
        fontSize: 12,
        fontWeight: '900',
        color: '#FFFFFF'
    },
    BottomContainer: {
        flex: 5,
    },
    BottomContent: {
        margin : 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    BottomContentBox: {
        width: width * 0.9,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        elevation : 3,
    },
    BottomContentBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})
export default MyinfoScreen;
