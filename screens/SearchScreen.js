import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Button,
    StatusBar,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

import ListUp from '../assets/component/ListUp';
import CatesPicker from '../assets/component/CatesPicker';

class SearchScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSet: [
                { code: '1', name: '금계', shorttxt: '금을 모으자', longtxt: '부자됩시다', symbol: null },
                { code: '2', name: '치킨', shorttxt: '치킨 사먹자', longtxt: '치킨은 역시', symbol: null },
                { code: '3', name: '자동차', shorttxt: '나의 사랑 자동차', longtxt: '드림카', symbol: null },
                { code: '4', name: '목돈', shorttxt: '저축', longtxt: '저축', symbol: null },
            ],
            cates: '카테고리'
        }
    }

    CateCallBack = (dataFromChild) => {
        this.EndCal(dataFromChild.cates)
    }

    EndCal = (cates) => {
        this.setState({ cates: cates, });
    }
    render() {
        const { cates } = this.state;
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
                {/* <ListUp data={this.state.dataSet} navigation={this.props.navigation}/> */}
                <View style={styles.TopTitle}>

                    <View style={styles.TopContent}>
                        <Text style={styles.TopContentTxt}>어떤 상품을 찾으시나요?</Text>
                    </View>
                    <View style={styles.SearchFrom}>
                        <View style={styles.SearchInnerForm}>
                            <CatesPicker props={width * 0.8 / 2} callback={this.CateCallBack} />
                            <Text style={{color : '#929292', fontSize : 20,}}>|</Text>
                            <CatesPicker props={width * 0.8 / 2} callback={this.CateCallBack} />
                        </View>
                        <View style={styles.SearchInnerForm}>
                            <TextInput placeholder={'검색어를 입력해주세요'} />
                            <View style={styles.SearchIconArea}>
                                <Octicons name='search' size={15} />
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
    Container: {
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
        fontSize: 18,
        color: '#4C4C4C',
        fontWeight: 'bold',
    },
    SearchFrom: {
        width: width * 0.9,
        height: width * 0.3,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    SearchInnerForm : {
        flex : 1,
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'flex-start',
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
})

export default SearchScrenn;
