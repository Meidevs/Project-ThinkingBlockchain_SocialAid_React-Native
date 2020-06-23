import React, { Component, useState } from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';
const { width, height } = Dimensions.get('window');

const CatesPicker = ({ data, props, callback}) => {
    const [code, setValue ] = useState(code)
    const onChangeRefresh = (code) => {
        setValue(code)
        callback(code)
    }
    return (
        <View style={styles.Container}>
            <Picker
                selectedValue={code}
                mode='dropdown'
                style={{ height: width * 0.13, width: props, color: '#4C4C4C' }}
                onValueChange={(itemValue) => onChangeRefresh(itemValue)
                }>
                <Picker.Item label='카테고리' value='cates' />
                {data.map((data) => {
                    return (
                        <Picker.Item key={data.catesid} label={data.name} value={data.catesid} />
                    )
                })}
            </Picker>
        </View >
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 5,
        flexDirection: 'row',
    },
})

export default CatesPicker;