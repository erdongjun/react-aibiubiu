import React from 'react';
import './index.less';

import Collection from './../../../components/Common/Collection';
import { formatDate } from '../../../components/Common/Common' ;


class PostItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let item = this.props.item;
        console.log(parseInt(item.time)*1000)
        let time = formatDate(new Date(parseInt(item.time)*1000));
        return (
            <div className='PostItemBox'>
                <div className='PostItemtitle'>
                    <img className='userimg' src="http://image.diyidan.net/user/2017/5/28/VG64Xaym08ikwd5K.jpg!tiny" alt=""/>
                    <p>{item.username}
                        <span  className='time fr' >{time}</span>
                    </p>
                </div>
                <div className='PostItemcontent'>
                    <img className='postimg' src="http://image.diyidan.net/post/2017/6/2/lL5n6eC8bB1bj5oA.png!webindex" alt="" />
                    <div className='info'>
                        <p className='subtitle'>{item.title}</p>
                        <p className='subinfo'>{item.content}</p>
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