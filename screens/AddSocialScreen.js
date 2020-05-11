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

import DatePicker from '../assets/component/datePicker';

class AddSocialScreen extends React.Component {

    sDateCallBack = (dataFromChild) => {
        console.log(dataFromChild)
    }
    eDateCallBack = (dataFromChild) => {
        console.log(dataFromChild)
    }
    render() {
        return (
            <View style={styles.container}>
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
                            <DatePicker scallback={this.sDateCallBack} />
                        </View>
                        <View style={styles.Content}>
                            <Text>종료 일</Text>
                            <DatePicker ecallback={this.eDateCallBack} />
                        </View>
                        <View style={styles.Content}>
                            <Text>기간</Text>
                        </View>
                        <View style={styles.Content}>
                            <Text>납입 금액</Text>
                            <TextInput></TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View>

                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    PageTitle: {
        flex: 1,
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    TxtTitle : {
        fontSize : 15,
        fontWeight : 'bold'
    },
    TopContainer: {
        flex: 3,
        paddingLeft: 10,
        paddingRight : 10,
        paddingBottom: 10,
        flexDirection: 'column',
        alignItems : 'center',
    },
    SubTitle : {
        paddingLeft : 5,
        paddingRight : 5,
        width : width * 0.9,
        paddingBottom: 10,
        backgroundColor : 'white'
    },
    SubTxtTitle : {
        fontSize : 13,
        fontWeight : 'bold'
    },  
    TopContent : {
        paddingLeft : 15,
        paddingRight : 15,
        width : width * 0.9,
        flexDirection: 'column',
        justifyContent : 'flex-start',
    },
    Content : {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    BottomContainer: {
        flex: 3,
    }
})

export default AddSocialScreen;
