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
        var yArray = new Array();
        var mArray = new Array();
        var dArray = new Array();

        var date = new Date();
        var sYear = date.getFullYear();
        var numYear = parseInt(sYear)
        for (var i = numYear; i <= numYear + 1; i++) {
            yArray.push(i)
        }
        for (var i = 1; i <= 12; i++) {
            mArray.push(i)
        }
        for (var i = 1; i <= 31; i++) {
            dArray.push(i)
        }

        this.state = {
            year: yArray,
            month: mArray,
            day: dArray,
            yNum: '년도',
            mNum: '달',
            dNum: '일',
        }
    }
    onChangeRefreshYear = (itemValue) => {
        var yArray = new Array();
        var mArray = new Array();
        var dArray = new Array();
        var date = new Date();
        var sYear = date.getFullYear();
        var numYear = parseInt(sYear)

        for (var i = numYear; i <= numYear + 1; i++) {
            yArray.push(i)
        }
        for (var i = 1; i <= 12; i++) {
            mArray.push(i)
        }
        for (var i = 1; i <= 31; i++) {
            dArray.push(i)
        }
        this.setState({ year: yArray, month: mArray, day: dArray, yNum: itemValue, mNum: 1, dNum: 1 });
        this.props.callback({ yNum: itemValue, mNum: 1, dNum: 1 });
    }

    onChangeRefreshMonth = (itemValue) => {
        var date = new Date();
        var numYear = parseInt(date.getFullYear());
        var sYear = this.state.yNum;
        var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var nonleapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var pageYear;
        var yArray = new Array();
        var mArray = new Array();
        var dArray = new Array();
        if (sYear % 4 == 0) {
            pageYear = leapYear;
        } else {
            pageYear = nonleapYear;
        }
        for (var i = numYear; i <= numYear + 1; i++) {
            yArray.push(i)
        }
        for (var i = 1; i <= 12; i++) {
            mArray.push(i)
        }
        for (var i = 1; i <= pageYear[parseInt(itemValue) - 1]; i++) {
            dArray.push(i)
        }
        this.setState({ year: yArray, month: mArray, day: dArray, yNum: sYear, mNum: itemValue, dNum: 1 });
        this.props.callback({ yNum: sYear, mNum: itemValue, dNum: 1 });
    }
    onChangeRefreshDay = (itemValue) => {
        var date = new Date();
        var numYear = parseInt(date.getFullYear());
        var sYear = this.state.yNum;
        var sMonth = this.state.mNum;
        var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var nonleapYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var pageYear;
        var yArray = new Array();
        var mArray = new Array();
        var dArray = new Array();
        if (sYear % 4 == 0) {
            pageYear = leapYear;
        } else {
            pageYear = nonleapYear;
        }
        for (var i = numYear; i <= numYear + 1; i++) {
            yArray.push(i)
        }
        for (var i = 1; i <= 12; i++) {
            mArray.push(i)
        }
        for (var i = 1; i <= pageYear[parseInt(sMonth) - 1]; i++) {
            dArray.push(i)
        }
        this.setState({ year: yArray, month: mArray, day: dArray, yNum: sYear, mNum: sMonth, dNum: itemValue });
        this.props.callback({ yNum: sYear, mNum: sMonth, dNum: itemValue });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.date}>
                    <Text>
                        {this.state.yNum}
                    </Text>
                    <Picker
                        selectedValue={this.state.year}
                        mode='dropdown'
                        style={{ height: 50, width: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefreshYear(itemValue)
                        }>
                            <Picker.Item label='년도' value='달' />

                        {this.state.year.map((data, i) => (
                            <Picker.Item label={JSON.stringify(data)} value={JSON.stringify(data)} />
                        ))
                        }
                    </Picker>
                </View>
                <View style={styles.date}>
                    <Text>
                        {this.state.mNum}
                    </Text>
                    <Picker
                        selectedValue={this.state.month}
                        mode='dropdown'
                        style={{ height: 50, width: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefreshMonth(itemValue)
                        }>
                        <Picker.Item label='달' value='달' />
                        {this.state.month.map((data, i) => (
                            <Picker.Item label={JSON.stringify(data)} value={JSON.stringify(data)} />
                        ))
                        }
                    </Picker>
                </View>
                <View style={styles.date}>
                    <Text>
                        {this.state.dNum}
                    </Text>
                    <Picker
                        selectedValue={this.state.day}
                        mode='dropdown'
                        style={{ height: 50, width: 50 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.onChangeRefreshDay(itemValue)
                        }>
                            <Picker.Item label='일' value='일' />
                        {this.state.day.map((data, i) => (
                            <Picker.Item label={JSON.stringify(data)} value={JSON.stringify(data)} />
                        ))
                        }
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