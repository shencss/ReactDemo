import React, { Component } from 'react';

class Animate extends Component {

	constructor() {
		super();
		this.state = {
			isCliked: false
		}
	}

	handleAnim() {
		this.setState({
			isCliked: true
		});
	}

	render() {
		return (
			//删除{}？
			<div className={this.state.isCliked ? 'animate hide' : 'animate'}>
				<div className={this.state.isCliked ? 'mask1 change1' : 'mask1'}></div>
				<div className={this.state.isCliked ? 'mask2 change2' : 'mask2'}></div>
				<div className="open" onClick={this.handleAnim.bind(this)}>拆</div>
			</div>
		)
	}
}

export default Animate;