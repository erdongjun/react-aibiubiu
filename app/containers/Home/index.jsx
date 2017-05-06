import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { Button } from 'antd';



class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <h1>home是打算sas</h1>
                <Button type="primary">Primary</Button>
            </div>
        )
    }
}

export default Home
