import React, { Component, useState } from 'react'
import {
    View,
    Dimensions,
    StyleSheet
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const { width, height } = Dimensions.get('window');

const PeriodPicker = ({ data, props, callback }) => {
    const [code, setValue] = useState(code)
    const onChangeRefresh = (code) => {
        setValue(code)
        callback(code)
    }
    return (
        <View style={styles.Container}>
            <View style={styles.Period}>
            <Picker
                selectedValue={code}
                mode='dropdown'
                style={{ width : props, color: '#4C4C4C'}}
                onValueChange={(itemValue) => onChangeRefresh(itemValue)
                }>
                <Picker.Item label='기간' value='period' />
                {data.map((data) => {
                    return (
                        <Picker.Item key={data.periodid} label={data.label} value={data.period} />
                    )
                })}
            </Picker>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 5,
        flexDirection : 'row'
    },
    Period: {
        height : width * 0.13,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#E0E0E0',
        backgroundColor: '#FFFFFF',
        padding: 10,
        color: '#4C4C4C'
    }
})

export default PeriodPicker;