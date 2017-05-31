import React from 'react'
import { Link ,hashHistory} from 'react-router';
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
            fileList: [],
            fileList2: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleImgChange2 = this.handleImgChange2.bind(this);
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
    handleImgChange2({fileList}){
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
        let fileList2 = fileList;
        this.setState({ fileList2 });
        console.log(fileList2)
    } 

    handleCreateCircle(){
        let refs = this.refs;
        var that = this;
        let circlename = refs.circlename.value.trim();
        let info = refs.circleinfo.value.trim();
        let circletag = refs.circletag.value.trim();
        let cateid = this.state.cateId;
        let userid = this.props.userinfo.data.id;
        let logo = this.state.fileList[0].url;
        let bgurl = this.state.fileList2[0].url;
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
        if(!logo){
            showError('logo不得为空!');
            return;
        }
        if(!bgurl){
            showError('分类不得为空!');
            return;
        }
        var parms={
            name:circlename,
            supermanager:userid,
            cateid:cateid,
            info:info,
            logo:logo,
            bgurl:bgurl
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

        const { previewVisible, previewImage, fileList ,fileList2 } = this.state;
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
                                  action="/api/Createcircle/fileUpload"
                                  listType="picture-card"
                                  fileList={fileList}
                                  onPreview={this.handlePreview}
                                  onChange={this.handleImgChange}
                                >
                                  {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                            </div>

                        </div>
                    </div>
                    <div className='item'>
                        <div className='post'>
                            <span className='title'>背景图: </span>
                            <div className='uploadImg'>
                                <Upload
                                  action="/api/Createcircle/fileUpload"
                                  listType="picture-card"
                                  fileList={fileList2}
                                  onPreview={this.handlePreview}
                                  onChange={this.handleImgChange2}
                                >
                                  {fileList2.length >= 1 ? null : uploadButton}
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