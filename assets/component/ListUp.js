import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'

import Swiper from 'react-native-swiper'

class ListUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        }
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity>
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
                <FlatList data={this.state.data} renderItem={this._renderItem} />
            </View>
        )
    }
}

export default ListUp;