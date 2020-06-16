import React, { useImperativeHandle } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    FlatList
} from 'react-native';
import { render } from 'react-dom';
import { getCurrentFrame } from 'expo/build/AR';
const { width, height } = Dimensions.get('window');

class NoticeScreen extends React.Component {
    constructor(props) {
        super(props)
        // Get Notion From Database
        var notion = [
            {
                visible: false, title: null, date: null, wel: null, main: null, end: null
            },
        ];
        this.state = {
            notion: notion,
            show: null,
            dataPerPage: 3,
            currentPage: 1,
            pageCount: 3,
            pageGroup: [],
        }
    }

    componentDidMount = () => {
        this.GetNotice()
    }
    prevPage = (currentPage) => {
        if (currentPage > 1)
            currentPage--;
        this.Paging(currentPage)
    }
    nextPage = (currentPage) => {
        if (currentPage < this.state.totalPage)
            currentPage++;
        this.Paging(currentPage)
    }
    Paging = (currentPage) => {
        var dataSet = this.state.notion;
        // dataPerPage : Number of Data on a Page
        var dataPerPage = this.state.dataPerPage;

        //pageCount : ??
        var pageCount = this.state.pageCount;

        // totalData : Number Of Data.
        var totalData = this.state.notion.length;

        // Total Pages. 
        var totalPage = Math.ceil(totalData / dataPerPage);

        // pageGroup : It means that Notice Page Shows 1 - 3, 4 - 6 numbers of pageGroup.
        // 1 pageGroup is 1 2 3, 
        // 2 pageGroup is 4 5 6
        if (currentPage < 1) {
            currentPage = 1;
        }

        if (currentPage > totalPage) {
            currentPage = totalPage;
        }
        var pageGroup = Math.ceil(currentPage / pageCount)
        var pageGroupArray = new Array();
        var dataArray = new Array();
        var last = pageGroup * 3 >= totalPage ? totalPage : pageGroup * 3;

        for (var i = (pageGroup - 1) * 3; i < last; i++) {
            pageGroupArray.push({ pageNum: i, isSelect: false })
        }
        pageGroupArray[((currentPage + 2) % 3)].isSelect = true;

        //0 - 2, 3 - 5, 6 - 8, 9 - 11,
        var lstdata = totalPage == currentPage ? (totalData) : (currentPage * 3);
        for (var i = (currentPage - 1) * 3; i < lstdata; i++) {
            dataArray.push(dataSet[i])
        }
        this.setState({ pageGroup: pageGroupArray, show: dataArray, totalPage: totalPage, currentPage: currentPage })
    }

    MoreInformation = (data, num) => {
        data.visible = !data.visible;
        var show = this.state.show;
        for (var i = 0; i < show.length; i++) {
            show[num] = data;
        }
        this.setState({ show: show })
    }

    _renderItem = ({ item, index, separators }) => (
        <View>
            <TouchableOpacity style={styles.NoticeContentForm} onPress={() => this.MoreInformation(item, index)}>
                <View style={styles.NoticeTextForm}>
                    <Text style={styles.NoticeTextTxt}>{item.title}</Text>
                    {
                        item.visible == true ? <Image source={require('../assets/images/ico_boardlist_up.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} /> : <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    }
                </View>
                <Text style={styles.NoticeUpTxt}>{item.date}</Text>
            </TouchableOpacity>
            {item.visible == false
                ?
                <View></View>
                :
                <View style={styles.MainTextForm}>
                    <View style={styles.InnerTextForm}>
                        <Text style={styles.TextTxt}>
                            {item.wel}
                        </Text>
                    </View>
                    <View style={styles.InnerTextForm}>
                        <Text style={styles.TextTxt}>
                            {item.sentence_1}
                        </Text>
                        <Text style={styles.TextTxt}>
                            {item.sentence_2}
                        </Text>
                    </View>
                    <View style={styles.InnerTextForm}>
                        <Text style={styles.TextTxt}>
                            {item.bye}
                        </Text>
                    </View>
                </View>
            }
        </View>
    );

    render() {
        const { show, currentPage, pageGroup } = this.state;
        return (
            <SafeAreaView style={styles.Container}>
                <ScrollView>
                    <View style={styles.TopContainer}>
                        <View style={styles.TitleContent}>
                            <Text style={styles.TitleTxt}>공지사항</Text>
                        </View>
                        <FlatList
                            ListHeaderComponent={<></>}
                            data={show}
                            renderItem={({ item, index, separators }) => this._renderItem({ item, index, separators })}
                            keyExtractor={(item) => item.noticeid}
                            ListFooterComponent={<></>}
                        />
                        <View style={styles.PaginationForm}>
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.prevPage(currentPage)}>
                                <Image source={require('../assets/images/ico_arrow_left.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            {
                                pageGroup.map((data, i) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => this.Paging(data.pageNum + 1)}
                                            style={styles.PaginationItem}
                                            key={data.noticeid}
                                        >
                                            <Text style={data.isSelect == true ? { color: '#4F79D5' } : { color: '#4C4C4C' }}>{data.pageNum + 1}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.nextPage(currentPage)}>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }

    GetNotice = async () => {
        try {
            let response = await fetch('http://54.248.0.228:3001/api/getnotice', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            let json = await response.json();
            if (response.ok) {
                this.setState({
                    notion: json
                });
                this.Paging(this.state.currentPage);

            }
        } catch (err) {
            console.log(err)
        }
    }

}
const styles = StyleSheet.create({
    Container: {
        width: width,
        backgroundColor: '#f7f7f7'
    },
    TopContainer: {
        width: width,
    },
    BottomContainer: {
    },
    TitleContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF'
    },
    PaginationForm: {
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        backgroundColor: '#FFFFFF'
    },
    PaginationItem: {
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    NoticeContentForm: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: width,
        height: 70,
        padding: 10,
        marginBottom: 1,
        marginTop: 1,
    },
    NoticeTextForm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    TitleTxt: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4C4C4C'
    },
    NoticeTextTxt: {
        fontSize: 13,
        fontWeight: '800',
        color: '#4C4C4C'
    },
    NoticeUpTxt: {
        fontSize: 12,
        fontWeight: '600',
        color: '#929292'
    },
    MainTextForm: {
        padding: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    InnerTextForm: {
        marginTop: 10,
        marginBottom: 10,
    },
    TextTxt: {
        fontSize: 13,
        fontWeight: '600',
        color: '#4C4C4C'
    }
})
export default NoticeScreen;
