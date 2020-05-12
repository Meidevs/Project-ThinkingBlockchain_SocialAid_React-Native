import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native'
const { width, height } = Dimensions.get('window');

//https://stackoverflow.com/questions/58243680/react-native-another-virtualizedlist-backed-container

class StatusListUp extends React.Component {
    constructor(props) {
        super(props)
        var rawArray = new Array();
        var switchData = props.data.switch;
        var dataSet = props.data.dataSet;
        for (var i = 0; i < switchData.length; i++) {
            if (switchData[i].isSelected == true) {
                if (i == 0) {
                    rawArray.push(dataSet.Complete)
                } else if (i == 1) {
                    rawArray.push(dataSet.Ongoing)
                } else {
                    rawArray.push(dataSet.Wating)
                }
            } 
        }
        
        this.state = {
            content: rawArray[0]
        }
    }

    _renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() =>
                this.props.navigation.navigate('NowShowDetails', {
                    item,
                })
            }
            style={styles.BtnFrame}
        >
            <View style={styles.LeftSection}>
                <Text style={styles.Txt}>No.{item.id}</Text>
                <Text style={styles.Txt}>{item.name}</Text>
                <Text style={styles.Txt}>{item.stc}</Text>
                <Text style={styles.Txt}>{item.duedate}</Text>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View>
                <FlatList data={this.state.content} renderItem={this._renderItem} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    BtnFrame: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        padding: 15,
    },
    LeftSection: {
        flex: 3,
        flexDirection: 'column',
    },
    Txt : {
        fontSize : 12,
    }
})
export default StatusListUp;