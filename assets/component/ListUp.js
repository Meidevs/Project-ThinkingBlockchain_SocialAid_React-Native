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

class ListUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: props.data
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
                    <Text style={styles.ItemName}>{item.name.length > 22 ? item.name.substring(0, 22) + '...' : item.name}</Text>
                    <Text style={styles.ItemExpla}>{item.shorttxt.length > 30 ? item.shorttxt.substring(0, 30) + '...' : item.shorttxt}</Text>

                </View>
                <View style={styles.RightArea}>
                    <View style={styles.Circle}>
                        <Text>{item.image}</Text>
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
                <Text style={styles.ItemPeriod}>{item.longtxt}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View>
                <FlatList
                    ListHeaderComponent={<></>}
                    data={this.state.content}
                    renderItem={({ item, index, separators }) => this._renderItem({ item, index, separators })}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={<></>}
                />
            </View>
        )
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
export default ListUp;