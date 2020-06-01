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
        var dataSet = props.route.params.data;
        this.state = {
            status: dataSet.d,
            stc: dataSet.stc,
            days: dataSet.days
        }
    }
    render() {
        const { status, stc, days } = this.state;
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
                                <Text style={styles.TopContentTxt}>종료</Text>
                                {
                                    status == 1 ?
                                        (<View style={{ width: 8, height: 8, backgroundColor: '#293EFF', borderRadius: 5, marginRight: 8, }} />) :
                                        status == 2 ? (<View style={{ width: 8, height: 8, backgroundColor: '#FF293F', borderRadius: 5, marginRight: 8, }} />) :
                                            <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} />
                                }
                            </View>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>계모임 금액</Text>
                            <Text style={styles.TopContentTxt}>{stc} STC</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>예상 수익률</Text>
                            <Text style={styles.TopContentTxt}>{ days == 10 ? 2 : days == 20 ? 4 : 6 }%</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>거치기간</Text>
                            <Text style={styles.TopContentTxt}>{days}일</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>상환방식</Text>
                            <Text style={styles.TopContentTxt}>만기상환</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.BottomTitle}>
                        <Text style={styles.BottomTitleTxt}>상환순서</Text>
                    </View>
                    <SafeAreaView style={styles.ScrollArea}>
                        <ScrollView style={styles.BottomContent} horizontal>
                            <View style={styles.FirstBottomContent}>
                                <View style={styles.InnerBottomContent}>
                                    <View style={styles.InnerBottomContentTitle}>
                                        <Text style={styles.InnerBottomContentTitleTxt}>지급 회차</Text>
                                    </View>
                                    <View style={styles.InnerBottomContentContext}>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                    </View>
                                    <View style={styles.InnerBottomContentUnder}>
                                        <Text style={styles.InnerBottomContentContextTxt}>수령액</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.RestBottomContent}>
                                <View style={styles.InnerBottomContent}>
                                    <View style={styles.InnerBottomContentTitle}>
                                        <Text style={styles.InnerBottomContentTitleTxt}>합계</Text>
                                    </View>
                                    <View style={styles.InnerBottomContentContext}>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                        <Text style={styles.InnerBottomContentContextTxt}>상태</Text>
                                    </View>
                                    <View style={styles.InnerBottomContentUnder}>
                                        <Text style={styles.InnerBottomContentContextTxt}>수령액</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.RestBottomContent}>

                            </View>
                            <View style={styles.RestBottomContent}>

                            </View>
                            <View style={styles.RestBottomContent}>

                            </View>
                        </ScrollView>
                    </SafeAreaView>
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
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TopTitle: {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'flex-start',
        width: width * 0.9,
        borderColor: '#929292'
    },
    TopTitleTxt: {
        fontSize: 18,
        color : '#4C4C4C',
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 3,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    TopContentFrom : {
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center'
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
        marginRight : 5,
        marginLeft : 5,
    },
    BottomContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    BottomTitle: {
        flex: 1,
        width: width * 0.9,
        justifyContent: 'center'
    },
    BottomTitleTxt: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    ScrollArea: {
        flex: 5,
        marginLeft: 10,
    },
    BottomContent: {
        marginBottom: 60,
    },
    FirstBottomContent: {
        width: width * 0.25,
        borderRadius: 15,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    InnerBottomContent: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
    },
    InnerBottomContentTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    InnerBottomContentTitleTxt: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    InnerBottomContentContext: {
        flex: 6,
        flexDirection: 'column',
    },
    InnerBottomContentContextTxt: {
        marginTop: 5,
        fontSize: 10,
        fontWeight: '800',
        color: 'gray'
    },
    InnerBottomContentUnder: {
        flex: 2,
        borderColor: 'gray',
        borderTopWidth: 1,
    },
    RestBottomContent: {
        width: width * 0.25,
        borderRadius: 15,
        margin: 10,
        backgroundColor: '#EEEEEE'
    },
})

export default NowShowDetailsScreen;
