import React from 'react';
import './index.less';

class CircleHead extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let info = this.props.info;
        let total = this.props.total;
        return (
            <div className='CircleHeadBox'>
                <img src={info.bgurl?'http://www.aibiubiu.com/'+info.bgurl: 'http://www-static.diyidan.net/static/image/part00.jpg?v=9e9164f43a177a932e10207140b47f8e'} className='bgimg' />
                <div className='content '>
                    <div className='circlelogo'>
                        <img src={info.logo?'http://www.aibiubiu.com/'+info.logo: 'http://www-static.diyidan.net/static/image/part00.jpg?v=9e9164f43a177a932e10207140b47f8e'} alt=""/>
                    </div>
                    <p className='circlename'>{info.name}</p>
                    <p className='circleinfo'>{info.info}</p>
                    <p className='circlenum'>
                        <span>成员:{info.members}</span>
                        <span>帖子:{total}</span>
                    </p>
                    <p className='circlesort'>
                        <span><i className='iconfont icon-mcui'></i>NO.{info.vip}</span>
                        <span className='active'><i className='iconfont icon-add'></i>加入</span>
                    </p>
                </div>
            </div>
        )
    }
}




export default CircleHead;