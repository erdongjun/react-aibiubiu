import React from 'react'
import { Link ,hashHistory} from 'react-router';

import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux';


import {showSuccess,showError} from '../../components/Common/Common';
import './index.less';

class CreateCate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount() {
        if(!this.props.userinfo.data||!this.props.userinfo.data.id){
            hashHistory.push({pathname:'/'})
         }
    }
    componentWillReceiveProps(nextProps) {
        if(!nextProps.userinfo.data||!nextProps.userinfo.data.id){
            hashHistory.push({pathname:'/'})
         }
    }
    render() {
        return (
            <div className='createcateBox'>
                <div className='cont'>
                	<div className='item'>
                        <div className='post'>
                            <span className='title'>标题: </span>
                            <input type="text" placeholder="完善标题将利于您的内容被发现" />
                            <span className="applybtn">申请原创</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>标签: </span>
                            <input type="text" placeholder="完善标题将利于您的内容被发现" />
                            <span className='ml10'>最多只能有5个标签哟</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state,ownProps){
  return {
    userinfo:state.userinfo,
  }
}

export default connect(mapStateToProps)(CreateCate);