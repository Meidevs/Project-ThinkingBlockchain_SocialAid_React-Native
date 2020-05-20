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
            cates: '자동차',
        }
    }
    onChangeRefresh = (itemValue) => {
        this.setState({cates : itemValue});
        this.props.callback({ cates : itemValue });
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Period}>
                    <Picker
                        selectedValue={this.state.cates}
                        mode='dropdown'
                        style={{ height : width * 0.13, width : width * 0.94, color : '#4C4C4C'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefresh(itemValue)
                        }>
                        <Picker.Item label='자동차' value='car' />
                        <Picker.Item label='금' value='gold' />
                        <Picker.Item label='여행' value='travel' />
                    </Picker>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 5,
        flexDirection: 'row',
    },
    Period: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth : 1,
        borderRadius : 5,
        borderColor : '#E0E0E0',
        backgroundColor : '#FFFFFF',
    }
})

export default CatesPicker;