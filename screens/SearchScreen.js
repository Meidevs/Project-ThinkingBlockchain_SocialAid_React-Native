import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Button,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { Octicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');
import ListUp from '../assets/component/ListUp';
import { TouchableOpacity } from 'react-native-gesture-handler';

class RegisterScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [
                { code: '1', name: '금계', shorttxt: '금을 모으자', longtxt: '부자됩시다', symbol: null },
                { code: '2', name: '치킨', shorttxt: '치킨 사먹자', longtxt: '치킨은 역시', symbol: null },
                { code: '3', name: '자동차', shorttxt: '나의 사랑 자동차', longtxt: '드림카', symbol: null },
                { code: '4', name: '목돈', shorttxt: '저축', longtxt: '저축', symbol: null },
            ]
        }
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
                {/* <ListUp data={this.state.dataSet} navigation={this.props.navigation}/> */}
                <View style={styles.TopTitle}>
                    <View style={styles.TopContent}>
                        <Text style={styles.TopContentTxt}>어떤 상품을</Text>
                        <Text style={styles.TopContentTxt}>찾으시나요?</Text>
                    </View>
                    <View style={styles.SearchFrom}>
                        <View style={styles.SearchIconArea}>
                            <Octicons name='search' size={15} />
                        </View>
                        <View style={styles.SearchArea}>
                            <View style={styles.Cates}>
                                <Text>카테고리</Text>
                            </View>
                            <View style={styles.Owners}>
                                <Text>계주명</Text>
                            </View>
                            <View style={styles.InputArea}>
                                <TextInput placeholder={'검색어를 입력해주세요'}/>
                            </View>
                            <View style={styles.InputArea}>
                                <TouchableOpacity>
                                    <Text>검색</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ContentArea}>

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
    TopTitle: {
        flex: 1,
        padding: 15,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    TopContent: {
        flexDirection: 'column',
        marginBottom: 15,
    },
    TopContentTxt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    SearchFrom: {
        width: width * 0.9,
        height : 40,
        flexDirection: 'row',
    },
    SearchIconArea: {
        padding: 10,
    },
    SearchArea: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#2D67C4',
        flexDirection: 'row',
    },
    ContentArea: {
    },
    Cates : {
        marginRight : 10,
    },
    Owners : {
        marginRight : 10,
    },
    InputArea : {
        marginRight : 10,
    }
})

export default RegisterScrenn;
