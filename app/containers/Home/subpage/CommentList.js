//core核心依赖
import React from 'react';


import { Link } from 'react-router';


class CommentList extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		var list = new Array(4);
		list.fill(1);
		console.log(list)

		return(
			<div className='commentBox recommendBox'>
				<div className='title'>
					<div className='tit_l'>
						<img className='relogo' src="http://www-static.diyidan.net/static/image/crown_05.png" alt=""/>
						<span className='subtitle'>热门帖子</span>
						<span className='desc'>弹妹的精品视频推荐哦~</span>
						<span className='more'>换一批<img className='rateicon' src="//www-static.diyidan.net/static/image/crown_02.png?v=768aad677c40e9c0b94466f1d3cf8331" alt=""/></span>
					</div>
				</div>
				<div className='commentlist clearfix'>
					{list.map((item,index)=>{
						return(
							<div key={index} className='item'>
								<div className='info'>
									<p className='info-name'>
										<img className='fl userhead' src="http://image.diyidan.net/user/2015/8/6/Qj3PwXo4sqi9VyRE.jpg!tiny" alt="" />
										<span className='nick fl'>测试名</span>
										<span className='time fr'>刚刚</span>
									</p>
									<div className='info-mid clearfix'>
										<img src="//image.diyidan.net/post/2017/5/12/1IT9icekF86LPhLQ.jpg!webindex" alt="" />
										<div className='desc'>
											<p className='tit'>想推荐一本关于妹控的小说，有兴趣的可在下方留言。</p>
											<p><span className='tag'>漫画</span><span className='tag'>二次元</span></p>
											<p className='summary'>（应该是很久以前的作品）中国的网络小说关于妹控小说真的很少，基本上找不出来一本，我也是接触了日漫对兄妹恋影响较大，其中最经典的就是【我的妹妹哪有这么可爱】【缘之空】了，现在我要分享的小说，算是以上两部的结合。看完以后我内心压抑，剧情久久不能忘怀，兄妹恋，真的是错的吗？真的无法被社会所容忍吗？	</p>
									
										</div>
									</div>	
								</div>
								<p className='handle'>
									<span className='collection'><i className='iconfont icon-star'></i><em>11111</em></span>
									<span className='collection'><i className='iconfont icon-star'></i><em>11111</em></span>
									<span className='collection'><i className='iconfont icon-star'></i><em>11111</em></span>
								</p>
							</div>
						)
					})}
				</div>
			</div>
		)
		
	}
}
export default CommentList;
