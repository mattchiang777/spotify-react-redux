import React, {Component} from 'react';

class TestButton extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		console.log("Constructor/render");
	}

	/* Try out LifeCycle Methods upon state change
	*/
	componentWillMount() {
		console.log("componentWillMount");
	}

	componentDidMount() {
		console.log("componentDidMount");
	}

	componentWillReceiveProps() {
		console.log("componentWillReceiveProps");
	}

	shouldComponentUpdate() {
		console.log("shouldComponentUpdate");
	}

	// invoked before rendering
	componentWillUpdate() {
		console.log("componentWillUpdate");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	render() {
		const { tracks = [] } = this.props;

		return (
			<div>
				<button onClick={() => this.setState({ clicked: !this.state.clicked })} type="button">
				{this.state.clicked ? 'True' : 'False'} 
				</button>
			</div>
		);
	}
}

export default TestButton;