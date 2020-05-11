import React, { Component, useState } from 'react'
import {
    View,
    Picker,
    Text,
    StyleSheet
} from 'react-native'

class DatePicker extends React.Component {
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
            <View style={styles.container}>
                <View style={styles.date}>
                    <Text>
                        {this.state.period}일
                    </Text>
                    <Picker
                        selectedValue={this.state.period}
                        mode='dropdown'
                        style={{ height: 50, width: 50 }}
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
    container: {
        flexDirection: 'row',
    },
    date: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DatePicker;