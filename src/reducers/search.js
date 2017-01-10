import * as actionTypes from '../constants/actionTypes';

const initialState = "";

export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SEARCH_TRACK:
			return searchTrack(state, action);
	}
	return state;
}

function searchTrack(state, action) {
	const { searchKeyword } = action;
	return searchKeyword;
}