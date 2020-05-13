import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

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
            <View style={styles.Container}>
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
                <View>
                    <Text>산타 월렛 API 요청 정보 입력</Text>
                </View>
                <View>
                    
                </View>
                <View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container : {
        flex : 1,
    }
})

export default RegisterScrenn;
