import React, { Component } from 'react';
import CollectionItem from '../components/CollectionItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init, addCollection } from '../reducers/reducer';

class CollectionApp extends Component {

    static propTypes = {
        init: PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            data: {collections: [{"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Quote/index.html", "title":"Quote  小说名言展示应用", "description":"使用JQ + JQ-UI + Ajax"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/BrowseHappy/index.html", "title":"BrowseHappy  主流浏览器版本更新应用", "description":"使用CSS-Sprite"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/CanvasWave/index.html", "title":"CanvasWave  动态波浪动画", "description":"使用Canvas + bezierCurveTo"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/VerticalTimeline/index.html", "title":"VerticalTimeline  响应式垂直时间轴", "description":"使用@media + ::before/::after"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Jigsaw/index.html", "title":"Jigsaw  数字拼图小游戏", "description":"setTimeout + 算法"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/3D方块/index.html", "title":"3DCube  旋转的3D方块", "description":"使用perspective + animation + transform"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Canvas滤镜/index.html", "title":"CanvasFliter  随机图片滤镜", "description":"使用Canvas + setTimeout"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/便签/index.html", "title":"H5Note  记事小便签", "description":"使用localStorage + form"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/自定义日历/index.html", "title":"H5Calendar  自定义日历", "description":"使用div+css + Date()"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/贝塞尔曲线弹性导航/index.html", "title":"CubicBezier  弹性曲线导航", "description":"使用animation + cubic-bezier + fontawsome"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/3D翻页/index.html", "title":"3DPage  3D翻页", "description":"使用perspective + animation + transform"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/待办清单/index.html", "title":"Todos  待办清单", "description":"使用localStorage + JQ"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/照片阴影/index.html", "title":"PhotoShaow 自定义阴影", "description":"使用::before/::after伪元素"},
            ]},
            url: '',
            title: '',
            description: '',
            addCollection: false,
            buttonStyle: {}
        }
    }

    componentWillMount() {
        this.props.initData(this.state.data);
    }

    handleOnChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleOnSubmit() {
        if (!this.state.addCollection) {
            this.setState({
                addCollection: true,
                buttonStyle: {bottom: '20px',top: '70%', marginTop: '0'}
            });
        }
        if (this.state.url !== '' && this.state.title !== '' && this.state.description !== '') {
            const newCollection = {url: this.state.url, title: this.state.title, description: this.state.description};
            this.props.addCollection(newCollection);
            this.setState({
                url: '',
                title: '',
                description: '',
                addCollection: false,
                buttonStyle: {}
            });
        }
    }


    render() {
        if (this.props.collections) {
            return(
                <div id="collection-app">
                    <header className="collection-header">
                        <h1>My Collection</h1>
                    </header>
                    <div className="collection-ground">
                        {this.props.collections.map((collection, i) => <CollectionItem collection={collection} key={i} />)}
                        <div className="collection-form">
                            <div style={this.state.addCollection ? {} : {opacity: '0'}} >
                                <label htmlFor="url">请输入URL</label>
                                <input name="url" type="text" value= {this.state.url} onChange={this.handleOnChange.bind(this)} />
                                <label htmlFor="title">请输入标题</label>
                                <input name="title" type="text" value= {this.state.title} onChange={this.handleOnChange.bind(this)} />
                                <label htmlFor="description">请输入描述文字</label>
                                <textarea name="description" value= {this.state.description} type="text"onChange={this.handleOnChange.bind(this)} />
                            </div>
                            <input type="submit"  style={this.state.buttonStyle} value="+" onClick={this.handleOnSubmit.bind(this)} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        collections: state.collections
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        initData: (data) => {
            dispatch(init(data));
        },
        addCollection: (collection) => {
            dispatch(addCollection(collection));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CollectionApp);