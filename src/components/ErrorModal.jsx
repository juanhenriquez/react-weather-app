import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class ErrorModal extends React.Component {
	handleClose = () => {
		this.props.onClose();
	};
	render() {
		const actions = [
			<FlatButton
				label="Close"
				primary={true}
				onTouchTap={this.handleClose}
			/>
		];
		return (
			<Dialog
				title="Something was wrong!"
				actions={actions}
				modal={true}
				open={this.props.errorMessage != undefined }>
				{ this.props.errorMessage }
			</Dialog>
		);
	}
}

export default ErrorModal;
