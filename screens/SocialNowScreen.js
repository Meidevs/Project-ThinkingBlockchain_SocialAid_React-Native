import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';
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
            <SafeAreaView style={styles.container}>
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
                    style={styles.scrollview}
                >
                    <View style={styles.TopContainer}>
                        <View style={styles.TopContentUpper}>
                            <View style={styles.TopContentTxt}>
                                <View style={styles.Content}>
                                    <Text style={styles.TopTxt}>
                                        계 현황
                                    </Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.SubTopTxt}>
                                        전체 계모임 금액
                                    </Text>
                                    <Text style={styles.TopTxt}>
                                        XXXXX STC
                                    </Text>
                                </View>
                                <View style={styles.Content}>
                                    <Text style={styles.SubTopTxt}>
                                        예상 수익률
                                    </Text>
                                    <Text style={styles.TopTxt}>
                                        수익률%
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.TopContentDowner}>
                            <ScrollView
                                nestedScrollEnabled={true}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                horizontal={true}
                                style={{ paddingVertical: 10 }}
                            >
                                <View style={styles.SubDetails}>
                                    <View style={styles.SubContent}>
                                        <Text style={styles.SubContentTxt}>총 누적계</Text>
                                    </View>
                                    <Text style={styles.TopTxt}>1</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <View style={styles.SubContent}>
                                        <Text style={styles.SubContentTxt}>누적 수익</Text>
                                    </View>
                                    <Text style={styles.TopTxt}>2</Text>
                                </View>
                                <View style={styles.SubDetails}>
                                    <View style={styles.SubContent}>
                                        <Text style={styles.SubContentTxt}>누적 상환 계</Text>
                                    </View>
                                    <Text style={styles.TopTxt}>3</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.BottomUpperContent}>
                            <TouchableOpacity style={styles.BottomFirstBox} onPress={() => this.props.navigation.navigate('NowDetails')}>
                                <Text style={styles.BottomContentTxt}>계모임 현황</Text>
                                <View style={styles.FirstBoxBtn}>
                                    <Text style={styles.BottomContentTxt}>총 X 건</Text>
                                    <Text style={styles.BottomContentTxt}>></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.BottomMiddleContent}>
                            <View style={styles.BottomSecondBox}>
                                <View style={styles.BottomTitleBox}>
                                    <View style={{ flexDirection: 'column', flex: 4, }}>
                                        <Text style={styles.BottomContentTxt}>상환 내역</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', flex: 1, }}>
                                        <View style={styles.BottomTitleBox}>
                                            <TouchableOpacity onPress={() => this.switchBtn(0)}>
                                                <Text style={this.state.styles[0].isSelect ? styles.txtPressed : styles.txtNotPressed}>월간</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.switchBtn(1)}>
                                                <Text style={this.state.styles[1].isSelect ? styles.txtPressed : styles.txtNotPressed}>연간</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.BottomSubDetailBox}>
                                    <View>
                                        <Text style={styles.SubDetailTxt}>x 월 수령액</Text>
                                        <Text style={{ color: '#2D67C4', fontSize: 12, fontWeight: '800' }}>xxxx STC</Text>
                                    </View>
                                </View>
                                <View style={styles.BottomGraphBox}>
                                    {this.state.styles[0].isSelect ?
                                        (
                                                <View style={styles.MonthlyGraph}>
                                                    {this.state.dataSet[0].month.map((data, i) => (
                                                        <View style={{ flexDirection: 'column', flex: 1, }}>
                                                            <View style={{ height: data * 2, backgroundColor: '#BBCEEC', margin: 5, }}>
                                                            </View>
                                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                <Text style={{ fontSize: 8, color: '#BBCEEC' }}>
                                                                    {i}
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
                            </View>
                        </View>
                        <View style={styles.BottomLowerContent}>
                            <View style={styles.BottomThirdBox}>

                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
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
    TopContainer: {
        flex: 1,
        backgroundColor: '#7A8CAB',
        height: 300,
    },
    TopContentUpper: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 15,
    },
    TopContentTxt: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    Content: {
        paddingBottom: 10
    },
    SubTopTxt: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    TopTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    TopContentDowner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    SubDetails: {
        backgroundColor: '#284678',
        width: 120,
        height: 60,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3,
    },
    SubContent: {
        padding: 5,
    },
    SubContentTxt: {
        fontSize: 12,
        color: '#FFFFFF'
    },
    BottomContainer: {
        height: 600,
        top: -20,
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
    FirstBoxBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    BottomSubDetailBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    SubDetailTxt: {
        fontSize: 12,
        fontWeight: '800'
    },
    BottomGraphBox: {
        flex: 10,
    },
    BottomLowerContent: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    BottomContentTxt: {
        fontSize: 15,
        fontWeight: '800',
    },
    txtNotPressed: {
        fontSize: 15,
        color: 'gray',
        fontWeight: '800'
    },
    txtPressed: {
        fontSize: 15,
        color: 'black',
        fontWeight: '800'
    },
    MonthlyGraph: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
    }
})
export default SocialNowScreen;
