import React from 'react';
import { Link ,hashHistory} from 'react-router';
import {connect} from 'react-redux';
import {Spin} from 'antd';

import {showSuccess,showError} from '../../components/Common/Common';

// 通用组件
import SearchBox from './subpage/SearchBox';
import HotList from './subpage/HotList';

import './index.less';

import { 
    fetchHot
    } from '../../actions/hot'
class Hot extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.jumpCircle = this.jumpCircle.bind(this);
    }
    componentDidMount() {
        if(!this.props.hot.data||!this.props.hot.state==0){
            this.props.dispatch(fetchHot())
        }
    }
    jumpCircle(id){
        hashHistory.push({pathname:'/circle/'+id})
    }
    render() {
        let hot = this.props.hot;
        if(hot.state!=0){
            return(
                <div className='SpinWrap'>
                    <Spin  size="large"/>
                </div>
            )
        }
        let list = hot.data.list;
        return (
            <div>
                <SearchBox />
                <HotList  list={list} jumpCircle={this.jumpCircle} />
            </div>
        )
    }
}

function mapStateToProps(state,ownProps){
  return {
    userinfo:state.userinfo,
    hot:state.hot
  }
}

export default connect(mapStateToProps)(Hot);
