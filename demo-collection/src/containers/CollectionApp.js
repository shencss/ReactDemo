import React, { Component } from 'react';
import CollectionItem from '../components/CollectionItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { init } from '../reducers/reducer';

class CollectionApp extends Component {

    static propTypes = {
        init: PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            data: {demos: [{"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Quote/index.html", "title":"Quote  小说名言展示应用", "description":"使用JQ + JQ-UI + Ajax"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/BrowseHappy/index.html", "title":"BrowseHappy  主流浏览器版本更新应用", "description":"使用CSS-Sprite"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/CanvasWave/index.html", "title":"CanvasWave  动态波浪动画", "description":"使用Canvas + bezierCurveTo"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/VerticalTimeline/index.html", "title":"VerticalTimeline  响应式垂直时间轴", "description":"使用@media + ::before/::after"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Jigsaw/index.html", "title":"Jigsaw  数字拼图小游戏", "description":"setTimeout + 算法"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/3D方块/index.html", "title":"3DCube  旋转的3D方块", "description":"使用perspective + animation + transform"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/Canvas滤镜/index.html", "title":"CanvasFliter  随机图片滤镜", "description":"使用Canvas + setTimeout"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/便签/index.html", "title":"H5Note  记事小便签", "description":"使用localStorage + form"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/自定义日历/index.html", "title":"H5Calendar  自定义日历", "description":"使用div+css + Date()"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/贝塞尔曲线弹性导航/index.html", "title":"CubicBezier  弹性曲线导航", "description":"使用animation + cubic-bezier + fontawsome"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/便签/index.html", "title":"H5Note  记事小便签", "description":"使用了LocalStorage实现"},
                {"url":"http://htmlpreview.github.io/?https://github.com/shencss/FrontEndDemo/blob/master/便签/index.html", "title":"H5Note  记事小便签", "description":"使用了LocalStorage实现"},
            ]}
        }
    }

    componentWillMount() {
        this.props.initData(this.state.data);
    }

    render() {
        console.log(this.props)
        if (this.props.demos) {
            return(
                <div id="collection-app">
                    <header className="collection-header">
                        <h1>My Collection</h1>
                    </header>
                    <div className="collection-ground">
                        {this.props.demos.map((demo, i) => <CollectionItem demo={demo} key={i} />)}
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
        demos: state.demos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        initData: (data) => {
            dispatch(init(data));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CollectionApp);