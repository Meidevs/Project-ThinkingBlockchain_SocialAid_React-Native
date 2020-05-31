import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    StyleSheet,
    StatusBar
} from 'react-native';
const { width, height } = Dimensions.get('window');

class MyinfoScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            wallet: null,
            ableSTC: 0,
            totalSTC: 0,
            name: null
        }
    }

    componentDidMount() {
        this.GetMyinfo();
    }

    render() {
        const { wallet, ableSTC, totalSTC, name } = this.state;
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
                        <View style={styles.WalletBox}>
                            <Text style={styles.WalletTxt}>{name}님의 산타 월렛 계좌</Text>
                            <View style={styles.WalletAddrBox}>
                                <Text style={styles.WalletAddrTxt}>{wallet}</Text>
                                <Image source={require('../assets/images/ico_copy.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </View>
                        </View>
                        <View style={styles.LineSection}>
                            <Text style={{
                                borderBottomColor: '#707A9D',
                                borderBottomWidth: 1,
                                height: 10,
                            }} />
                        </View>
                        <View style={styles.WalletSector_2}>
                            <Text style={styles.WalletSTCTxt}>이용가능 STC</Text>
                            <Text style={styles.WalletSTCSubTxt}>{ableSTC} STC</Text>
                        </View>
                        <View style={styles.WalletSector_2}>
                            <Text style={styles.WalletSTCTxt}>총 보유 STC</Text>
                            <Text style={styles.WalletSTCSubTxt}>{totalSTC} STC</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox} onPress={() => this.props.navigation.navigate('Alarm')}>
                            <Text style={styles.BottomContentMainTxt}>계모임 알림</Text>
                            <View style={styles.BottomContentBtn}>
                                <Text style={styles.BottomContentTxt}>해제됨</Text>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 10, height: 10, resizeMode: 'center' }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox}>
                            <Text style={styles.BottomContentMainTxt}>자동참가 설정</Text>
                            <View style={styles.BottomContentBtn}>
                                <Text style={styles.BottomContentTxt}>해제됨</Text>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 10, height: 10, resizeMode: 'center' }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomContent}>
                        <TouchableOpacity style={styles.BottomContentBox} onPress={() => this.props.navigation.navigate('Notice')}>
                            <Text style={styles.BottomContentMainTxt}>공지사항</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    GetMyinfo = async () => {
        try {
            let response = await fetch('http://localhost:3000/api/users/myinfo', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    wallet: json.wallet,
                    ableSTC: json.ableSTC,
                    totalSTC: json.totalSTC,
                    name: json.name,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7'
    },
    TopContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopTitle: {
        flex: 2,
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    TopTitleTxt: {
        fontSize: 15,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 5,
        width: width * 0.9,
        margin: 10,
        padding: 10,
        backgroundColor: '#545E80',
        borderRadius: 10,
        elevation: 3,
    },
    WalletBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
    },
    WalletAddrBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    WalletTxt: {
        fontSize: 14,
        fontWeight: '900',
        color: '#FFFFFF'
    },
    WalletAddrTxt: {
        fontSize: 14,
        fontWeight: '900',
        color: '#919AB8',
        marginRight: 10,
    },
    LineSection: {
        flex: 1,
    },
    WalletSector_2: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        margin: 10,
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
        elevation: 2,
    },
    BottomContentBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    BottomContentMainTxt: {
        color: '#4C4C4C',
    },
    BottomContentTxt: {
        color: '#929292',
        marginRight: 5
    }
})
export default MyinfoScreen;
