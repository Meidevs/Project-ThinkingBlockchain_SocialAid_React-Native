import React from 'react';
import {
    View,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    RefreshControl,
} from 'react-native';

const { width, height } = Dimensions.get('window');
import SwiperComponent from '../assets/component/SwiperComponent';
import ListUp from '../assets/component/ListUp';

class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            uri: [require("../assets/images/main_banner_testimg1.png"), require("../assets/images/main_banner_testimg2.png")],
        }
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.wait(2000).then(() => {
            this.GetGroupList()
            this.setState({ refreshing: false, })
        })
    }
    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
    }

    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            this.GetGroupList();
        });
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    // dark-content, light-content and default
                    hidden={false}
                    //To hide statusBar
                    backgroundColor="#00BCD4"
                    //Background color of statusBar
                    translucent={false}
                    //allowing light, but not detailed shapes
                    networkActivityIndicatorVisible={true}
                />
                <ScrollView
                    style={styles.scrollview}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
                    }
                >
                    <View style={styles.TopContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titletxt}>계모임</Text>
                        </View>
                        <View style={styles.banner}>
                            <SwiperComponent {...this.state} />
                        </View>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.SubTitle}>
                            <Text style={styles.TitleSubTxt}>신규 계모임 상품</Text>
                        </View>
                        <ListUp navigation={this.props.navigation} data={this.state.data} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    GetGroupList = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3000/api/grouplist', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let json = await response.json();
            if (response.ok) {
                this.setState({ data: json })
            }
        } catch (err) {
            console.log(err)
        }
    }
    logout = async () => {
        try {
            await fetch('http://54.248.0.228:3000/api/users/logout', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (err) {
            console.log(err)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        backgroundColor: '#f7f7f7',
    },
    TopContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 150,
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    titletxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4C4C4C'
    },
    banner: {
        flex: 2,
        width: width,
        paddingBottom: 15,
        paddingRight: 15,
        paddingLeft: 15,
    },
    BottomContainer: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SubTitle: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    TitleSubTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#4C4C4C'
    },
    bannerImage: {
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        width: width * 0.5,
        backgroundColor: "#4F79D5",
        borderRadius: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default MainScreen;
