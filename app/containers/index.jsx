import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';
// 组件依赖
import HomeLayout from '../components/Layout/Layout.js';

import './../static/css/common.less'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
             <HomeLayout>
                {this.props.children}
            </HomeLayout>
        )
    }
}

export default App
