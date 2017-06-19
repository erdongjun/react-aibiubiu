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
import Editor from './../../components/Editor/index'

import { 
    fetchCircle,
    fetchCreactPost
} from '../../actions/circle';
import {
    fetchPostList
} from '../../actions/postlist'

class Circle extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
             current: 1,
             fileList:[]
        }
        this.handlechange = this.handlechange.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleCreactPost = this.handleCreactPost.bind(this);
    }

    componentDidMount() {
        if(!this.props.circle.data||!this.props.circle.state==0||this.props.circle.data.circle.id!=this.props.params.circleid){
            this.props.dispatch(fetchCircle(this.props.params.circleid));
            this.props.dispatch(fetchPostList({id:this.props.params.circleid,limit:10,current:1}));
        }
    }
    handleImgChange({fileList}){
        var fileList = fileList.map((file) => {
          if (file.response) {
            file.url = file.response.data.url;
          }
          return file;
        });
        fileList = fileList.filter((file) => {
          if (file.response) {
            return file.response.state == 0;
          }
          return true;
        });
        this.setState({ fileList });
        console.log(fileList)
    } 
    handleCreactPost(parms){
        let circleid = this.props.params.circleid;
        if(!this.props.userinfo.data && !this.props.userinfo.data.id){
            showError('请登录后发帖!')
            return;
        }
        let userid =  this.props.userinfo.data.id;

        let params = {userid:userid,circleid:circleid,...parms};
        console.log('parms',params);
        this.props.dispatch(fetchCreactPost(params,this.postCb.bind(this)));
    }
    postCb(data){
        if(data.state==0){
            showSuccess('发表成功!')
        }else {
            showError(data.msg)            
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
        let id = this.props.params.circleid;
        let current =  this.state.current;

        this.props.dispatch(fetchPostList({id:id,limit:10,current:current}));

    }
    
    render() {
        const circle = this.props.circle;
        const postlist = this.props.postlist;
        if(postlist.state != 0 || circle.state!=0||this.props.circle.data.circle.id!=this.props.params.circleid){
            return(
                <div className='SpinWrap'>
                    <Spin  size="large"/>
                </div>
            )
        }

        let info = circle.data.circle;
        let list = postlist.data.list;
        let total = parseInt(info.posts);
        return (
            <div className='circleBox'>
                <CircleHead info ={info} />
                <div className='circleContent clearfix'>
                    <div className='circleContentl fl'>
                        <Tabs defaultActiveKey="1" onChange={this.handlechange}>
                            <TabPane tab="全部" key="1">
                                {list.map((item,index)=>{
                                    return(
                                        <PostItem key={index} item={item}/>
                                        )
                                })}
                            <Pagination current={this.state.current} pageSize={10} onChange={this.onChangePage} total={total} />
                            </TabPane>
                            <TabPane tab="热门" key="2">
                                {list.map((item,index)=>{
                                    return(
                                        <PostItem key={index} />
                                        )
                                })}
                            </TabPane>
                        </Tabs>
                        <Editor fileList={this.state.fileList} ParentImgChange={this.handleImgChange} handleCreactPost={this.handleCreactPost}/>
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
    circle:state.circle,
    userinfo:state.userinfo,
    postlist:state.postlist
  }
}

export default connect(mapStateToProps)(Circle);

