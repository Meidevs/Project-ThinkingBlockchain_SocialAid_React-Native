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
            dataSet: [
                {
                    month: [
                        12, 5, 8, 21, 30, 18, 15, 12, 2, 35, 20, 20
                    ]
                },
                {
                    year: [
                        202, 347, 198
                    ]
                }
            ]
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
    render() {
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
                                        <Text style={styles.STCCount}>7,502.12</Text><Text style={styles.STCTxt}>STC</Text>
                                    </View>
                                </View>
                                <View style={styles.RevenueBox}>
                                    <View style={styles.LeftBox}>
                                        <Image source={require('../assets/images/ico_current1_graph.png')} style={{ width: 30, height: 30, resizeMode: 'center', borderRadius: 10, }} />
                                    </View>
                                    <View style={styles.RightBox}>
                                        <View style={styles.RightRevenueBox}>
                                            <Text style={styles.RevenueTxt}>예상 수익률</Text><Text style={styles.RevenueTxt}>+50%</Text>
                                        </View>
                                        <View style={styles.ProgressBar}>
                                            <LinearGradient colors={['#29C1E8', '#907CEC']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={{ width: width * 0.7 * 5 / 10, height: 6, borderRadius: 10, }} />
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
                                                350
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
                                                2,000,000
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
                                                500
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
                                    <Text style={styles.GoToDetailsTxt}>총 30건</Text>
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
                                        <TouchableOpacity onPress={() => this.switchBtn(1)}  style={styles.SwitchBtn}>
                                            <Text style={this.state.styles[1].isSelect ? styles.txtPressed : styles.txtNotPressed}>연간</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.BottomSubDetailBox}>
                                    <Text style={styles.BottomSubDetailTxt_1}>3월 수령액</Text>
                                    <Text style={styles.BottomSubDetailTxt_2}>200 STC</Text>
                                </View>
                                <View style={styles.BottomGraphBox}>
                                {this.state.styles[0].isSelect ?
                                        (
                                                <View style={styles.MonthlyGraph}>
                                                    {this.state.dataSet[0].month.map((data, i) => (
                                                        <View style={{ flexDirection: 'column', flex: 1, }}>
                                                            <View style={{ height: data * 2, backgroundColor: '#C9C9C9', margin: 8, borderRadius :10,}}>
                                                            </View>
                                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: 8, color: '#C9C9C9' }}>
                                                                    {i + 1}
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    ))}
                                                </View>
                                        ) : (
                                            <View style={styles.YearGraph}>
                                            </View>
                                        )
                                    }
                                </View>
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
}
const styles = StyleSheet.create({
    Container: {
        flex: 1
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
    BottomTitleTxt : {
        color : '#4C4C4C',
        fontSize : 14,
        fontWeight : 'bold'
    },  
    SwitchBtnBox : {
        flexDirection : 'row',
        justifyContent : 'center',
    },
    BottomSubDetailBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom : 10,
    },
    BottomSubDetailTxt_1 : {
        color : '#929292',
        fontWeight : '800',
        fontSize : 12,
        marginRight : 5
    },
    BottomSubDetailTxt_2 : {
        color : '#4F79D5',
        fontWeight : '800',
        fontSize : 12,
    },
    BottomGraphBox: {
        flex: 8,
        flexDirection : 'column',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    MonthlyGraph : {
        flexDirection : 'row',
        alignItems : 'flex-end'
    },
    EmptyBox : {
        flex : 1,
    },
    BottomLowerContent: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    SwitchBtn : {
        marginRight : 5,
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
