import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
const { width, height } = Dimensions.get('window');

class NowShowDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        var groupsid = props.route.params.groupsid;
        this.state = {
            groupsid: groupsid,
            createdate: null,
            duedate: null,
            ratedate: null,
            creator: null,
            period: null,
            stc: null,
            status: null,
        }
    }
    // After React DOM is created, componentDidMount is started; 
    componentDidMount() {
        this.GetRelatedData();
    }

    render() {
        const { createdate, duedate, ratedate, creator, period, stc, status, interval } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <View style={styles.TopTitle}>
                        <Text style={styles.TopTitleTxt}>계모임 현황</Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>계모임 상태</Text>
                            <View style={styles.TopContentFrom}>
                                <Text style={styles.TopContentTxt}>{status == 1 ? '진행중' : status == 2 ? '종료' : null}</Text>
                                {
                                    status == 1 ?
                                        (
                                            <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} />
                                        ) : status == 2 ?
                                            (
                                                <View style={{ width: 8, height: 8, backgroundColor: '#B8B8B8', borderRadius: 5, marginRight: 8, }} />
                                            ) :
                                            <View />
                                }
                            </View>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>계모임 생성일</Text>
                            <Text style={styles.TopContentTxt}>{createdate}</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>일일 금액</Text>
                            <Text style={styles.TopContentTxt}>{stc} STC</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>예상 수익</Text>
                            <Text style={styles.TopContentTxt}>{creator == 0 ? period * stc * 0.02 : period * stc * 0.22} STC</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>거치기간</Text>
                            <Text style={styles.TopContentTxt}>{period}일</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.BottomTitle}>
                        <Text style={styles.BottomTitleTxt}>보상 지급일</Text>
                        <Text style={styles.BottomDateTxt}>{duedate}</Text>
                    </View>
                    <View style={styles.BottomContent}>
                        <View style={styles.FirstBottomContent}>
                            <View style={styles.InnerBottomFirst}>
                                <View style={styles.InnerFirstTitle}>
                                    <Text style={styles.InnerTitleTxt}>지급 회차</Text>
                                </View>
                                <View style={styles.InnerFirstContext}>
                                    <Text style={styles.InnerContextTxt}>상태</Text>
                                    <Text style={styles.InnerContextTxt}>해제일</Text>
                                    <Text style={styles.InnerContextTxt}>원금</Text>
                                    <Text style={styles.InnerContextTxt}>수익</Text>
                                    <Text style={styles.InnerContextTxt}>손실</Text>
                                </View>
                                <View style={styles.InnerUnderFirst}>
                                    <Text style={styles.InnerContextTxt}>수령액</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.RestBottomContent}>
                            <View style={styles.InnerBottomSecond}>
                                <View style={styles.InnerSecondTitle}>
                            <Text style={styles.InnerTitleTxt}>{interval} / {period}</Text>
                                </View>
                                <View style={styles.InnerSecondContext}>
                                    <Text style={styles.InnerContextTxt}>{status == 1 ? '상환예정' : '상환완료'}</Text>
                            <Text style={styles.InnerContextTxt}>{ratedate}</Text>
                                    <Text style={styles.InnerContextTxt}>{period * stc} STC</Text>
                                    <Text style={styles.InnerContextTxt}>{creator == 0 ? period * stc * 0.02 : period * stc * 0.22} STC</Text>
                                    <Text style={styles.InnerContextTxt}>0 STC</Text>
                                </View>
                                <View style={styles.InnerBottomContentUnder}>
                            <Text style={styles.InnerContextTxt}>{creator == 1 ? (stc * period * 0.22) + (stc * period) : (stc * period * 0.02) + (stc * period)} STC</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    // the GetRelatedData function request details of group from REST End-point;
    // And, calculate the period until due-date;
    GetRelatedData = async () => {
        const { groupsid } = this.state;
        try {
            var response = await fetch('http://54.248.0.228:3000/api/rewards/getdetaildatas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ groupsid: groupsid })
            });

            var json = await response.json();
            if (response.ok) {
                var eDate = json.duedate.split('-');
                var rDate = json.ratedate.split('-');

                var ar1 = new Date(eDate[0], eDate[1], eDate[2]);
                var ar2 = new Date(rDate[0], rDate[1], rDate[2]);

                var dif = ar1 - ar2;
                var cDays = 24 * 60 * 60 * 1000;
                var interval = parseInt(dif / cDays);
                this.setState({
                    createdate: json.createdate,
                    duedate: json.duedate,
                    ratedate: json.ratedate,
                    creator: json.creator,
                    period: json.period,
                    stc: json.stc,
                    status: json.status,
                    interval : json.period - interval,
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
    },
    TopContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TopTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: width * 0.9,
        borderColor: '#929292'
    },
    TopTitleTxt: {
        fontSize: 18,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 3,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    TopContentFrom: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    TopContentArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TopContentTxt: {
        fontSize: 12,
        color: '#929292',
        fontWeight: '700',
        marginRight: 5,
        marginLeft: 5,
    },
    BottomContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomTitle: {
        flex: 1,
        flexDirection: 'row',
        width: width * 0.9,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    BottomTitleTxt: {
        fontSize: 15,
        fontWeight: '800'
    },
    BottomDateTxt: {
        fontSize: 15,
        fontWeight: '800',
        color: '#4F79D5'
    },
    BottomContent: {
        flex: 5,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        width: width * 0.9,
        marginBottom : 30,
    },
    FirstBottomContent: {
        width: width * 0.25,
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        elevation : 1,
    },
    InnerBottomFirst : {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    InnerBottomSecond: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
    },
    InnerFirstTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    InnerSecondTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    InnerBottomContentTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    InnerTitleTxt: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    InnerFirstContext : {
        flex: 6,
        flexDirection: 'column',
        alignItems : 'flex-start'
    },
    InnerSecondContext: {
        flex: 6,
        flexDirection: 'column',
        alignItems : 'flex-end'
    },
    InnerContextTxt: {
        marginTop: 5,
        fontSize: 10,
        fontWeight: '600',
        color: '#393939'
    },
    InnerUnderFirst : {
        flex: 2,
        flexDirection : 'row', 
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        borderColor: 'gray',
        borderTopWidth: 1,
    },
    InnerBottomContentUnder: {
        flex: 2,
        flexDirection : 'row', 
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        borderColor: 'gray',
        borderTopWidth: 1,
    },
    RestBottomContent: {
        width: width * 0.25,
        borderRadius: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#EEEEEE',
        elevation : 1,
    },
})

export default NowShowDetailsScreen;
