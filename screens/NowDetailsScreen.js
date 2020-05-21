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
                    { id: 1, name: '금모으는계', stc: '100', duedate: '2020.05.14' }, { id: 2, name: '동호회계', stc: '20', duedate: '2020.05.19' }, { id: 3, name: '명품계', stc: '100', duedate: '2020.05.23' }
                ],
                Wating: [
                    { id: 1, name: '자동차계', stc: '80', duedate: '2020.06.18' }, { id: 2, name: '우리계', stc: '10', duedate: '2020.06.19' }
                ],
                Complete: [
                    { id: 1, name: '함께하계', stc: '40', duedate: '2020.05.17' }, { id: 2, name: '사랑하계', stc: '60', duedate: '2020.05.29' }, { id: 3, name: '명품계', stc: '10', duedate: '2020.06.02' }
                ]
            },
            show : null,
        }
    }

    componentDidMount = () => {
        console.log('hi')
        // To Get Participants DBd From SocialAid Server & Divide them into Each Cases.
        // But Reconize that Front-End Request Data of Each Cases When they selected.
        // It means that Front-End Request only Ongoing Datas at first time.
        var dataSet = this.state.dataSet;
        this.setState({
            switch: [
                { isSelected: true },
                { isSelected: false},
                { isSelected: false },
            ],
            dataSet: dataSet,
            show : dataSet.Ongoing
        });
    }


    selectedCates = (num) => {
        console.log(num)
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
                show : dataSet.Ongoing
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
                show : dataSet.Wating
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
                show : dataSet.Complete
            });
        }
    }

    render() {
        console.log('b')
        const props = this.props.navigation;
        const { show } = this.state;
        return (
            <View style={styles.Container}>
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
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{flex : 10}}>
                        <ScrollView>
                            <StatusListUp data={show} navigation={props} />
                        </ScrollView>
                    </SafeAreaView>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>외부 모임</Text>
                        <Text style={styles.CountTxt}>총 X 건</Text>
                    </View>
                    <SafeAreaView style={{flex : 10}}>
                        <ScrollView>
                            {/* <StatusListUp data={show} navigation={this.props.navigation} /> */}
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    TopCotainer: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
    },
    TopTitle: {
        flex : 1,
        justifyContent : 'center'
    },
    TitleTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color : '#4C4C4C',
    },
    TopCateSwitch: {
        flex : 1,
        flexDirection: 'row',
        alignItems : 'center',
    },
    Switch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    BottomContainer: {
        flex: 5,
        paddingRight : 10,
        paddingLeft : 10,
    },
    MyGroup: {
        flex: 1,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingTop : 10,
        paddingBottom : 10,
    },
    MyGroupFont: {
        fontSize: 15,
        fontWeight: '800',
        color : '#4C4C4C'
    },
    CountTxt: {
        fontSize: 12,
        fontWeight: '600',
        color : '#4C4C4C'
    },
    SelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color : '#4C4C4C'
    },
    NonSelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#929292'
    }
})

export default NowDetailsScreen;
