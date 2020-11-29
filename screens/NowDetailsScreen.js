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
            },
            show: null,
        }
    }

    componentDidMount = () => {
        // To Get Participants DBd From SocialAid Server & Divide them into Each Cases.
        // But Reconize that Front-End Request Data of Each Cases When they selected.
        // It means that Front-End Request only Ongoing Datas at first time.

        this.GetGroupsWaiting();
        this.setState({
            switch: [
                { isSelected: true },
                { isSelected: false },
                { isSelected: false },
            ],
        });
    }

    // When the user selects one of buttons such as waiting for start, in preogress, end, the selectedCates function finds the selected button and changes the style of the button;
    selectedCates = (num) => {
        if (num == 0) {
            this.GetGroupsWaiting();
            this.state.switch[0].isSelect = true;
            this.state.switch[1].isSelect = false;
            this.state.switch[2].isSelect = false;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
            });
        } else if (num == 1) {
            this.GetGroupsOngoing();
            this.state.switch[0].isSelect = false;
            this.state.switch[1].isSelect = true;
            this.state.switch[2].isSelect = false;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
            });
        } else if (num == 2) {
            this.GetGroupsDone();
            this.state.switch[0].isSelect = false;
            this.state.switch[1].isSelect = false;
            this.state.switch[2].isSelect = true;
            this.setState({
                switch: [
                    { isSelected: this.state.switch[0].isSelect },
                    { isSelected: this.state.switch[1].isSelect },
                    { isSelected: this.state.switch[2].isSelect },
                ],
            });
        }
    }

    render() {
        const props = this.props.navigation;
        const { host, join, hostlen, joinlen } = this.state;
        return (
            <View style={styles.Container}>
                <View style={styles.TopCotainer}>
                    <View style={styles.TopTitle}>
                        <Text style={styles.TitleTxt}>계모임 현황</Text>
                    </View>
                    <View style={styles.TopCateSwitch}>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(0)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#293EFF', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[0].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>진행대기중</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(1)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#64FF5E', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[1].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>진행중</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Switch} onPress={() => this.selectedCates(2)}>
                            <View style={{ width: 8, height: 8, backgroundColor: '#B8B8B8', borderRadius: 5, marginRight: 8, }} />
                            <Text style={this.state.switch[2].isSelected ? styles.SelectedTxt : styles.NonSelectedTxt}>종료</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>내 모임</Text>
                        <Text style={styles.CountTxt}>총 {!hostlen ? 0 : hostlen} 건</Text>
                    </View>
                    <SafeAreaView style={{ flex: 10 }}>
                        <ScrollView>
                            <StatusListUp data={host} navigation={props} />
                        </ScrollView>
                    </SafeAreaView>
                    <View style={styles.MyGroup}>
                        <Text style={styles.MyGroupFont}>외부 모임</Text>
                        <Text style={styles.CountTxt}>총 {!joinlen ? 0 : joinlen} 건</Text>
                    </View>
                    <SafeAreaView style={{ flex: 10 }}>
                        <ScrollView>
                            <StatusListUp data={join} navigation={props} />
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </View>
        )
    }
    // the GetGroupsWaiting function request a list of groups that is waiting for starting from REST End-point;
    GetGroupsWaiting = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/rewards/groupstatus/detail/waiting', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    host: json.host,
                    hostlen: json.host.length,
                    join: json.join,
                    joinlen: json.join.length,
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    // the GetGroupsOngoing function request a list of groups in progress from REST End-point
    GetGroupsOngoing = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/rewards/groupstatus/detail/ongoing', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    host: json.host,
                    hostlen: json.host.length,
                    join: json.join,
                    joinlen: json.join.length,

                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    // the GetGroupsDone function request a list of groups that have been terminated from REST End-point
    GetGroupsDone = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/rewards/groupstatus/detail/done', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    host: json.host,
                    hostlen: json.host.length,
                    join: json.join,
                    joinlen: json.join.length,
                })
            }
        } catch (err) {
            console.log(err)
        }
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
        flex: 1,
        justifyContent: 'center'
    },
    TitleTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4C4C4C',
    },
    TopCateSwitch: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Switch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    BottomContainer: {
        flex: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
    MyGroup: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    MyGroupFont: {
        fontSize: 15,
        fontWeight: '800',
        color: '#4C4C4C'
    },
    CountTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4C4C4C'
    },
    SelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4C4C4C'
    },
    NonSelectedTxt: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#929292'
    }
})

export default NowDetailsScreen;
