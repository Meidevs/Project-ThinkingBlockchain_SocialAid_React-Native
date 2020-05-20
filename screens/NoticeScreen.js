import React from 'react';
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
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.11', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.12', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.13', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.14', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.15', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            {
                title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.16', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            },
            // {
            //     title: '안녕하세요. 소셜에이드 공지사항 게시판입니다.', date: '2020.05.17', main: '안녕하세요. 소셜에이드입니다. 서비스 품질개선을 위한 교육 및 인력 보강 등의 사유로 고객 경험팀의 고객 응대가 일시적으로 지연될 수 있으니 많은 양해 부탁드립니다. 소셜 에이드를 이용하시는 모든 고객의 서비스 만족을 위해 최선을 다하겠습니다'
            // },
        ];
        this.state = {
            notion: notion,
            dataPerPage: 3,
            currentPage: 1,
            pageCount: 3,
        }
    }

    componentDidMount = () => {
        this.Paging(this.state.currentPage);
    }

    Paging = (currentPage) => {
        console.log(currentPage)
        var dataSet = this.state.notion;
        var dataPerPage = this.state.dataPerPage;
        var pageCount = this.state.pageCount;
        var totalData = this.state.notion.length;
        var totalPage = Math.ceil(totalData / dataPerPage);
        var pageGroup = Math.ceil(currentPage / pageCount)
        console.log('pageGroup', pageGroup)
        console.log('totalPage', totalPage)

        var rawArray = new Array();

        var last = pageGroup * pageCount;
        var first = last - (pageCount - 1);
        console.log('last', last)
        console.log('first', first)

        for (var i = first - 1; i <= first + 1; i++) {
            rawArray.push(dataSet[i])
        }
        if (totalPage != 3) {
            last = totalPage
        }
        // if (last > totalPage) {
        //     last = totalPage;
        // }
        this.setState({ notion: dataSet, show: rawArray, first: first, last: last })
    }
    componentJSX = () => {
        console.log('in Comp first', this.state.first)
        const items = [];
        for (var i = this.state.first; i <= this.state.last; i++) {
            console.log('i', i)
            items.push(
                <TouchableOpacity
                    onPress={this.Paging(i)}
                    style={styles.PaginationItem}
                >
                    <Text>{i}</Text>
                </TouchableOpacity>
            )
        }
        return items;
    }
    render() {
        const { notion, first, last, currentPage } = this.state;
        return (
            <SafeAreaView style={styles.Container}>
                <ScrollView>
                    <View style={styles.TopContainer}>
                        <View style={styles.TitleContent}>
                            <Text style={styles.TitleTxt}>공지사항</Text>
                        </View>
                        <TouchableOpacity style={styles.NoticeContentForm} onPress={this.OpenContent}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.NoticeContentForm}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.NoticeContentForm}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <View style={styles.PaginationForm}>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_first.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_left.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            {this.componentJSX()}

                            {/* <TouchableOpacity
                                onPress={() => this.Paging(first)}
                                style={styles.PaginationItem}
                            >
                                <Text>{this.state.first}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
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
                            </TouchableOpacity> */}
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_right.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_last.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.BottomContainer}>
                        <View style={styles.TitleContent}>
                            <Text style={styles.TitleTxt}>산타 월렛 소식</Text>
                        </View>
                        <TouchableOpacity style={styles.NoticeContentForm}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.NoticeContentForm}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.NoticeContentForm}>
                            <View style={styles.NoticeTextForm}>
                                <Text style={styles.NoticeTextTxt}>안녕하세요. 소셜에이드 공지사항 게시판입니다.</Text>
                                <Image source={require('../assets/images/ico_boardlist_down.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </View>
                            <Text style={styles.NoticeUpTxt}>2020.05.11</Text>
                        </TouchableOpacity>
                        <View style={styles.PaginationForm}>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_first.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Image source={require('../assets/images/ico_arrow_left.png')} style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Text>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Text>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
                                <Text>3</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.PaginationItem}>
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
    }
})
export default NoticeScreen;
