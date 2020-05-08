import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

import ListUp from '../assets/component/ListUp';

class RegisterScrenn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            uri: ['../assets/images/BANNER.png'],
            dataSet : [
                {code : '1', name : '금계', shorttxt : '사랑해요', longtxt : '우리의 희망!', symbol : null},
                {code : '2', name : '치킨', shorttxt : '치킨 사먹자', longtxt : '우리의 퓨쳐!', symbol : null},
                {code : '3', name : '자동차', shorttxt : '나의 사랑 자동차', longtxt : '우리의 아이스크림!', symbol : null},
                {code : '4', name : '목돈', shorttxt : '부자됩시다', longtxt : '우리의 예아!!', symbol : null},
            ]
        }
    }
    render() {
        return (
            <View>
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
                <Text>Hi</Text>
                <ListUp data={this.state.dataSet} navigation={this.props.navigation}/>
            </View>
        )
    }
}

export default RegisterScrenn;
