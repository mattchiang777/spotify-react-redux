import React from 'react';
import { connect } from 'react-redux';
import QuestionMasterPresenter from './presenter';

class QuestionMaster extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			questionPath: null,
			counter: -1
		}

		const yesMessages = [
			"You know there's like sharks and dirt bikes, right?",
			"Like really big fucking sharks.",
			"You may even have to eat 'beef' from Cathay House.",
			"If you click yes, you know there's no turning back, right?"
		]

	}
	
	mapStateToProps(state) {
		return {
			state
		}
	}

	handleClick() {
		alert("works");
	}

	clickedYes() {
		this.setState((prevState, props) => {
			questionPath: "yes"
		});
	}

	render() {
		return (
			<div>
				Are you in?
				{ //<button onClick={this.handleClick}>Click me to test functions in index.js!</button>
			}
				<button>Yes</button>
				<button>No</button>
			</div>
		)
	}
	// render() {
	// 	return (
	// 		<QuestionMasterPresenter clickFunc={this.handleClick}/>
	// 	)
	// }

}

export default connect(QuestionMaster.mapStateToProps)(QuestionMaster);
// why doesn't passing handleClick as props work?
// export default connect(QuestionMaster.mapStateToProps)(QuestionMasterPresenter);
