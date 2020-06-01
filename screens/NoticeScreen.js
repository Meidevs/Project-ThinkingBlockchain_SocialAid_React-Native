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
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
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
        this.Paging(this.state.currentPage);
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
        var last = pageGroup * 3 > totalPage ? totalPage : pageGroup * 3;
        for (var i = (pageGroup - 1) * 3; i < last; i++) {
            pageGroupArray.push(i)
        }

        // 9 > 8  8 == 8 
        for (var i = (currentPage - 1) * 3; i < (currentPage * 3); i++) {
            dataArray.push(dataSet[i])
        }
        this.setState({ pageGroup: pageGroupArray, show: dataArray, totalPage : totalPage, currentPage : currentPage })
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
                    <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
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
                            {item.main}
                        </Text>
                    </View>
                    <View style={styles.InnerTextForm}>
                        <Text style={styles.TextTxt}>
                            {item.end}
                        </Text>
                    </View>
                </View>
            }
        </View>
    );

    render() {
        const { show, currentPage, pageGroup } = this.state;
        console.log(currentPage)
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
                            keyExtractor={(item, index) => index.toString()}
                            ListFooterComponent={<></>}
                        />
                        <View style={styles.PaginationForm}>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_first.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.prevPage(currentPage)}>
                                <Image source={require('../assets/images/ico_arrow_left.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            {
                                pageGroup.map((a, i) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => this.Paging(a + 1)}
                                            style={styles.PaginationItem}
                                        >
                                            <Text>{a + 1}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.nextPage(currentPage)}>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_last.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
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
