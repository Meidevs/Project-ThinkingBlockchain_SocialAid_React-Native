import React, { useState } from 'react';
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
        var groupsid = props.route.params.groupsid;
        this.state = {
            flags: 999,
            groupsid: groupsid,
            host: null,
            cates: null,
            story: null,
            groupname: null,
            stc: 0,
            period: 0,
            participants: 0,
            showmodal: false,
        }
    }
    setModalVisible = (showmodal) => {
        this.setState({ showmodal: showmodal })
    }
    render() {
        const { showmodal, flags, groupsid, host, cates, story, groupname, stc, period, participants } = this.state;
        var range = parseInt(participants) / parseInt(period);
        if (isNaN(range)) {
            range = 1;
        }
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
                                <Text style={styles.Title}>{groupname}</Text>
                                <View style={styles.STCArea}>
                                    <Text style={styles.STCTxt}>일일 </Text><Text style={styles.STCCount}>{stc}</Text><Text style={styles.STCTxt}>STC</Text>
                                </View>
                                <Text style={styles.SubTxt}>{story}</Text>
                                <Text>계기간 : {period} 일간</Text>
                            </View>
                            <View style={styles.ProgressBar}>
                                <View style={{ width: width * 0.9, backgroundColor: '#E8E8E8', borderRadius: 10, }}>
                                    <LinearGradient colors={['#29C1E8', '#907CEC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: width * 0.9 * range, height: 6, borderRadius: 10, }} />
                                </View>
                                <View style={{ width: width * 0.9, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={styles.Participants}>현재참여인원</Text>
                                    <Text style={styles.ParticipantsCount}>{participants}명</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>

                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={styles.joinBtnContent}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={showmodal}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>총 납입금액 : {period * stc} STC</Text>
                                <Text style={styles.modalText}>납입 기간 : {period} 일간</Text>
                                <Text style={styles.modalText}>수익 : {period * stc * 0.02} STC</Text>
                                <TouchableOpacity
                                    style={styles.openButton}
                                    onPress={() => {
                                        this.setModalVisible(!showmodal);
                                    }}
                                >
                                    <Text style={styles.textStyle}>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity style={styles.calBtn} onPress={() => {
                        this.setModalVisible(true);
                    }}>
                        <Image source={require('../assets/images/ico_calculator.png')} style={{ marginRight: 5, width: 15, height: 15, resizeMode: 'contain' }} />
                        <Text style={styles.textStyle}>수익 계산</Text>
                    </TouchableOpacity>

                    {
                        flags == 999 ? <View></View> :
                            flags == 0 ? <TouchableOpacity style={styles.joinBtn} onPress={() => this.JoinGroup()}>
                                <Text style={styles.Txt}>참가 하기</Text>
                            </TouchableOpacity> :
                                flags == 1 ? <TouchableOpacity style={styles.joinBtn} onPress={() => this.CancelGroup()}>
                                    <Text style={styles.Txt}>계모임 취소</Text>
                                </TouchableOpacity> : <TouchableOpacity style={styles.joinBtn} onPress={() => this.CancelJoin()}>
                                        <Text style={styles.Txt}>계모임 참가 취소</Text>
                                    </TouchableOpacity>
                    }
                </View>
            </View>


        )
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/loadgroup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ groupsid: this.state.groupsid })
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    flags: json.flags,
                    groupsid: json.groupsid,
                    host: json.host,
                    cates: json.cates,
                    story: json.story,
                    groupname: json.groupname,
                    stc: json.stc,
                    period: json.period,
                    participants: json.participants,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    JoinGroup = async () => {
        const { groupsid } = this.state;
        try {
            let response = await fetch('http://54.248.0.228:3000/api/joingroup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    groupsid: groupsid,
                })
            });
            let json = await response.json();

            if (response.ok) {
                if (json.resResult == false) {
                    alert('참가에 실패하였습니다')
                } else {
                    this.props.navigation.replace('Details', {
                        groupsid: this.state.groupsid
                    })
                }
            }
        } catch (err) {
            alert('참가에 실패하였습니다')
        }
    }

    CancelGroup = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/cancelgroup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    groupsid: this.state.groupsid,
                })
            })
            if (response.ok) {
                this.props.navigation.navigate('Main')
            }
        } catch (err) {
            alert('계모임 삭제에 실패하였습니다.')
        }
    }

    CancelJoin = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/canceljoin', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    groupsid: this.state.groupsid,
                })
            })
            let json = await response.json();
            if (response.ok) {
                this.props.navigation.replace('Details', {
                    groupsid: this.state.groupsid
                })
            }
        } catch (err) {
            alert('참가 취소에 실패하였습니다')
        }
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
        alignItems: 'center',
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        width: width * 0.5,
        backgroundColor: "#4F79D5",
        borderRadius: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default DetailsScreen;
