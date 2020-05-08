import React from 'react';
import {
    View,
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import SwiperComponent from '../assets/component/SwiperComponent';
import ListUp from '../assets/component/ListUp';

class MainScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            uri: ['../assets/images/BANNER.png'],
            data : [
                {code : '1', name : '금계', shorttxt : '사랑해요', longtxt : '우리의 희망!', symbol : null},
                {code : '2', name : '치킨', shorttxt : '치킨 사먹자', longtxt : '우리의 퓨쳐!', symbol : null},
                {code : '3', name : '자동차', shorttxt : '나의 사랑 자동차', longtxt : '우리의 아이스크림!', symbol : null},
                {code : '4', name : '목돈', shorttxt : '부자됩시다', longtxt : '우리의 예아!!', symbol : null},
            ]
        }
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
                <ScrollView style={styles.scrollview}>
                    <View style={styles.TopContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titletxt}>계모임</Text>
                        </View>
                        <View style={styles.banner}>
                            <SwiperComponent {...this.state} />
                        </View>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titletxt}>신규 계모임 상품</Text>
                        </View>
                        <View style={styles.grouplist}>
                            <ListUp {...this.state} />
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
        height : 200,
        backgroundColor : 'pink'
    },
    title: {
        flexDirection : 'row',
        alignItems : 'center',
        padding : 15, //
    },
    titletxt : {
        fontSize : 20,
        fontWeight : 'bold'
    },
    banner : {
        width : width,
        height : 100,
        padding : 15
    }, 
    BottomContainer: {
        backgroundColor : 'red'
    },
    bannerImage: {

    }
})

export default MainScreen;
