import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    StatusBar,
    StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

import DatePicker from '../assets/component/DatePicker';
import PeriodPicker from '../assets/component/PeriodPicker';
import { createIconSetFromFontello } from '@expo/vector-icons';

class AddSocialScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 10,
        }
    }
    DateCallBack = (dataFromChild) => {
        this.EndDateCal(dataFromChild.yNum, dataFromChild.mNum, dataFromChild.dNum, this.state.period)
    }
    PeriodCallBack = (dataFromChild) => {
        this.EndDateCal(this.state.year, this.state.month, this.state.day, dataFromChild.period)
    }
    EndDateCal = (year, month, day, period) => {
        var date = new Date(year, month - 1, day);
        var after = new Date(date.getTime() + (period * 24 * 60 * 60 * 1000));

        var setYear = after.getFullYear();
        var setMonth = after.getMonth() + 1;
        var setDay = after.getDate();
        this.setState({ year: year, month: month, day: day, setYear: setYear, setMonth: setMonth, setDay: setDay, period: period })
    }
    render() {
        const { year, month, day, period } = this.state;
        console.log(year, month, day, period)
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
                <View style={styles.PageTitle}>
                    <Text style={styles.TxtTitle}>
                        만들기
                    </Text>
                </View>
                <View style={styles.TopContainer}>
                    <View style={styles.SubTitle}>
                        <Text style={styles.SubTxtTitle}>
                            기본 사항
                        </Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.Content}>
                            <Text>계모임 명</Text>
                            <TextInput
                                placeholder='40자 이내로 작성해주세요'
                                maxLength={45}
                            />
                        </View>
                        <View style={styles.Content}>
                            <Text>시작 일</Text>
                            <DatePicker callback={this.DateCallBack} />
                        </View>
                        <View style={styles.Content}>
                            <Text>기간</Text>
                            <PeriodPicker callback={this.PeriodCallBack} />
                        </View>
                        <View style={styles.Content}>
                            <Text>종료 일</Text>
                            <Text>{this.state.setYear}</Text>
                            <Text>{this.state.setMonth}</Text>
                            <Text>{this.state.setDay}</Text>
                        </View>
                        <View style={styles.Content}>
                            <Text>납입 금액</Text>
                            <TextInput></TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.SubTitle}>
                        <Text style={styles.SubTxtTitle}>
                            기본 사항
                        </Text>
                    </View>
                    <View style={styles.BottomContent}>
                        <View style={styles.Content}>
                            <Text>카테고리</Text>
                        </View>
                        <View style={styles.Content}>
                            <Text>목적</Text>
                        </View>
                        <View style={styles.ContentCal}>
                            <Text>수익 계산</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.CreateBtn}>
                    <TouchableOpacity style={styles.BtnDesign}>
                        <Text>계모임 만들기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    PageTitle: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    TxtTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    TopContainer: {
        flex: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    SubTitle: {
        paddingLeft: 5,
        paddingRight: 5,
        width: width * 0.9,
        paddingBottom: 10,
    },
    SubTxtTitle: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    TopContent: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    Content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ContentCal : {
        flex : 1,
        flexDirection : 'row',
        alignItems : 'flex-start',
        justifyContent : 'flex-end'
    },  
    BottomContainer: {
        flex: 3,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    BottomContent: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        width: width * 0.9,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    CreateBtn : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
    },
    BtnDesign : {
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderRadius : 10,
        width : width * 0.6,
        height : width * 0.1       
    }
})

export default AddSocialScreen;
