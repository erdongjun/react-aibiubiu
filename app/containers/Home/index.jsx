import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// 通用组件
import BannerSlider from './subpage/BannerSlider';


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                 <BannerSlider />
                 <div className='iconfont icon-closev'>1111</div>
            </div>
        )
    }
}

export default Home
