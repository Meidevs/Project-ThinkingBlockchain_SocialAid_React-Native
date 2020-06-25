import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Linking
} from 'react-native'
const { width, height } = Dimensions.get('window');

import Swiper from 'react-native-swiper'
import { TouchableOpacity } from 'react-native-gesture-handler';

class SwiperComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: null,
        }
    }
    componentDidMount() {
        this.GetImages();
    }

    render() {
        const { img, link } = this.state;
        console.log(img)
        return (
            <Swiper>
                <View style={styles.slide1}>
                    <TouchableOpacity onPress={() => Linking.openURL(link)}>
                        <Image source={{ uri: img, cache: 'only-if-cached' }} style={{ height: width * 0.3, width: width * 0.9, resizeMode: 'contain', borderRadius: 5 }} />
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
    GetImages = async () => {
        try {
            var timer = 0;
            const uri = [{ uri: 'http://localhost:3001/images/1593051842697.png', link: 'https://www.naver.com/' }, { uri: 'http://localhost:3001/images/1593051848880.png', link: 'https://www.google.co.kr/' }]
            setInterval(() => {
                if (timer < uri.length - 1) {
                    this.setState({
                        img: uri[timer].uri,
                        link: uri[timer].link
                    })
                } else if (timer == uri.length - 1) {
                    this.setState({
                        img: uri[timer].uri,
                        link: uri[timer].link
                    })
                }
                if (timer != uri.length - 1) {
                    timer++;
                } else {
                    timer = 0;
                }
            }, 3000)
        } catch (err) {
            console.log(err)
        }
    }
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


export default SwiperComponent;