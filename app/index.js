import React, { Component } from 'react';
import { render } from 'react-dom';

import Hello from './component'


class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick(e) {
    this.setState({ liked: !this.state.liked });
  }

  render() {
    const text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
    	<div>
    		<Hello />
			<p onClick={this.handleClick.bind(this)}>
          		You {text} this. Click to toggle.
      		</p>
    	</div>
     
    );
  }
}

render(
    <LikeButton />,
    document.getElementById('root')
);