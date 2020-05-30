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
const { width, height } = Dimensions.get('window');

//https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container

function Item({ data, navigation }) {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Details', {
                    data,
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.UpperSection}>
                <View style={styles.LeftArea}>
                    <Text style={styles.ItemName}>{data.name.length > 22 ? data.name.substring(0, 22) + '...' : data.name}</Text>
                    <Text style={styles.ItemExpla}>{data.shorttxt.length > 30 ? data.shorttxt.substring(0, 30) + '...' : data.shorttxt}</Text>

                </View>
                <View style={styles.RightArea}>
                    <View style={styles.Circle}>
                        {
                            data.symbol == '자동차' ? <Image source={require('../images/pp_car.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : data.symbol == '금' ? <Image source={require('../images/pp_gold.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : data.symbol == '명품' ? <Image source={require('../images/pp_luxury.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> : <Image source={require('../images/pp_travel.png')} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
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
                <Image source={require('../images/ico_exmark.png')} style={{ width: width * 0.04, height: width * 0.04, marginTop: 5, marginRight: 5 }} />
                <Text style={styles.ItemPeriod}>{data.longtxt}</Text>
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
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={<></>}
            />
        </View>
    )
}

GetItemList = async () => {
    try {
        let response = await fetch ('http://localhost:3000/api/grouplist', {
            method : 'GET',
            credentials : 'include',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        let json = await response.json();

        if (response.ok) {
            this.set
        }
    } catch (err) {
        console.log(err)
    }
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
        alignItems: 'center'
    },
    ItemPeriod: {
        fontSize: 12,
        color: '#4C4C4C',
        marginTop: 5
    },
})
export default ListUp;