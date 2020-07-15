import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    VirtualizedList
} from 'react-native'
import { unmountComponentAtNode } from 'react-dom';
const { width, height } = Dimensions.get('window');

//https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container

function Item({ data, navigation }) {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Details', {
                    groupsid: data.groupsid
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.UpperSection}>
                <View style={styles.LeftArea}>
                    <Text style={styles.ItemName}>{data.groupname.length > 22 ? data.groupname.substring(0, 22) + '...' : data.groupname}</Text>
                    <Text style={styles.ItemHost}>{data.host}</Text>
                    <Text style={styles.ItemExpla}>{data.story.length > 30 ? data.story.substring(0, 30) + '...' : data.story}</Text>
                </View>
                <View style={styles.RightArea}>
                    <View style={styles.Circle}>
                        {
                            data.cates == 'C1' ? <Image source={require('../images/pp_travel.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : data.cates == 'C2' ? <Image source={require('../images/pp_luxury.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : data.cates == 'C3' ? <Image source={require('../images/pp_gold.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : <Image source={require('../images/pp_car.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
                        }
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
                <View style={styles.SimplePeriod}>
                    <Image source={require('../images/ico_exmark.png')} style={{ width: width * 0.04, height: width * 0.04, marginTop: 5, marginRight: 5 }} />
                    <Text style={styles.ItemPeriod}>{data.period == 10 ? '투자기간이 짧은 상품입니다.' : data.period == 20 ? '투자기간이 보통인 상품입니다' : '투자기간이 긴 상품입니다.'}</Text>
                </View>
                <Text style={styles.ItemPeriod}>등록 일자 : {data.date}</Text>
            </View>
        </TouchableOpacity>
    )
};

const ListUp = ({ data, navigation }) => {
    return (
        <View>
            <FlatList
                ListHeaderComponent={<></>}
                data={data}
                renderItem={({ item }) => (
                    <Item
                        data={item}
                        navigation={navigation} />
                )}
                keyExtractor={(item) => item.groupsid}
                ListFooterComponent={<></>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
        fontSize: 14,
        color: '#4C4C4C',
        fontWeight: 'bold'
    },
    ItemHost: {
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    DownerSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    },
    SimplePeriod : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start'
    },
    ItemPeriod: {
        fontSize: 12,
        color: '#4C4C4C',
        marginTop: 5
    },
})
export default ListUp;