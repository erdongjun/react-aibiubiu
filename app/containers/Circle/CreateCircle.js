import React from 'react'
import { Link ,hashHistory} from 'react-router';

import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux';

import { Select,Upload, Icon, Modal,Button ,Spin} from 'antd';
const Option = Select.Option;
import {showSuccess,showError} from '../../components/Common/Common';
import './index.less';
import { 
    fetchGetCate,
    fetchCreateCircle,
    } from '../../actions/catelist'



class CreateCate extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            cateId:'',
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: -1,
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleCreateCircle = this.handleCreateCircle.bind(this);
    }
    componentDidMount() {
        // if(!this.props.userinfo.data||!this.props.userinfo.data.id){
        //     hashHistory.push({pathname:'/'})
        //  }
        this.props.dispatch(fetchGetCate())
    }
    componentWillReceiveProps(nextProps) {
        // if(!nextProps.userinfo.data||!nextProps.userinfo.data.id){
        //     hashHistory.push({pathname:'/'})
        //  }
    }
    handleChange(value) {
        let catelist = this.props.catelist.data.list;
        var that = this;
        console.log(value,catelist)
        catelist.map((item)=>{
            if(item.circlecatename == value ){
                this.state.cateId = item.id
            }
        })
    }


    handleCancel() {
        this.setState({ 
            previewVisible: false
        })
    }

    handlePreview (file) {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleImgChange({fileList}){
        this.setState({ 
            fileList
        })
    } 
    handleCreateCircle(){
        let refs = this.refs;
        var that = this;
        let circlename = refs.circlename.value.trim();
        let info = refs.circleinfo.value.trim();
        let circletag = refs.circletag.value.trim();
        let cateid = this.state.cateId;
        let userid = this.props.userinfo.data.id;
        console.log(refs);
        if(!circlename){
            showError('圈子名称不得为空!');
            return;
        }
        if(!info){
            showError('圈子简介不得为空!');
            return;
        }
        if(!cateid){
            showError('分类不得为空!');
            return;
        }
        var parms={
            name:circlename,
            supermanager:userid,
            cateid:cateid,
            info:info,
        }
        console.log('parms', parms)
        this.props.dispatch(fetchCreateCircle(parms,that.createSuc));
    }
    createSuc(){
        console.log('success callback');
        hashHistory.push({pathname:'/'})
    }
    render() {
        const catelist = this.props.catelist;

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        if(catelist.state!=0){
            return(
                <div className='SpinWrap'>
                    <Spin  size="large"/>
                </div>
            )
        }
        return (
            <div className='createcateBox'>
                <div className='cont'>
                	<div className='item'>
                        <div className='post'>
                            <span className='title'>圈子名称: </span>
                            <input ref='circlename' className='circleinput' type="text" placeholder="圈子名称" />
                            {/* <span className="applybtn">申请原创</span>*/}
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>圈子标签: </span>
                            <input  ref='circletag'  className='circleinput' type="text" placeholder="圈子相关标签" />
                            <span className='ml10'>最多只能有5个标签哟</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>圈子分类: </span>
                            <Select
                                showSearch
                                placeholder="Select a cate"
                                optionFilterProp="children"
                                onChange={this.handleChange}
                                filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >

                                {catelist.data.list.map((item)=>{
                                    return(
                                        <Option key={item.id} value={item.circlecatename}>{item.circlecatename}</Option>
                                        )
                                })}
                            </Select>
                            <span className='ml10'>请选择圈子所属分类</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>简介: </span>
                            <input  ref='circleinfo'  className='circleinput' type="text" placeholder="圈子简介" />
                            <span className='ml10'>圈子简介</span>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>LOGO: </span>
                            <div className='uploadImg'>
                                <Upload
                                  action="//jsonplaceholder.typicode.com/posts/"
                                  listType="picture-card"
                                  fileList={fileList}
                                  onPreview={this.handlePreview}
                                  onChange={this.handleImgChange}
                                >
                                  {fileList.length >= 2 ? null : uploadButton}
                                </Upload>
                            </div>

                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>背景图片: </span>
                            <div className='uploadImg'>
                                <Upload
                                  action="//jsonplaceholder.typicode.com/posts/"
                                  listType="picture-card"
                                  fileList={fileList}
                                  onPreview={this.handlePreview}
                                  onChange={this.handleImgChange}
                                >
                                  {fileList.length >= 2 ? null : uploadButton}
                                </Upload>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'></span>
                            <Button type="primary" onClick={this.handleCreateCircle}>创建圈子</Button>
                        </div>
                    </div>
                </div>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        )
    }
}


function mapStateToProps(state,ownProps){
  return {
    userinfo:state.userinfo,
    catelist:state.catelist

  }
}

export default connect(mapStateToProps)(CreateCate);