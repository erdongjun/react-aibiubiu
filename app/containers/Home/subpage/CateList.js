//core核心依赖
import React from 'react';


import { Link } from 'react-router';


//框架依赖
//css 依赖
import './subpage.less';


class CateList extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		
		return(
			<div className='cateList'>
					<Link  className='cateItem' to={'/cate/12'}>
						<img className='bg' src="http://www-static.diyidan.net/static/image/hot001.jpg?v=75dd555da3b66fc4d743ca4cca632a82" alt=""/>
						<div className='tip'>
							<img className='icon' src="//www-static.diyidan.net/static/image/hot_01.png?v=b0a27773f00c96375b57c1db64446496" alt=""/>
							<p>热门</p>
						</div>
					</Link>
					<Link  className='cateItem' to={'/cate/12'}>
						<img className='bg' src="http://www-static.diyidan.net/static/image/hot001.jpg?v=75dd555da3b66fc4d743ca4cca632a82" alt=""/>
						<div className='tip'>
							<img className='icon' src="//www-static.diyidan.net/static/image/hot_01.png?v=b0a27773f00c96375b57c1db64446496" alt=""/>
							<p>热门</p>
						</div>
					</Link>
					<Link  className='cateItem' to={'/cate/12'}>
						<img className='bg' src="http://www-static.diyidan.net/static/image/hot001.jpg?v=75dd555da3b66fc4d743ca4cca632a82" alt=""/>
						<div className='tip'>
							<img className='icon' src="//www-static.diyidan.net/static/image/hot_01.png?v=b0a27773f00c96375b57c1db64446496" alt=""/>
							<p>热门</p>
						</div>
					</Link>
					<Link  className='cateItem' to={'/cate/12'}>
						<img className='bg' src="http://www-static.diyidan.net/static/image/hot001.jpg?v=75dd555da3b66fc4d743ca4cca632a82" alt=""/>
						<div className='tip'>
							<img className='icon' src="//www-static.diyidan.net/static/image/hot_01.png?v=b0a27773f00c96375b57c1db64446496" alt=""/>
							<p>热门</p>
						</div>
					</Link>
			</div>
		)
		
	}
}
export default CateList;
