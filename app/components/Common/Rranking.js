import React from 'react';
import './common.less';

class Rranking extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
         var list  = new Array(10);
        list.fill(1);
        return (

            <div className='Rranking'>
                <div className='Rrankingtop'>
                    <i className='iconfont icon-Hremen'></i>热门排行
                </div>
                <div className='Rrankingmid'>
                    {list.map((item,index)=>{
                        return(
                            <p className='rankitem' key={index}><span>{index}.</span>好想被僵尸老师咬一口</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}




export default Rranking;