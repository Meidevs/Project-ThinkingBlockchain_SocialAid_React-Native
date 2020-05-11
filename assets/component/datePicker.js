import React, { Component, useState } from 'react'
import {
    View,
    Picker
} from 'react-native'

function DatePicker() {

    var date = new Date();
    var sYear = date.getFullYear();
    var sMonth = parseInt(date.getMonth() + 1);

    var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var nonleapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var pageYear;

    if (sYear % 4 == 0) {
        pageYear = leapYear;
    } else {
        pageYear = nonleapYear;
    }

    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{height: 50, width : 50}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label='java' value='java' />
                <Picker.Item label='javaScript' value='js' />
                <Picker.Item label='Nodejs' value='node' />

            </Picker>
        </View >
    )
}

export default DatePicker;