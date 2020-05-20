import React, { Component, useState } from 'react'
import {
    View,
    Picker,
    Dimensions,
    StyleSheet
} from 'react-native'
const { width, height } = Dimensions.get('window');

class CatesPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width : props.props,
            cates: '자동차',
        }
    }
    onChangeRefresh = (itemValue) => {
        console.log('a', itemValue)
        this.setState({cates : itemValue});
        this.props.callback({ cates : itemValue });
    }
    render() {
        return (
            <View style={styles.Container}>
                    <Picker
                        selectedValue={this.state.cates}
                        mode='dropdown'
                        style={{ height : width * 0.13, width : this.state.width, color : '#4C4C4C'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefresh(itemValue)
                        }>
                        <Picker.Item label='자동차' value='car' />
                        <Picker.Item label='금' value='gold' />
                        <Picker.Item label='여행' value='travel' />
                    </Picker>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 5,
        flexDirection: 'row',
    },
})

export default CatesPicker;