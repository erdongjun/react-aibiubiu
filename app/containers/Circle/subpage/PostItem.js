import React from 'react';
import './index.less';

import Collection from './../../../components/Common/Collection'

class PostItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className='PostItemBox'>
                <div className='PostItemtitle'>
                    <img className='userimg' src="http://image.diyidan.net/user/2017/5/28/VG64Xaym08ikwd5K.jpg!tiny" alt=""/>
                    <p>xifan
                        <span  className='time fr' >1小时前</span>
                    </p>
                </div>
                <div className='PostItemcontent'>
                    <img className='postimg' src="http://image.diyidan.net/post/2017/6/2/lL5n6eC8bB1bj5oA.png!webindex" alt="" />
                    <div className='info'>
                        <p className='subtitle'>氢视频壁纸</p>
                        <p className='subinfo'>分享一款超简单的 氢视频壁纸ヾ(●´∇｀●)ﾉ哇～</p>
                    </div>
                </div>
                <div className='PostItembottom clearfix'>
                    <Collection />
                </div>
            </div>
        )
    }
}




export default PostItem;