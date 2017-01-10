import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchTracksWithKeyword from '../../utils';

class SearchInput extends Component {

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		// this.setState({value: event.target.value});
		// SearchInput accesses the store as props
		const { onSearch } = this.props;
		onSearch(event.target.value);
	}

	handleSubmit(event) {
		this.handleClick();
		console.log('A search term was submitted: ' + this.props.search);
	}

	handleClick() {
		searchTracksWithKeyword(this.props.search);
	}

	render() {
		const { tracks = [], onSearch } = this.props;
		return (
			<div>
				<input type="text" name="search" onChange={ this.handleChange } placeholder="Search..." />
				<button onClick={ this.handleSubmit } type="button">Search</button>
			</div>
		);
	}
}
export default SearchInput;

// why does an anon func work but not handleClick for onSearch?
// A: Must bind in constructor if you want to use it as handlers in render()