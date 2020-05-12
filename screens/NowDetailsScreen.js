import React from 'react';
import {
    View,
    Dimensions,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import StatusListUp from '../assets/component/StatusListUp';
import { TouchableOpacity } from 'react-native-gesture-handler';

class NowDetailsScreen extends React.Component {
    constructor(props) {
        super(props)

        //Get Participated Group List

        this.state = {
            switch: [
                {
                    isSelected: true,
                },
                {
                    isSelected: false,
                },
                {
                    isSelected: false,
                },
            ],
            dataSet: {
                Ongoing: [
                    { id: 1, name: '계모임 명1', stc: '계모임 금액1', duedate: '계모임 종료 일자1' }, { id: 2, name: '계모임 명', stc: '계모임 금액', duedate: '계모임 종료 일자' }
                ],
                Wating: [
                    { id: 1, name: '계모임 명2', stc: '계모임 금액2', duedate: '계모임 종료 일자2' }, { id: 2, name: '계모임 명', stc: '계모임 금액', duedate: '계모임 종료 일자' }
                ],
                Complete: [
                    { id: 1, name: '계모임 명3', stc: '계모임 금액3', duedate: '계모임 종료 일자3' }, { id: 2, name: '계모임 명', stc: '계모임 금액', duedate: '계모임 종료 일자' }
                ]
            },
        }
    }

    selectedCates = (num) => {
        var dataSet = this.state.dataSet;
        if (num == 0) {
            this.state.switch[0].isSelect = true;
            this.state.switch[1].isSelect = false;
            this.state.switch[2].isSelect = false;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
                dataSet: dataSet,
            });
        } else if (num == 1) {
            this.state.switch[0].isSelect = false;
            this.state.switch[1].isSelect = true;
            this.state.switch[2].isSelect = false;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
                dataSet: dataSet,
            });
        } else if (num == 2) {
            this.state.switch[0].isSelect = false;
            this.state.switch[1].isSelect = false;
            this.state.switch[2].isSelect = true;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
                dataSet: dataSet,
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopCotainer}>
                    <View style={styles.TopTitle}>
                        <Text style={styles.TitleTxt}>계모임 현황</Text>
                    </View>
                    <View style={styles.TopCateSwitch}>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(0)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#293EFF', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[0].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>정상진행중</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(1)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#FF293F', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[1].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>진행대기중</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(2)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[2].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>종료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>내 모임</Text>
                    </View>
                    <View style={styles.Count}>
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{ flex: 10 }}>
                        <ScrollView>
                            <StatusListUp data={this.state} />
                        </ScrollView>
                    </SafeAreaView>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>외부 모임</Text>
                    </View>
                    <View style={styles.Count}>
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{ flex: 10 }}>
                        <ScrollView>
                            <StatusListUp data={this.state} />
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    TopCotainer: {
        flex: 1,
    },
    TopTitle: {
        padding: 15,
        marginLeft: 5,
    },
    TitleTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    TopCateSwitch: {
        padding: 15,
        marginLeft: 5,
        flexDirection: 'row',
    },
    Switch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    BottomContainer: {
        flex: 4,
        padding: 15,
        paddingTop: 5,
    },
    MyGroup: {
        flex: 1,
        marginBottom: 10,
    },
    MyGroupFont: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Count: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    CountTxt: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    SelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    NonSelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'gray'
    }
})

export default NowDetailsScreen;
