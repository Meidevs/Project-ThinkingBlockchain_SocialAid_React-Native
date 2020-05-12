import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import ListUp from '../assets/component/ListUp';

class NowDetailsScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopTitle}>
                    <Text style={styles.TitleTxt}>계모임 현황</Text>
                </View>
                <View style={styles.TopCateSwitch}>
                    <View style={styles.Switch}>
                        <View style={{ width: 8, height: 8, backgroundColor: '#293EFF', borderRadius: 5, marginRight: 8, }} />
                        <Text>정상진행중</Text>
                    </View>
                    <View style={styles.Switch}>
                        <View style={{ width: 8, height: 8, backgroundColor: '#FF293F', borderRadius: 5, marginRight: 8, }} />
                        <Text>진행대기중</Text>
                    </View>
                    <View style={styles.Switch}>
                        <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} />
                        <Text>종료</Text>
                    </View>
                </View>
                <View style={styles.AllContent}>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>내 모임</Text>
                    </View>
                    <View style={styles.Count}>
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{flex : 10}}>
                        <ScrollView>
                            <View>
                                <View>
                                    <View>
                                        <View />
                                        <View><Text>대기중</Text></View>
                                    </View>
                                    <View>
                                        <Text>계모임 설명</Text>
                                    </View>
                                    <View>
                                        <Text>계모임 금액</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>계모임 종료 일자</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <View>
                                        <View />
                                        <View><Text>대기중</Text></View>
                                    </View>
                                    <View>
                                        <Text>계모임 설명</Text>
                                    </View>
                                    <View>
                                        <Text>계모임 금액</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>계모임 종료 일자</Text>
                                </View>
                            </View>
                            <View>
                                <View>
                                    <View>
                                        <View />
                                        <View><Text>대기중</Text></View>
                                    </View>
                                    <View>
                                        <Text>계모임 설명</Text>
                                    </View>
                                    <View>
                                        <Text>계모임 금액</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text>계모임 종료 일자</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </SafeAreaView>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>외부 모임</Text>
                    </View>
                    <View style={styles.Count}>
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{flex : 10}}>
                        <ScrollView>

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
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    TopTitle: {
        padding: 15,
        marginLeft: 5,
    },
    TitleTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TopCateSwitch: {
        padding: 15,
        marginLeft: 5,
        flexDirection: 'row',
    },
    Switch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    AllContent: {
        height : height * 0.7,
        padding: 15,
        paddingTop: 5,
    },
    MyGroup: {
        flex : 1,
        marginBottom: 10,
    },
    MyGroupFont: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Count: {
        flex : 1,
        marginLeft: 20,
        marginRight: 20,
    },
    CountTxt: {
        fontSize: 12,
        fontWeight: 'bold'
    }
})

export default NowDetailsScreen;
