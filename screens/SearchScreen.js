import React from 'react';
import {
    View,
    Text,
    TextInput,
    Dimensions,
    Image,
    StatusBar,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Octicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

import CatesPicker from '../assets/component/CatesPicker';

class SearchScrenn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cnt: 0,
            dataSet: [
                { user: null, cates: null, stc: null, days: null },
            ],
        }
    }
    _renderItem = ({ item, index, separators }) => (
        <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('Details', {
                    item,
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.UpperSection}>
                <View style={styles.LeftArea}>
                    <Text style={styles.ItemName}>{item.user.length > 22 ? item.user.substring(0, 22) + '...' : item.user}</Text>
                    <Text style={styles.ItemExpla}>{item.cates.length > 30 ? item.cates.substring(0, 30) + '...' : item.cates}</Text>

                </View>
                <View style={styles.RightArea}>
                    <View style={styles.Circle}>
                        <Text>{item.stc}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.LineSection}>
                <Text style={{
                    borderBottomColor: '#F3F3F3',
                    borderBottomWidth: 1,
                    height: 10,
                }} />
            </View>
            <View style={styles.DownerSection}>
                <Image source={require('../assets/images/ico_exmark.png')} style={{ width: width * 0.04, height: width * 0.04, marginTop: 5, marginRight: 5 }} />
                <Text style={styles.ItemPeriod}>{item.days}</Text>
            </View>
        </TouchableOpacity>
    );
    CreatorCallback = (dataFromChild) => {
        this.EndCal(dataFromChild.users, this.state.cates)
    }
    CateCallBack = (dataFromChild) => {
        this.EndCal(this.state.users, dataFromChild.cates)
    }
    EndCal = (users, cates) => {
        this.setState({ users: users, cates: cates, });
    }
    SearchItems = () => {
        this.setState({
            dataSet: [
                { user: '화성인', cates: '자동차', stc: 100, days: 10 },
                { user: '우주인', cates: '금', stc: 40, days: 20 },
                { user: '외계인', cates: '여행', stc: 80, days: 10 },
                { user: '지구인', cates: '자동차', stc: 100, days: 30 },
                { user: '목성인', cates: '금', stc: 100, days: 30 }
            ]
        })
    }
    render() {
        const { cates, users, dataSet } = this.state;
        console.log('SearchScreen', dataSet)
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
                            <Text style={{ color: '#E0E0E0', fontSize: 20, }}>|</Text>
                            <View style={styles.TextInputArea}>
                                <TextInput placeholder={'계주명'} />
                            </View>
                        </View>
                        <View style={styles.SearchInnerForm}>
                            <TextInput
                                placeholder={'상품명을 입력해주세요'}
                                style={{ alignSelf: 'flex-start' }}
                            />
                            <TouchableOpacity style={{ padding: 8, }} onPress={this.SearchItems}>
                                <Image source={require('../assets/images/ico_search.png')} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.ContentTitle}>
                        <Text style={{ fontSize: 14, fontWeight: '800', color: '#4C4C4C', marginRight: 5, }}>검색결과 총</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#4F79D5' }}>{this.state.cnt}</Text>
                        <Text style={{ fontSize: 14, fontWeight: '800', color: '#4C4C4C' }}>건</Text>
                    </View>
                </View>
                <SafeAreaView style={styles.ScrollArea}>
                    <ScrollView
                        nestedScrollEnabled={true}>
                        {
                            dataSet[0].user == null
                                ? <View></View>
                                :
                                <FlatList
                                    ListHeaderComponent={<></>}
                                    data={dataSet}
                                    renderItem={({ item, index, separators }) => this._renderItem({ item, index, separators })}
                                    keyExtractor={(item, index) => index.toString()}
                                    ListFooterComponent={<></>}
                                />
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor : '#f7f7f7'
    },
    TopTitle: {
        flex: 3,
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
    SearchInnerForm: {
        flex: 1,
        padding: 10,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextInputArea: {
        width: width * 0.8 / 2,
        height: width * 0.08,
        justifyContent: 'center',
        alignContent: 'center',
    },
    ContentTitle: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    ScrollArea: {
        flex : 6
    },
    BtnFrame: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        width: width * 0.9,
        elevation: 2,
        borderRadius: 10,
        margin: 10,
        padding: 15,
    },
    UpperSection: {
        flex: 3,
        flexDirection: 'row',
    },
    LeftArea: {
        flex: 4
    },
    ItemName: {
        fontSize: 12,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },
    ItemExpla: {
        fontSize: 12,
        color: '#929292'
    },
    RightArea: {
        flex: 1,
        alignItems: 'center',
    },
    LineSection: {
        flex: 1,
    },
    Circle: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderRadius: 60,
    },
    DownerSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ItemPeriod: {
        fontSize: 12,
        color: '#4C4C4C',
        marginTop: 5
    },
})

export default SearchScrenn;
