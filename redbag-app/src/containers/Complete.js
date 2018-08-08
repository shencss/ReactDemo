import React,{ Component } from 'react';
import Animate from '../components/Animate';
import BagList from './BagList';
import { Link } from 'react-router-dom';

class Complete extends Component {
	
	render() {
		return (
			<div className="wrapper-input white">
				<Animate/>
				<BagList/>
				<div className="send-bag">
					<Link to='/'>返回</Link>
				</div>
			</div>
		);
	}
	
}

export default Complete;