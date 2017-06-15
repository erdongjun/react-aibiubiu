import React from 'react';
import './index.less';

import Collection from './../../../components/Common/Collection';
import { formatDate } from '../../../components/Common/Common' ;


class PostItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.showImg =  this.showImg.bind(this);
    }
    showImg(imgurl){
        console.log(imgurl)
        return(
            <img className='postimg' src= {imgurl.imgurl} />
            )
    }
    render() {
        let baseUrl = 'http://www.aibiubiu.com';
        let item = this.props.item;
        let time = formatDate(new Date(parseInt(item.time)*1000));
        var firstimg='';
        if(item.imgArr.length>0){
            firstimg = item.imgArr[0].img;
        }
        let imgurl =  baseUrl+firstimg;

        console.log(imgurl)
        return (
            <div className='PostItemBox'>
                <div className='PostItemtitle'>
                    <img className='userimg' src="http://image.diyidan.net/user/2017/5/28/VG64Xaym08ikwd5K.jpg!tiny" alt=""/>
                    <p>{item.username}
                        <span  className='time fr' >{time}</span>
                    </p>
                </div>
                <div className='PostItemcontent'>
                    {firstimg?this.showImg({imgurl}):''}
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