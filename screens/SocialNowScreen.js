import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

class SocialNowScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: [
                { isSelect: true, },
                { isSelect: false, }
            ],
            totalSTC: 0,
            revenue: 0,
            balance: 0,
            profit: 0,
            repayment: 0,
            count: 0,
            annually: [],
            monthly: [],
            mSTC: 0,
            month: 0,
        }
    }

    switchBtn = (num) => {
        if (num == 0) {
            this.state.styles[0].isSelect = true;
            this.state.styles[1].isSelect = false;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        } else if (num == 1) {
            this.state.styles[0].isSelect = false;
            this.state.styles[1].isSelect = true;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        }
    }
    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.GetGroupStatus();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }
    ChooseMonth = (num) => {
        const { monthly, mbarColor } = this.state;
        var rawArray = new Array();
        for (var i = 0; i < 12; i++) {
            var rawData = { height: monthly[i].total, width: 10, backgroundColor: '#C9C9C9', margin: 8, borderRadius: 10 }
            rawArray.push(rawData)
        }
        rawArray[num] = { height: monthly[num].total, width: 10, backgroundColor: '#4F79D5', margin: 8, borderRadius: 10 }
        this.setState({ mbarColor: rawArray, mSTC: monthly[num].total, month: monthly[num].month + 1 })
    }

    ChooseYear = (num) => {
        const { annually, ybarColor } = this.state;
        var rawArray = new Array();
        for (var i = 0; i < 6; i++) {
            var rawData = { height: annually[i].total, width: 10, backgroundColor: '#C9C9C9', margin: 8, borderRadius: 10 }
            rawArray.push(rawData)
        }
        rawArray[num] = { height: annually[num].total, width: 10, backgroundColor: '#4F79D5', margin: 8, borderRadius: 10 }
        this.setState({ ybarColor: rawArray, ySTC: annually[num].total, year: annually[num].year })
    }

    render() {
        const { revenue, annually, monthly, ybarColor, mbarColor, mSTC, month, ySTC, year } = this.state;
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
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    vertical={true}
                    style={styles.Scrollview}
                >
                    <View style={styles.TopContainer}>
                        <LinearGradient
                            colors={['rgba(141,158,255,1)', 'rgba(89, 131, 224, 1)']}
                            style={styles.GradientColor}
                        >
                            <View style={styles.TopContentUpper}>
                                <View style={styles.TitleBox}>
                                    <Text style={styles.TitleTxt}>전체 계모임 금액</Text>
                                    <View style={styles.STCBox}>
                                        <Text style={styles.STCCount}>{this.state.totalSTC}</Text><Text style={styles.STCTxt}>STC</Text>
                                    </View>
                                </View>
                                <View style={styles.RevenueBox}>
                                    <View style={styles.LeftBox}>
                                        <Image source={require('../assets/images/ico_current1_graph.png')} style={{ width: 30, height: 30, resizeMode: 'center', borderRadius: 10, }} />
                                    </View>
                                    <View style={styles.RightBox}>
                                        <View style={styles.RightRevenueBox}>
                                            <Text style={styles.RevenueTxt}>예상 수익률</Text><Text style={styles.RevenueTxt}>+{revenue}%</Text>
                                        </View>
                                        <View style={styles.ProgressBar}>
                                            <LinearGradient colors={['#29C1E8', '#907CEC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: width * 0.7 * revenue / 100, height: 6, borderRadius: 10, }} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.TopContentDowner}>
                                <ScrollView
                                    nestedScrollEnabled={true}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    horizontal={true}
                                    style={{ paddingHorizontal: 20, marginBottom: 40 }}
                                >
                                    <View style={styles.ContentBox}>
                                        <Image source={require('../assets/images/ico_current1_swipe1.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                        <View style={styles.TextBox}>
                                            <Text style={styles.Txt}>
                                                총 누적 계
                                            </Text>
                                            <Text style={styles.Txt}>
                                                {this.state.balance}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.ContentBox}>
                                        <Image source={require('../assets/images/ico_current1_swipe2.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                        <View style={styles.TextBox}>
                                            <Text style={styles.Txt}>
                                                누적 수익
                                            </Text>
                                            <Text style={styles.Txt}>
                                                {this.state.profit}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.ContentBox}>
                                        <Image source={require('../assets/images/ico_current1_swipe3.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                                        <View style={styles.TextBox}>
                                            <Text style={styles.Txt}>
                                                누적 상환
                                            </Text>
                                            <Text style={styles.Txt}>
                                                {this.state.repayment}
                                            </Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.BottomUpperContent}>
                            <TouchableOpacity style={styles.BottomFirstBox} onPress={() => this.props.navigation.navigate('NowDetails')}>
                                <Text style={styles.BottomUpperTxt}>계모임 현황</Text>
                                <View style={styles.GoToDetails}>
                                    <Text style={styles.GoToDetailsTxt}>총 {this.state.count}건</Text>
                                    <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 10, height: 10, resizeMode: 'center' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.BottomMiddleContent}>
                            <View style={styles.BottomSecondBox}>
                                <View style={styles.BottomTitleBox}>
                                    <Text style={styles.BottomTitleTxt}>상환 내역</Text>
                                    <View style={styles.SwitchBtnBox}>
                                        <TouchableOpacity onPress={() => this.switchBtn(0)} style={styles.SwitchBtn}>
                                            <Text style={this.state.styles[0].isSelect ? styles.txtPressed : styles.txtNotPressed}>월간</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => this.switchBtn(1)} style={styles.SwitchBtn}>
                                            <Text style={this.state.styles[1].isSelect ? styles.txtPressed : styles.txtNotPressed}>연간</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {this.state.styles[0].isSelect ?
                                    (
                                        <View style={styles.BottomSubDetailBox}>
                                            <View style={styles.BottomSubDetailInnerBox}>
                                                <Text style={styles.BottomSubDetailTxt_1}>{month}월 수령액</Text>
                                                <Text style={styles.BottomSubDetailTxt_2}>{mSTC} STC</Text>
                                            </View>
                                            <View style={{ flex: 6 }}>
                                                <ScrollView
                                                    nestedScrollEnabled={true}
                                                    showsHorizontalScrollIndicator={false}
                                                    showsVerticalScrollIndicator={false}
                                                    horizontal={true}
                                                    style={{ flex: 1 }}
                                                >
                                                    {monthly.map((data, i) => {
                                                        return (
                                                            <TouchableOpacity key={i.toString()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', }} onPress={() => this.ChooseMonth(i)}>
                                                                <View style={mbarColor[i]}>
                                                                </View>
                                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={{ fontSize: 12, color: '#C9C9C9' }}>
                                                                        {data.month + 1}
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                    }
                                                </ScrollView>
                                            </View>
                                        </View>
                                    ) : (
                                        <View style={styles.BottomSubDetailBox}>
                                            <View style={styles.BottomSubDetailInnerBox}>
                                                <Text style={styles.BottomSubDetailTxt_1}>{year}년도 수령액</Text>
                                                <Text style={styles.BottomSubDetailTxt_2}>{ySTC} STC</Text>
                                            </View>
                                            <View style={{ flex: 6 }}>
                                                <ScrollView
                                                    nestedScrollEnabled={true}
                                                    showsHorizontalScrollIndicator={false}
                                                    showsVerticalScrollIndicator={false}
                                                    horizontal={true}
                                                    style={{ flex: 1 }}
                                                >
                                                    {annually.map((data, i) => {
                                                        return (
                                                            <TouchableOpacity key={i.toString()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', marginLeft: 10, marginRight: 10, }} onPress={() => this.ChooseYear(i)}>
                                                                <View style={ybarColor[i]}>
                                                                </View>
                                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={{ fontSize: 12, color: '#C9C9C9' }}>
                                                                        {data.year}
                                                                    </Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        )
                                                    })
                                                    }
                                                </ScrollView>
                                            </View>
                                        </View>
                                    )
                                }
                                <View style={styles.EmptyBox}>

                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomLowerContent}>
                            <View style={styles.BottomThirdBox}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        )
    }

    GetGroupStatus = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/rewards/groupstatus', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            let json = await response.json();
            if (response.ok) {
                var mbarColor = new Array();
                var ybarColor = new Array();
                for (var i = 0; i < json.monthly.length; i++) {
                    if (i == 6) {
                        mbarColor.push({ height: json.monthly[i].total + 0.1, width: 10, backgroundColor: '#4F79D5', margin: 8, borderRadius: 10 })
                    } else {
                        mbarColor.push({ height: json.monthly[i].total + 0.1, width: 10, backgroundColor: '#C9C9C9', margin: 8, borderRadius: 10 })
                    }
                }
                for (var i = 0; i < json.annually.length; i++) {
                    if (i == 3) {
                        ybarColor.push({ height: json.annually[i].total + 0.1, width: 10, backgroundColor: '#4F79D5', margin: 8, borderRadius: 10 })
                    } else {
                        ybarColor.push({ height: json.annually[i].total + 0.1, width: 10, backgroundColor: '#C9C9C9', margin: 8, borderRadius: 10 })
                    }
                }
                this.setState({
                    totalSTC: json.totalSTC,
                    revenue: json.revenue,
                    balance: 0,
                    profit: json.profit,
                    repayment: json.repayment,
                    count: json.count,
                    annually: json.annually,
                    monthly: json.monthly,
                    ybarColor: ybarColor,
                    mbarColor: mbarColor,
                    mSTC: json.monthly[6].total,
                    month: json.monthly[6].month + 1,
                    ySTC: json.annually[3].total,
                    year: json.annually[3].year,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F7F7F7'
    },
    Scrollview: {
        flexGrow: 1,
    },
    TopContainer: {
        flex: 1,
        height: 300,
    },
    GradientColor: {
        height: 300,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TopContentUpper: {
        flex: 0.8,
        width: width * 0.9,
        marginTop: 5,
    },
    TitleBox: {
        flexDirection: 'column',
        marginBottom: 15,
    },
    TitleTxt: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: '600'
    },
    STCBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    STCCount: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5
    },
    STCTxt: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '900'
    },
    RevenueBox: {
        width: width * 0.9,
        height: 65,
        borderRadius: 5,
        backgroundColor: '#4F79D5',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LeftBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    RightBox: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    RightRevenueBox: {
        width: width * 0.7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    RevenueTxt: {
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '900'
    },
    ProgressBar: {
        width: width * 0.7,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 5,
    },
    TopContentDowner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    ContentBox: {
        width: width * 0.35,
        height: width * 0.3,
        backgroundColor: '#FFFFFF',
        marginRight: 8,
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    TextBox: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Txt: {
        color: '#929292',
        fontWeight: 'bold',
        fontSize: 12,
    },
    BottomContainer: {
        height: 600,
        top: -35,
    },
    BottomUpperContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomFirstBox: {
        width: width * 0.9,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        elevation: 3,
    },
    BottomUpperTxt: {
        fontSize: 13,
        color: '#929292',
        fontWeight: 'bold'
    },
    GoToDetailsTxt: {
        color: '#4F79D5',
        fontSize: 13,
        fontWeight: 'bold',
        marginRight: 5,
    },
    GoToDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    BottomMiddleContent: {
        flex: 5,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    BottomSecondBox: {
        width: width * 0.9,
        height: 300,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
        elevation: 3,
    },
    BottomTitleBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    BottomTitleTxt: {
        color: '#4C4C4C',
        fontSize: 14,
        fontWeight: 'bold'
    },
    SwitchBtnBox: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    BottomSubDetailBox: {
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    BottomSubDetailInnerBox: {
        flex: 1,
        width: width * 0.85,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    BottomSubDetailTxt_1: {
        color: '#929292',
        fontWeight: '800',
        fontSize: 12,
        marginRight: 5
    },
    BottomSubDetailTxt_2: {
        color: '#4F79D5',
        fontWeight: '800',
        fontSize: 12,
    },
    MonthlyGraph: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end',
    },
    EmptyBox: {
        flex: 1,
    },
    BottomLowerContent: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SwitchBtn: {
        marginRight: 5,
    },
    txtNotPressed: {
        fontSize: 13,
        color: '#929292',
        fontWeight: 'bold'
    },
    txtPressed: {
        fontSize: 13,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },

})
export default SocialNowScreen;
