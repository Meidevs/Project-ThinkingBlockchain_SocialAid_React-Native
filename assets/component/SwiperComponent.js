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

class SwiperComponent extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props.uri)
        // console.log(props.uri.length)
        this.state = {
            uri : props.uri,
            timer: 0,
            img : props.uri[0]
        }
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            const { timer, uri } = this.state;
            if ( timer < uri.length - 1 ) {
                this.setState(({timer}) => ({
                    timer : timer + 1,
                    img : this.state.uri[timer]
                }))
            }
            if (timer === uri.length - 1) {
                this.setState({timer : 0, img : this.state.uri[uri.length - 1]})
            } 
        }, 2000)
    }

    render() {
        const { timer, uri, img } = this.state;
        return (
            <Swiper>
                <View style={styles.slide1}>
                    <Image source={img} style={{width : width * 0.9, resizeMode : 'contain', borderRadius : 5}} />
                </View>
            </Swiper>
        )
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