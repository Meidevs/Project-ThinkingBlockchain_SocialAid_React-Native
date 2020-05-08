import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Swiper from 'react-native-swiper'

class SwiperComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uri : props.uri,
            timer: 0,
        }
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            const { timer, uri } = this.state;
            if ( timer < uri.length ) {
                this.setState(({timer}) => ({
                    timer : timer + 1
                }))
            }
            if (timer === uri.length) {
                this.setState({timer : 0})
            } 
        }, 1000)
    }

    componentWillMount() {
        clearInterval(this.interval)
    }
    render() {
        const { timer } = this.state;
        return (
            <Swiper style={styles.wrapper}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>{timer}</Text>
                </View>
            </Swiper>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})


export default SwiperComponent;