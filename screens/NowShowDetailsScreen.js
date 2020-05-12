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
        this.state = {
            dataSet: [
                { code: '1', name: '금계', shorttxt: '사랑해요', longtxt: '우리의 희망!', symbol: null },
                { code: '2', name: '치킨', shorttxt: '치킨 사먹자', longtxt: '우리의 퓨쳐!', symbol: null },
                { code: '3', name: '자동차', shorttxt: '나의 사랑 자동차', longtxt: '우리의 아이스크림!', symbol: null },
                { code: '4', name: '목돈', shorttxt: '부자됩시다', longtxt: '우리의 예아!!', symbol: null },
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <View style={styles.TopTitle}>
                        <Text style={styles.TopTitleTxt}>계모임 현황</Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>계모임 상태</Text>
                            <Text style={styles.TopContentTxt}>종료</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>계모임 금액</Text>
                            <Text style={styles.TopContentTxt}>xxx STC</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>예상 수익률</Text>
                            <Text style={styles.TopContentTxt}>xxx%</Text>
                        </View>
                        <View style={styles.TopContentArea}>
                            <Text style={styles.TopContentTxt}>거치기간</Text>
                            <Text style={styles.TopContentTxt}>10일</Text>
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
        width: width * 0.9,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    TopTitleTxt: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 3,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    TopContentArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TopContentTxt: {
        fontSize: 12,
        color: 'gray',
        fontWeight: '900'
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
