import React from 'react';
import './index.less';

class CircleHead extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className='CircleHeadBox'>
                <img src='http://www-static.diyidan.net/static/image/part00.jpg?v=9e9164f43a177a932e10207140b47f8e' className='bgimg' />
                <div className='content '>
                    <div className='circlelogo'>
                        <img src="http://image.diyidan.net/user/2017/4/24/U8hklQfLuTDsw6dR.jpg!tiny" alt=""/>
                    </div>
                    <p className='circlename'>cos</p>
                    <p className='circleinfo'>欢迎cosplay同好，打破次元墙～！</p>
                    <p className='circlenum'>
                        <span>成员:2222222</span>
                        <span>帖子:2222222</span>
                    </p>
                    <p className='circlesort'>
                        <span><i className='iconfont icon-mcui'></i>NO.9999</span>
                        <span className='active'><i className='iconfont icon-add'></i>加入</span>
                    </p>
                </div>
            </div>
        )
    }
}




export default CircleHead;