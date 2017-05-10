//core核心依赖
import React from 'react';


import { Link } from 'react-router';


//框架依赖
//css 依赖
import './subpage.less';


class PrivateZone extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		var list = new Array(10);
		list.fill(1);
		console.log(list)

		return(
			<div className='privateZone recommendBox'>
				<div className='title'>
					<div className='tit_l'>
						<img className='relogo' src="http://www-static.diyidan.net/static/image/crown_05.png" alt=""/>
						<span className='subtitle'>视频推荐</span>
						<span className='desc'>弹妹的精品视频推荐哦~</span>
						<span className='more'>换一批<img className='rateicon' src="//www-static.diyidan.net/static/image/crown_02.png?v=768aad677c40e9c0b94466f1d3cf8331" alt=""/></span>
					</div>
				</div>
				<div className='privatelist clearfix'>
					{list.map((item,index)=>{
						return(
							<Link key={index} className='item'>
								<img  src="http://image.diyidan.net/tag/2016/12/29/gE7iZvXLOBIg5bzT.jpg!tiny2" alt="" />
								<div className='mask'>
									<p className='pri-tit'>cos</p>
									<p className='pri-des'>成员:902222</p>
									<p className='pri-des'>作品:33222</p>
								</div>
							</Link>
						)
					})}
				</div>
			</div>
		)
		
	}
}
export default PrivateZone;
