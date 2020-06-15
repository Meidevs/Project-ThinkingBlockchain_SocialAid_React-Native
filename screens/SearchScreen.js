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
            scates : null,
            dataSet: [],
            cates : []
        }
    }
    _renderItem = ({ item, index, separators }) => (
        <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('Details', {
                    groupsid: item.groupsid
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.UpperSection}>
                <View style={styles.LeftArea}>
                    <View style={styles.MakeRow}>
                        <Text style={styles.ItemName}>계주명</Text>
                        <Text style={styles.ItemName}>{item.host}</Text>
                    </View>
                    <View style={styles.MakeRow}>
                        <Text style={styles.ItemExpla}>계 목적</Text>
                        <Text style={styles.ItemExpla}>{item.cates}</Text>
                    </View>
                </View>
                <View style={styles.RightArea}>
                    <Text style={styles.ItemName}>일일 납입 STC</Text>
                    <Text style={styles.ItemExpla}>{item.stc} STC</Text>
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
                <Text style={styles.ItemPeriod}>
                    {item.period == 10 ? '10일의 짧은 기간동안 진행되는 계모임입니다.' : item.period == 20 ? '20일의 보통 기간 동안 진행되는 계모임입니다.' : '30일의 장기간 동안 진행되는 계모임입니다.'}
                </Text>
            </View>
        </TouchableOpacity>
    );
    CateCallBack = (dataFromChild) => {
        this.setState({ cates : this.state.cates, scates: dataFromChild});
    }
    componentDidMount() {
        this.GetCates()
    }

    render() {
        const { cates, users, dataSet } = this.state;
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
                            <CatesPicker data={cates} props={width * 0.94 / 2} callback={this.CateCallBack} />
                            <Text style={{ color: '#E0E0E0', fontSize: 20, }}>|</Text>
                            <View style={styles.TextInputArea}>
                                <TextInput
                                    placeholder={'계주명'}
                                    onChangeText={(name) => this.setState({ name: name })}
                                />
                            </View>
                        </View>
                        <View style={styles.SearchInnerForm}>
                            <TextInput
                                placeholder={'상품명을 입력해주세요'}
                                style={{ alignSelf: 'flex-start' }}
                                onChangeText={(groupname) => this.setState({ groupname: groupname })}
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
                            dataSet == undefined
                                ? <View></View>
                                :
                                <FlatList
                                    ListHeaderComponent={<></>}
                                    data={dataSet}
                                    renderItem={({ item, index, separators }) => this._renderItem({ item, index, separators })}
                                    keyExtractor={(item) => item.groupsid}
                                    ListFooterComponent={<></>}
                                />
                        }
                    </ScrollView>
                </SafeAreaView>
            </View>
        )
    }

    SearchItems = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/search', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    catesid: this.state.scates,
                    name: this.state.name,
                    groupname: this.state.groupname,
                })
            })

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    dataSet: json
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    GetCates = async () => {
        try {
            const response = await fetch('http://54.248.0.228:3001/api/getcates', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json();
            if (response.ok) {
                this.setState({ cates: json })
            }
        } catch (err) {
            console.log(err)
        }
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#f7f7f7'
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
        flex: 6
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    MakeRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    ItemName: {
        padding: 5,
        fontSize: 12,
        color: '#4C4C4C',
        fontWeight: '700'
    },
    ItemExpla: {
        padding: 5,
        fontSize: 12,
        color: '#929292'
    },
    RightArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
