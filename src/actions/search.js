import spotifyApi from '../utils';
import * as actionTypes from '../constants/actionTypes';


export function searchTrack(searchKeyword) {
	return {
		type: actionTypes.SEARCH_TRACK,
		searchKeyword
	};
};