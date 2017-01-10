import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

function mapStateToProps(state) {
	const tracks = state.track;
	const search = state.search;
	return {
		tracks,
		search
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onSearch: bindActionCreators(actions.searchTrack, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);