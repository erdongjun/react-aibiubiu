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


import { 
    fetchCircle,
} from '../../actions/circle';

class Circle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
             current: 1,
        }

        this.handlechange = this.handlechange.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        if(!this.props.circle.data||!this.props.circle.state==0||this.props.circle.data.circle.id!=this.props.params.circleid){
            this.props.dispatch(fetchCircle(this.props.params.circleid))
        }
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
        const circle = this.props.circle;
        var list  = new Array(10);
        list.fill(1);

        if(circle.state!=0||this.props.circle.data.circle.id!=this.props.params.circleid){
            return(
                <div className='SpinWrap'>
                    <Spin  size="large"/>
                </div>
            )
        }
        let info = circle.data.circle

        return (
            <div className='circleBox'>
                <CircleHead info ={info}/>
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
                                <span className='grader' data-id={info.userid}>{info.username}</span>
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



function mapStateToProps(state,ownProps){
  return {

    circle:state.circle

  }
}

export default connect(mapStateToProps)(Circle);

