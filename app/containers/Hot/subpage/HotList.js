//core核心依赖
import React, { Component } from 'react';
//框架依赖
// 组件依赖

// 引入less
import './hotlist.less';

class HotList extends Component{
  constructor(props) {
    super(props);
    this.handleJump = this.handleJump.bind(this)

  }

  handleJump(id){
    console.log(id)
    this.props.jumpCircle(id)
  }
  render(){
    let list = this.props.list;
    console.log(list);
    
    return(
        <div className="hotwrap">
          <div className="hotlist">
            {list.map((item,index)=>{
             let id = item.id;
              return(
                <div key={index} className="hotitem"  onClick={()=>{this.handleJump(id)}}>
                  <img  className="hotimg" src={item.logo?'http://www.aibiubiu.com'+item.logo:'http://www.aibiubiu.com/Public/Uploads/2017-05-31/592e75b1e7bdd.jpg'} />
                  <p className="title">{item.name}</p>
                  <p className="count"><span><em>成员:</em>{item.members}</span><span><em>作品:</em>{item.posts}</span></p>
                  <div className="join">加入</div>
                </div>
                )
            })}
            <div className='clearboth'></div>
          </div>
        </div>
      )
  }
}


export default HotList;
