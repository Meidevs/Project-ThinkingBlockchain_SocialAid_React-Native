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
        return (
            <Swiper>
                <View style={styles.slide1}>
                    {link == false ? <View>
                        <Image source={{ uri: img, cache: 'only-if-cached' }} style={{ height: width * 0.3, width: width * 0.9, resizeMode: 'contain', borderRadius: 5 }} />
                    </View> : <TouchableOpacity onPress={() => Linking.openURL(link)}>
                            <Image source={{ uri: img, cache: 'only-if-cached' }} style={{ height: width * 0.3, width: width * 0.9, resizeMode: 'contain', borderRadius: 5 }} />
                        </TouchableOpacity>}

                </View>
            </Swiper>
        )
    }

    // The GetImages function request advertisement images from REST End-point;
    // Set timer to make SwiperComponent;
    GetImages = async () => {
        try {
            var timer = 0;
            let response = await fetch('http://54.248.0.228:3001/api/image/load', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            let json = await response.json();
            if (response.ok) {
                // Set Interval using response from REST End-point;
                // "json.length" means number of ads;
                // Every 3s setInterval function compare timer with json.length - 1;
                // And, increments timer if timer is not equal to json.length - 1;
                // Then, if timer is equal to json.length -1, go back to 0;
                setInterval(() => {
                    if (timer < json.length - 1) {
                        this.setState({
                            img: json[timer].uri,
                            link: json[timer].link
                        })
                    } else if (timer == json.length - 1) {
                        this.setState({
                            img: json[timer].uri,
                            link: json[timer].link
                        })
                    }

                    if (timer != json.length - 1) {
                        timer++;
                    } else {
                        timer = 0;
                    }
                }, 3000)
            }
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