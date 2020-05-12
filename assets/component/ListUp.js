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

//https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container

class ListUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: props.data
        }
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('Details', {
                    item,
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.LeftSection}>
                <Text>No.{item.code}</Text>
                <Text>{item.name}</Text>
                <Text>{item.shorttxt}</Text>
                <Text style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}></Text>
                <Text>{item.longtxt}</Text>
            </View>
            <View style={styles.RightSection}>
                <Text>{item.image}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View>
                <FlatList data={this.state.content} renderItem={this._renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BtnFrame: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        width: width * 0.9,
        elevation: 2,
        borderRadius: 10,
        margin: 10,
        padding: 15,
    },
    LeftSection: {
        flex: 3,
        flexDirection: 'column',
    },
    RightSection: {
        flex: 1,
        backgroundColor: 'black'
    }
})
export default ListUp;