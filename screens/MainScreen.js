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

class MainScreen extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            uri: ['../assets/images/BANNER.png']
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
