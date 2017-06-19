import React from 'react';
import './common.less';


class Collection extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.changeLike = this.changeLike.bind(this);
        this.changeCollect = this.changeCollect.bind(this);
    }

    changeLike(){
        let item = this.props.item;
        console.log(item)

        let params ={
            postid:item.postid,
            type:'1'
        }
        this.props.handleLike(params);
    }
    changeCollect(){
        let item = this.props.item;
        console.log(item)
        let params ={
            postid:item.postid,
            type:'1'
        }
        this.props.handleCollect(params);
    }

    render() {
        let item = this.props.item;
        if(!item){
            return (
                <div className='clearfix'>
                    <span className="collection" ><i className="iconfont icon-zan_tuijian"></i><em>11</em></span>
                    <span className="collection" ><i className="iconfont icon-shoucang"></i><em>12</em></span>
                    <span className="collection"><i className="iconfont icon-shiping"></i><em>123</em></span>
                </div>
            )

        }
        return (
            <div className='clearfix'>
                <span className="collection" onClick={this.changeLike}><i className={item.islike? "iconfont on icon-zan_tuijian":"iconfont icon-zan_tuijian"}></i><em>{item.like}</em></span>
                <span className="collection"  onClick={this.changeCollect}><i className={item.iscollect?"iconfont on icon-shoucang": "iconfont icon-shoucang"}></i><em>{item.collect}</em></span>
                <span className="collection"><i className="iconfont icon-shiping"></i><em>123</em></span>
            </div>
        )
    }
}




export default Collection;