import React,{ Component } from 'react';
import InputItem from '../components/InputItem';
import { setArgu } from '../action'
import { connect } from 'react-redux'

class SendPage extends Component {
	
	handleState(args) {
		if (this.props.onSubmit) {
			this.props.onSubmit(args);
		}
	}

	render() {
		return (
			<InputItem onSubmit={this.handleState.bind(this)}/>
		);
	}	
}

const mapDispatchToProps = (dispatch) => {
		return {
			onSubmit({people,money}) {
				dispatch(setArgu({people,money}));
			}
		}
	}

SendPage = connect(null, mapDispatchToProps)(SendPage);
export default SendPage;