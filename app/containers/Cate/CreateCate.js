import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './index.less';

class CreateCate extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
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
                </div>
            </div>
        )
    }
}


export default CreateCate