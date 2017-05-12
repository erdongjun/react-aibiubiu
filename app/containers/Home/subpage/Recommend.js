//core核心依赖
import React from 'react';

import { Link } from 'react-router';

//框架依赖

class Recommend extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		var list = new Array(8);
		list.fill(1);
		console.log(list)

		return(
			<div className='recommendBox'>
				<div className='title'>
					<div className='tit_l'>
						<img className='relogo' src="http://www-static.diyidan.net/static/image/crown_05.png" alt=""/>
						<span className='subtitle'>视频推荐</span>
						<span className='desc'>弹妹的精品2视频推荐哦~</span>
						<span className='more'>换一批<img className='rateicon' src="//www-static.diyidan.net/static/image/crown_02.png?v=768aad677c40e9c0b94466f1d3cf8331" alt=""/></span>
					</div>
				</div>
				<div className='list clearfix'>
					{list.map((item,index)=>{
						return(
							<Link key={index} className='item'>
								<div className='titleimg'>
									<img className='cover' src="http://image.diyidan.net/music/2017/4/15/NwdrnmT7iDbWTPSl.jpg!recommendthumb2" alt=""/>
									<div className='mask'></div>
								</div>
								<p className='subtitle'>【盘点】你是怎么入♂二次元这个坑的呢？第一期。</p>
								<p className='counts'>
									<span className='like'>123</span>
									<span className='give'>123</span>
								</p>
							</Link>
						)
					})}
				</div>
			</div>
		)
		
	}
}
export default Recommend;
