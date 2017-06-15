import React from 'react';
import { Upload, Icon } from 'antd';

import {showSuccess,showError} from '../Common/Common.js';


import './index.less';




class Editor extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            // fileList: [],
        }
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }
    handlePost(){
        console.log(this.context)
        let title = this.refs.title.value.trim();
        let content = this.refs.content.value.trim();
        let fileList = this.props.fileList;
        var imgs = [];
        fileList.map((item)=>{
            imgs.push(item.url)
        });
        let parms = {
            title:title,
            content:content,
            fileList:imgs
        }
        if(!title){
            showError('请输入标题');
            return;
        }
        if(!content&&fileList.length==0){
            showError('请输入要发表的内容');
            return;
        }
        this.props.handleCreactPost(parms)
    }
    handlePreview (file) {
        return;
        this.setState({
            previewImage:'http://www.aibiubiu.com'+file.url || 'http://www.aibiubiu.com'+file.thumbUrl,
            previewVisible: true,
        });
    }

    handleImgChange({fileList}){
        this.props.ParentImgChange({fileList})
    } 
    render() {
        const fileList= this.props.fileList;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">添加</div>
            </div>
        );
        return (
            <div className='editorBox'>
                <div className='editorBox-top'>
                    <input ref='title' type="text" placeholder='标题'/>
                </div>
                <div  className='editorBox-mid'>
                    <textarea ref='content' className='comment' placeholder='正文'></textarea>
                    <div className='imglist clearfix'>
                        <Upload
                          action="/api/Createcircle/fileUpload"
                          listType="picture-card"
                          fileList={fileList}
                          onPreview={this.handlePreview}
                          onChange={this.handleImgChange}
                          className='imgbox'
                        >
                          {fileList.length >= 6 ? null : uploadButton}
                        </Upload>
                    </div>
                </div>
                <div className='editorBox-bottom'>
                    <i className='iconfont icon-gaoxiao'></i>
                    <i className='iconfont icon-sheying'></i>
                    <a className='postBtn' onClick={this.handlePost} href="javascript:;">发表</a>
                </div>
            </div>
        )
    }
}




export default Editor;