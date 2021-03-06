import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window');


// The item function makes a each of component that is integrated into StatusListUp function;
function Item({ data, navigation }) {
    return (
        <View style={styles.BtnFrame} >
            <View style={styles.LeftSection}>
                <View style={styles.TitleForm}>
                    <Text style={styles.TitleTxt}>{data.groupname}</Text>
                    {
                        data.status == 0 ?
                            <View style={{ width: 8, height: 8, backgroundColor: '#293EFF', borderRadius: 5, marginRight: 8, }} /> :
                            data.status == 1 ? <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} /> : <View style={{ width: 8, height: 8, backgroundColor: '#FF293F', borderRadius: 5, marginRight: 8, }} />
                                
                    }
                </View>
                <View style={styles.STCForm}>
                    <Image source={require('../images/ico_currentdetail_coin.png')} style={{ width: 14, height: 14, resizeMode: 'contain' }} />
                    <Text style={styles.SubTxt}>{data.stc} STC</Text>
                </View>
                <View style={styles.LineSection}>
                    <Text style={{
                        borderBottomColor: '#F3F3F3',
                        borderBottomWidth: 1,
                        height: 10,
                    }} />
                </View>
                {data.status == 0 ?
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Details', {
                            groupsid: data.groupsid,
                        })
                        }
                        style={styles.DetailsBtnForm}
                    >
                        <View style={styles.DetailsBtnTextForm}>
                            <Text style={styles.SubTxt}>계모임 진행 기간</Text>
                            <Text style={styles.SubTxt}> | </Text>
                            <Text style={styles.SubTxt}>{data.period} 일</Text>
                        </View>
                        <Image source={require('../images/ico_arrow_right.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NowShowDetails', {
                            groupsid: data.groupsid,
                        })
                        }
                        style={styles.DetailsBtnForm}
                    >
                        <View style={styles.DetailsBtnTextForm}>
                            <Text style={styles.SubTxt}>계모임 진행 기간</Text>
                            <Text style={styles.SubTxt}> | </Text>
                            <Text style={styles.SubTxt}>{data.period} 일</Text>
                        </View>
                        <Image source={require('../images/ico_arrow_right.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

// StatusListUp function gets data & navigation parameter from the parentComponent;
// The data has groupname, groupsid, etc..;
const StatusListUp = ({ data, navigation }) => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <Item
                        data={item}
                        navigation={navigation}
                    />
                )}
                keyExtractor={item => item.groupsid}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    BtnFrame: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginTop: 5,
        padding: 10,
    },
    LeftSection: {
        flex: 3,
        flexDirection: 'column',
    },
    TitleForm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 3,
    },
    TitleTxt: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4C4C4C',
    },
    LineSection: {
        flex: 1,
    },
    STCForm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 3,
    },
    DetailsBtnForm: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 3,
        paddingRight: 3,
        paddingLeft: 3,
    },
    DetailsBtnTextForm: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    SubTxt: {
        fontSize: 14,
        fontWeight: '600',
        color: '#929292'
    }
})
export default StatusListUp;