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
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.14', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.15', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.16', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.17', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.18', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.19', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.20', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.21', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.22', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.23', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.24', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.25', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.26', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.27', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.28', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.29', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.30', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                visible: false, title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.31', wel: '안녕하세요. 소셜에이드입니다.', main: '서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다.',
                end: '소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
        ];
        this.state = {
            notion: notion,
            show: null,
            dataPerPage: 5,
            currentPage: 1,
            pageCount: 3,
        }
    }

    componentDidMount = () => {
        this.Paging(this.state.currentPage);
    }

    Paging = (currentPage) => {
        if (currentPage == 'next') {
            currentPage = this.state.currentPage + 1
        }
        if (currentPage == 'prev') {
            currentPage = this.state.currentPage - 1
        }
        if (currentPage <= 0) {
            currentPage = 1;
        }
        var dataSet = this.state.notion;
        var dataPerPage = this.state.dataPerPage;
        var pageCount = this.state.pageCount;
        var totalData = this.state.notion.length;
        var totalPage = Math.ceil(totalData / dataPerPage);
        var pageGroup = Math.ceil(currentPage / pageCount)

        var rawArray = new Array();

        var last = pageGroup * pageCount;
        var middle = last - 1;
        var first = last - (pageCount - 1);
        if (last > totalPage) {
            last = totalPage
            if (last % 3 == 1) {
                first = undefined
            }
            middle = undefined
        }
        for (var i = (currentPage - 1) * 5; i <= (currentPage * 5) - 1; i++) {
            rawArray.push(dataSet[i])
        }
        var fArray = rawArray.filter(Boolean)
        this.setState({ notion: dataSet, show: fArray, first: first, middle: middle, last: last, currentPage: currentPage })

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
        const { notion, show, first, middle, last, currentPage } = this.state;
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
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.Paging('prev')}>
                                <Image source={require('../assets/images/ico_arrow_left.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.Paging(first)}
                                style={styles.PaginationItem}
                            >
                                <Text>{this.state.first}</Text>
                            </TouchableOpacity><TouchableOpacity
                                onPress={() => this.Paging(middle)}
                                style={styles.PaginationItem}
                            >
                                <Text>{this.state.middle}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.Paging(last)}
                                style={styles.PaginationItem}
                            >
                                <Text>{this.state.last}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem} onPress={() => this.Paging('next')}>
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
    InnerTextForm : {
        marginTop : 10,
        marginBottom : 10,
    },
    TextTxt : {
        fontSize : 13,
        fontWeight : '600',
        color : '#4C4C4C'
    }
})
export default NoticeScreen;
