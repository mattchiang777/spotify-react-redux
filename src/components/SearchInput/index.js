import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchInput from './presenter';

function mapStateToProps(state) {
	const search = state.search;
	return {
		search
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSearch: bindActionCreators(actions.searchTrack, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);