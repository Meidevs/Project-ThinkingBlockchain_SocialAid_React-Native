import React from 'react';
import {
    View,
    TouchableOpacity,
    TextInput,
    StatusBar,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

function MainScreen({ navigation }) {
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
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <Text>BANNER</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>
                    <View>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                        <Text>Content1</Text>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default MainScreen;
