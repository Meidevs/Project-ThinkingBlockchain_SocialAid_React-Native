import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
const { width, height } = Dimensions.get('window');

import Swiper from 'react-native-swiper'

const SwiperComponent = ({ data, isLoaded }) => {
    var interval;
    var banners = data;
    var timer = 0;
    var img;
    clearInterval(interval);
    
    if (isLoaded == true) {
        this.interval = setInterval(() => {
            if (timer < banners.length - 1) {
                console.log('a')
                timer++;
                img = banners[timer].uri;
            } else {
                timer = 0;
                img = JSON.stringify(banners[timer].uri);
                console.log(img)

            }
        }, 3000)
    }
    return (
        <Swiper>
            <View style={styles.slide1}>
                <Image source={{ uri: img, cache: 'only-if-cached' }} style={{ height: width * 0.3, width: width * 0.9, resizeMode: 'contain', borderRadius: 5 }} />
            </View>
        </Swiper>
    )
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