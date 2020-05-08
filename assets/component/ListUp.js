import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

//https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container

class ListUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: props.data
        }
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>
            <View>
                <Text>No.{item.code}</Text>
                <Text>{item.name}</Text>
                <Text>{item.shorttxt}</Text>
                <Text>{item.longtxt}</Text>
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

export default ListUp;