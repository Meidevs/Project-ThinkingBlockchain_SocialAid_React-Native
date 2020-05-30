import React from 'react';
import {
    View,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    RefreshControl
} from 'react-native';
import Constants from 'expo-constants';

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
            this.setState({ refreshing : false, })
        })
    }
    wait = (timeout) => {
        return new Promise(resolve => {
            setTimeout(resolve, timeout);
        });
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
                            <ListUp navigation={this.props.navigation} />
                        </View>
                </ScrollView>
            </SafeAreaView>
        )
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
        flexDirection : 'column',
        alignItems : 'flex-start',
        justifyContent : 'center',
        height: 150,
    },
    title: {
        flex : 1,
        flexDirection: 'row',
        alignItems : 'flex-start',
        paddingTop : 15,
        paddingLeft : 15,
        paddingRight : 15,
    },
    titletxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color : '#4C4C4C'
    },
    banner: {
        flex : 2,
        width: width,
        paddingBottom : 15,
        paddingRight : 15,
        paddingLeft : 15,
    },
    BottomContainer: {
        width : width,
        justifyContent : 'center',
        alignItems : 'center',
    },
    SubTitle : {
        width : width,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        alignItems : 'center',
        paddingTop : 15,
        paddingLeft : 15,
        paddingRight : 15,
    },
    TitleSubTxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color : '#4C4C4C'
    },
    bannerImage: {
    }
})

export default MainScreen;
