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

const { width, height } = Dimensions.get('window');

class AddSocialScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 10,
        }
    }
    PeriodCallBack = (dataFromChild) => {
        this.EndDateCal(dataFromChild.period)
    }
    EndDateCal = (period) => {
        this.setState({ period: period })
    }
    render() {
        const { period } = this.state;
        return (
            <View style={styles.Container}>
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
                <View style={styles.Header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/images/ico_back.png')} style={{ width: 20, height: 20, margin: 10, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <SafeAreaView>
                    <ScrollView style={styles.Scrollview}>
                        <View style={styles.TopContainer}>
                            <View style={styles.TopTitle}>
                                <Text style={styles.TopTitleTxt}>만들기</Text>
                            </View>
                            <View style={styles.TopContent}>
                                <View style={styles.TopSubTitle}>
                                    <Image source={require('../assets/images/ico_check_blue.png')} style={{ width: 12, height: 12, marginRight: 5, resizeMode: 'contain' }} />
                                    <Text style={styles.TopSubTitleTxt}>기본사항</Text>
                                </View>
                                <View style={styles.TopContentBox}>
                                    <Text style={styles.TopInnerTxt}>계모임명</Text>
                                    <View style={styles.TopContentInputBox}>
                                        <TextInput placeholder={'계모임 명을 입력하세요.'}/>
                                    </View>
                                </View>
                                <View style={styles.TopContentBox_2}>
                                    <View style={styles.TopContent_2InnerBox}>
                                        <Text>기간 (최소 10일 이상)</Text>
                                        <PeriodPicker callback={this.PeriodCallBack} />
                                    </View>
                                    <View style={styles.TopContent_2InnerBox}>
                                        <Text>납입금액 (최대 100STC)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.BottomContainer}>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center'
    },
    Header: {
        width: width,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    Scrollview: {
        flexGrow: 1,
    },
    TopContainer: {
        width: width * 0.94,
        height: height * 0.4,
    },
    TopTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    TopTitleTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4C4C4C',
    },
    TopContent: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    TopSubTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    TopSubTitleTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4F79D5'
    },
    TopContentBox: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    TopContentInputBox: {
        height : width * 0.13,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        marginTop: 5,
    },
    TopInnerTxt: {
        marginBottom: 5,
    },
    TopContentBox_2: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TopContent_2InnerBox: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        backgroundColor: 'red'
    },
    BottomContainer: {
        height: height * 0.6,
    }
})

export default AddSocialScreen;
