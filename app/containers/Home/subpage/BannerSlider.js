//core核心依赖
import React from 'react';

//框架依赖
import { Carousel } from 'antd';


//css 依赖
import './subpage.less';


class BannerSlider extends React.Component{
	constructor(props) {
	    super(props);
	    this.onChange = this.onChange.bind(this);
	}
	onChange(index){
		console.log(index);
	}
	render(){
		var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      afterChange:this.onChange,
	      className:'banner',
    	};
		return(
			<Carousel {...settings}>
			    <div className="banneritem">1</div>
			    <div className="banneritem">2</div>
			    <div className="banneritem">3</div>
			    <div className="banneritem">5</div>
			</Carousel>
		)
		
	}
}
export default BannerSlider;