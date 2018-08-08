import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

class InputItem extends Component {

	constructor() {
		super();
		this.state = {
			people: '',
			money: '',
			text1: '',
			text2: ''
		}
	}

	//处理人数输入
	handlePeopleNumber(e) {
		var n = e.target.value + '';
		//如果输入值n中含有非数字字符
		if (isNaN(n)) {
			this.setState({
				people: n.replace(/\D/,''),
				text1: '人数必须为整数'
			});
			return false;
		//如果第一位数字是0
		} else if (/^[0]/.test(n)) {
			this.setState({
				people: n.replace(/^[0]/,''),
				text1: '人数必须大于0'
			});
			return false;
		} else {
			this.setState({
				people: n,
				text1: ''
			});
		}
	}

	//处理金额输入
	handleMoneyNumber(e) {
		var n = e.target.value + '';
		//如果输入值n不是数字
		if (isNaN(n)) {
			this.setState({
				money: n.replace(/\D$/,''),
				text2: '金额必须是数字'
			});
			return false;
		//如果输入值n小于0.01
		} else if(Number(n) < 0.01) {
			this.setState({
				money: n,
				text2: '金额必须大于0.01'
			});
			return false;
		} else {
			this.setState({
				money: n,
				text2: ''
			});
		}				
	}

	handleSubmit(e) {
		if ((!this.state.text1) && (!this.state.text2) 
		&& (this.state.people) && (this.state.money)
		&& (this.props.onSubmit)) {
			const { people, money } = this.state;
			if (Number(money) < 0.01 * Number(people)) {
				this.setState({
					text2: '平均金额不能小于0.01'
				});
				e.preventDefault();
			} else {
				this.props.onSubmit({ people, money });
				this.setState({
					people: '',
					money: ''
				});
			} 
		} else {
			e.preventDefault();
		}
	}

	render() {
		return (
			<div className="wrapper-input">
				<h2 className="input-title">发红包</h2>
				<div className="input-block">
					<div className="input-field">
						<div className="input-peole">
							<label>请输入人数</label>
							<input type="text" value={this.state.people} onChange={this.handlePeopleNumber.bind(this)} autoFocus/>
						</div>
						<Info text={this.state.text1}/>			
					</div>
					<div className="input-field">
						<div className="input-money">
							<label>请输入金额</label>
							<input type="text" value={this.state.money} onChange={this.handleMoneyNumber.bind(this)}/>
						</div>
						<Info text={this.state.text2}/>
					</div>
				</div>
				<div className="send-bag">
					<Link to="/complete" onClick={this.handleSubmit.bind(this)}>发红包</Link>
				</div>
			</div>
		);
	}
	
}

export default InputItem;