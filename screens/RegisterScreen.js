import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Button,
    StyleSheet
} from 'react-native';

class RegisterScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: [
                { isSelect: true, },
                { isSelect: false, }
            ]
        }
    }

    switchBtn = (num) => {
        if (num == 0) {
            this.state.styles[0].isSelect = true;
            this.state.styles[1].isSelect = false;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        } else if (num == 1) {
            this.state.styles[0].isSelect = false;
            this.state.styles[1].isSelect = true;
            this.setState({
                styles: [
                    { isSelect: this.state.styles[0].isSelect },
                    { isSelect: this.state.styles[1].isSelect },
                ]
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
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
                <View style={styles.TopContainer}>
                    <View style={styles.switchBtnContainer}>
                        <View>
                            <TouchableOpacity onPress={() => this.switchBtn(0)}>
                                <Text style={this.state.styles[0].isSelect ? styles.txtPressed : styles.txtNotPressed}>산타월렛 기가입자</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>  |  </Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => this.switchBtn(1)}>
                                <Text style={this.state.styles[1].isSelect ? styles.txtPressed : styles.txtNotPressed}>산타월렛 미가입자</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    {this.state.styles[0].isSelect ?
                        (
                            <View>
                                <Text>Hi1</Text>
                            </View>
                        ) : (
                            <View>
                                <Text>Hi2</Text>
                            </View>
                        )
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    TopContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    BottomContainer: {
        flex: 9,
        backgroundColor: '#FFFFFF'
    },
    txtNotPressed: {
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold'
    },
    txtPressed: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default RegisterScrenn;
