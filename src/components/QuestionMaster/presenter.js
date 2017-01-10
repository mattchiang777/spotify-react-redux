import React from 'react';

function QuestionMasterPresenter(props) {
	return (
		<div>
			<button onClick={props.clickFunc}>Click me to test functions in index.js!</button>
		</div>
	);
}

export default QuestionMasterPresenter;