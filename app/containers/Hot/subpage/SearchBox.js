//core核心依赖
import React, { Component } from 'react';

//框架依赖
import { Input } from 'antd';
const Search = Input.Search;

// 组件依赖

// 引入CSS
import './searchbox.less'

class SearchBox extends Component{
  constructor(props) {
    super(props);
  }
  render(){

    return(
        <div className="searchbox">
            <div  className="searchwrap">
               <input   className="searchinput" placeholder='请输入关键词' type="text" name='key'/>
               <button   className="searchbtn"></button>
            </div>
        </div>
      )
  }
}


export default SearchBox;
