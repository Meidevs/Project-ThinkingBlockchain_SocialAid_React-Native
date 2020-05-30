import React, { Component, useState } from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';
const { width, height } = Dimensions.get('window');

class CatesPicker extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: props.props,
            cates: []
        }
    }

    componentDidMount = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/getcates', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let json = await response.json();
            if (response.ok) {
                this.setState({ cates: json })
            }
        } catch (err) {
            console.log(err)
        }
    }

    onChangeRefresh = (code) => {
        this.setState({ code : code });
        this.props.callback({ cates: code });
    }
    render() {
        return (
            <View style={styles.Container}>
                <Picker
                    selectedValue={this.state.code}
                    mode='dropdown'
                    style={{ height: width * 0.13, width: this.state.width, color: '#4C4C4C' }}
                    onValueChange={(itemValue, itemIndex) =>
                        this.onChangeRefresh(itemValue)
                    }>
                    <Picker.Item label='카테고리' value='cates' />
                    {this.state.cates.map((data) => {
                        return (
                            <Picker.Item label={data.name} value={data.catesid} />
                        )
                    })}
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