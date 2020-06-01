import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import PeriodPicker from '../assets/component/PeriodPicker';
import CatesPicker from '../assets/component/CatesPicker';

const { width, height } = Dimensions.get('window');

class AddSocialScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stc: 0,
            period: 10,
            prcnt: 0.2,
        }
    }

    PeriodCallBack = (dataFromChild) => {
        this.EndCal(this.state.stc, dataFromChild.period, this.state.cates)
    }
    CateCallBack = (dataFromChild) => {
        this.EndCal(this.state.stc, this.state.period, dataFromChild.cates)
    }
    SetSTC = (data) => {
        if (data > 100) {
            data = null;
        }
        this.EndCal(data, this.state.period, this.state.cates);
    }

    EndCal = (stc, period, cates) => {
        switch (parseInt(period)) {
            case 10:
                this.setState({ stc: stc, period: period, cates: cates, prcnt: 0.2 });
                break;
            case 20:
                this.setState({ stc: stc, period: period, cates: cates, prcnt: 0.8 })
                break;
            case 30:
                this.setState({ stc: stc, period: period, cates: cates, prcnt: 1.8 })
                break;
        }
    }
    render() {
        const { period, stc, expla, name } = this.state;
        return (
            <SafeAreaView style={styles.Container}>
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.TopContainer}>
                        <View style={styles.TopTitle}>
                            <Text style={styles.TopTitleTxt}>만들기</Text>
                        </View>
                        <View style={styles.TopContent}>
                            <View style={styles.TopSubTitle}>
                                <Image source={require('../assets/images/ico_check_blue.png')} style={{ width: 12, height: 12, marginRight: 5, resizeMode: 'contain' }} />
                                <Text style={styles.SubTitleTxt}>기본사항</Text>
                            </View>
                            <View style={styles.ContentBox}>
                                <Text style={styles.InnerTxt}>계모임명</Text>
                                <View style={styles.TopContentInputBox}>
                                    <TextInput
                                        placeholder={'계모임 명을 입력하세요.'}
                                        onChangeText={(name) => this.setState({ name })}
                                        value={name}
                                    />
                                </View>
                            </View>
                            <View style={styles.TopContentBox_2}>
                                <View style={styles.TopContent_2InnerBox}>
                                    <Text style={styles.InnerTxt}>기간 (최소 10일 이상)</Text>
                                    <PeriodPicker callback={this.PeriodCallBack} />
                                </View>
                                <View style={styles.TopContent_2InnerBox}>
                                    <Text style={styles.InnerTxt}>납입금액 (최대 100STC)</Text>
                                    <View style={styles.STCInputBox}>
                                        <TextInput
                                            placeholder={'STC를 입력해주세요'}
                                            onChangeText={stc => this.SetSTC(stc)}
                                            keyboardType={'numeric'}
                                            value={stc}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.BottomContent}>
                            <View style={styles.TopSubTitle}>
                                <Image source={require('../assets/images/ico_check_blue.png')} style={{ width: 12, height: 12, marginRight: 5, resizeMode: 'contain' }} />
                                <Text style={styles.SubTitleTxt}>계모임 목적</Text>
                            </View>
                            <View style={styles.ContentBox}>
                                <Text style={styles.InnerTxt}>카테고리</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    borderColor: '#E0E0E0',
                                    backgroundColor: '#FFFFFF',
                                }}>
                                    <CatesPicker props={width * 0.94} callback={this.CateCallBack} />
                                </View>
                            </View>
                            <View style={styles.ContentBox}>
                                <Text style={styles.InnerTxt}>설명</Text>
                                <View style={styles.TopContentInputBox}>
                                    <TextInput
                                        placeholder={'계모임에 대한 설명을 입력해주세요 '}
                                        onChangeText={(expla) => this.setState({ expla })}
                                        value={expla}
                                    />
                                </View>
                            </View>
                            <View style={styles.ContentBox}>
                                <Text style={styles.CalRewardTxt}>수익 계산</Text>
                                <View style={styles.Reward}>
                                    <View style={styles.RewardCal}>
                                        <Text style={styles.InnerTxt} >총 납입 STC</Text>
                                        <Text style={styles.InnerTxt}>{this.state.period * this.state.stc}</Text>
                                    </View>
                                    <View style={styles.RewardCal}>
                                        <Text style={styles.InnerTxt}>보상액</Text>
                                        <Text style={styles.InnerTxt}>{Math.floor(this.state.stc * this.state.prcnt)}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.CreateBox} onPress={() => this.CreateGroup()}>
                        <Text style={styles.CreateBtn}>계모임 만들기</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }

    CreateGroup = async () => {
        try {
            if (this.state.cates == 'cates' || this.state.cates == undefined) {
                alert('카테고리를 선택해 주세요.')
            } else {
                let response = await fetch('http://localhost:3000/api/creategroup', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        story : this.state.expla,
                        catesid : this.state.cates,
                        name : this.state.name,
                        stc : this.state.stc,
                        period : this.state.period
                    })
                });
                if (response.ok) {
                    this.setState({
                        expla : null,
                        catesid : null,
                        name : null,
                        stc :null,
                        period : null,
                    })
                    this.props.navigation.navigate('Main')
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center'
    },
    TopContainer: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
    },
    TopTitle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    TopTitleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4C4C4C',
    },
    TopContent: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    TopSubTitle: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    SubTitleTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4F79D5'
    },
    ContentBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 10,
    },
    TopContentInputBox: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        padding: 10,
    },
    InnerTxt: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: '600',
        color: '#4C4C4C'
    },
    TopContentBox_2: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    TopContent_2InnerBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 5,
    },
    STCInputBox: {
        marginTop: 5,
        width: width * 0.94 / 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    BottomContainer: {
        marginRight: 10,
        marginLeft: 10,
    },
    BottomContent: {
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    BottomContentBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 10,
    },
    CalRewardTxt: {
        fontSize: 16,
        fontWeight: '700',
        color: '#4C4C4C'
    },
    Reward: {
        height: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        padding: 10,
    },
    RewardCal: {
        width: width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    CreateBox: {
        width: width,
        height: width * 0.135,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cbcbcb'
    },
    CreateBtn: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default AddSocialScreen;
