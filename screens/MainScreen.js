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
            uri: ['../assets/images/BANNER.png'],
            dataSet: [
                { code: '1', name: '금계', shorttxt: '사랑해요', longtxt: '우리의 희망!', symbol: null },
                { code: '2', name: '치킨', shorttxt: '치킨 사먹자', longtxt: '우리의 퓨쳐!', symbol: null },
                { code: '3', name: '자동차', shorttxt: '나의 사랑 자동차', longtxt: '우리의 아이스크림!', symbol: null },
                { code: '4', name: '목돈', shorttxt: '부자됩시다', longtxt: '우리의 예아!!', symbol: null },
            ]
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
                        <View style={styles.GroupList}>
                            <ListUp data={this.state.dataSet} navigation={this.props.navigation} />
                        </View>
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
        backgroundColor: '#FFFFFF',
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
        paddingRight : 15, //
    },
    titletxt: {
        fontSize: 20,
        fontWeight: 'bold'
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
        fontWeight: 'bold'
    },
    bannerImage: {
    }
})

export default MainScreen;
