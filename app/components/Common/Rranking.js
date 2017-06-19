import React from 'react';
import './common.less';

class Rranking extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let hotlist = this.props.hotall;
        return (
            <div className='Rranking'>
                <div className='Rrankingtop'>
                    <i className='iconfont icon-Hremen'></i>热门排行
                </div>
                <div className='Rrankingmid'>
                    {hotlist.map((item,index)=>{
                        return(
                            <p className='rankitem' key={index}><span>{index+1}.</span>{item.title}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}




export default Rranking;