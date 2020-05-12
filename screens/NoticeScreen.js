import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    TextInput,
    StyleSheet,
    StatusBar
} from 'react-native';
const { width, height } = Dimensions.get('window');

class NoticeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.TopContainer}>
                    <View style={styles.Title}>
                        <Text style={styles.TitleTxt}>공지사항</Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                    </View>
                </View>
                <View style={styles.MiddleContainer}>
                    <View style={styles.Title}>
                        <Text style={styles.TitleTxt}>산타 월렛 소식</Text>
                    </View>
                    <View style={styles.TopContent}>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                    </View>
                </View>
                <View style={styles.BottomContainer}>
                    <View style={styles.Title}>
                        <Text style={styles.TitleTxt}>고객센터</Text>
                    </View>
                    <View style={styles.TopContent}>
                    <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                        <View style={styles.InnerTopContent}>
                            <View style={{ borderWidth: 1, width: width * 0.8, height: width * 0.07 }} />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    TopContainer: {
        flex: 3,
        marginTop: 10,
        marginBottom: 10,
    },
    Title: {
        padding: 10,
    },
    TitleTxt: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    TopContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    InnerTopContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    MiddleContainer: {
        flex: 2,
        marginTop: 10,
        marginBottom: 10,
    },
    BottomContainer: {
        flex: 3,
        marginTop: 10,
        marginBottom: 10,

    }
})
export default NoticeScreen;
