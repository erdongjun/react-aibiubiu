import React from 'react';
import './common.less';


class Collection extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div className='clearfix'>
                    <span className="collection"><i className="iconfont icon-zan_tuijian"></i><em>11111</em></span>
                    <span className="collection"><i className="iconfont icon-shoucang"></i><em>11111</em></span>
                    <span className="collection"><i className="iconfont icon-shiping"></i><em>11111</em></span>
            </div>
        )
    }
}




export default Collection;