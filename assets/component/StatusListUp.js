import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window');

function Item({ data, navigation }) {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('NowShowDetails', {
                    data,
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.LeftSection}>
                <Text>{data.name}</Text>
                <Text>{data.stc}</Text>
                <Text>{data.duedate}</Text>
            </View>
        </TouchableOpacity>
    );
}

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
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    BtnFrame: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginTop: 10,
        padding: 15,
    },
    LeftSection: {
        flex: 3,
        flexDirection: 'column',
    },
    Txt: {
        fontSize: 12,
    }
})
export default StatusListUp;