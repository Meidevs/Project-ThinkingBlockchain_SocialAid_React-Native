import React, { Component, useState } from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const { width, height } = Dimensions.get('window');

class PeriodPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            period: 10,
        }
    }
    onChangeRefresh = (itemValue) => {
        this.setState({period : itemValue});
        this.props.callback({ period : itemValue });
    }
    render() {
        return (
            <View style={styles.Container}>
                <View style={styles.Period}>
                    <Picker
                        selectedValue={this.state.period}
                        mode='dropdown'
                        style={{ height : width * 0.13, width: width * 0.8/2, color : '#4C4C4C'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefresh(itemValue)
                        }>
                        <Picker.Item label='10일' value='10' />
                        <Picker.Item label='20일' value='20' />
                        <Picker.Item label='30일' value='30' />
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

export default PeriodPicker;