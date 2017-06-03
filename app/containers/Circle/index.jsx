import React from 'react';
import { Link ,hashHistory} from 'react-router';
import {connect} from 'react-redux';
import { Spin,Tabs,Pagination} from 'antd';
const TabPane = Tabs.TabPane;


import {showSuccess,showError} from '../../components/Common/Common';
import './index.less';

import CircleHead from './subpage/CircleHead'
import CircleContent from './subpage/CircleContent'
import PostItem from './subpage/PostItem'
import Rranking from './../../components/Common/Rranking'


class Circle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
             current: 1,
        }

        this.handlechange = this.handlechange.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }
    handlechange(key){
        console.log(key)
    }
    onChangePage (page) {
        console.log(page);
        this.setState({
            current: page,
        });
    }
    render() {
        var list  = new Array(10);
        list.fill(1);
        console.log(this.props.params.circleid)
        
        return (
            <div className='circleBox'>
                <CircleHead />
                <div className='circleContent clearfix'>
                    <div className='circleContentl fl'>
                        <Tabs defaultActiveKey="1" onChange={this.handlechange}>
                            <TabPane tab="全部" key="1">
                                {list.map((item,index)=>{
                                    return(
                                        <PostItem key={index} />
                                        )
                                })}
                            <Pagination current={this.state.current} pageSize={20} onChange={this.onChangePage} total={50} />
                            </TabPane>
                            <TabPane tab="热门" key="2">
                                {list.map((item,index)=>{
                                    return(
                                        <PostItem key={index} />
                                        )
                                })}
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className='circleContentr fl'>
                        <div className='CircleOwner'>
                            <div className='first'>
                                <span className='grade'>圈主</span>
                                <span className='grader'>xifan</span>
                            </div>
                            <div  className='second'>
                                <span className='grade'>圈管</span>
                                <span className='grader'><em>xifan</em> <em>xifan</em></span>
                            </div>
                        </div>
                        <Rranking />
                    </div>

                </div>
            </div>
        )
    }
}




export default Circle;