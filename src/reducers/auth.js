import * as actionTypes from '../constants/actionTypes';

/** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
  user: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  }
};

// The reducer
export default function(state = initialState, action) {
	switch (action.type) {
		// when we get the tokens, set the tokens!
		case actionTypes.SPOTIFY_TOKENS:
			const { accessToken, refreshToken} = action;
			return Object.assign({}, state, {accessToken, refreshToken});

		// set our loading property when the loading begins
		case actionTypes.SPOTIFY_ME_BEGIN:
			return Object.assign({}, state, {
				user: Object.assign({}, state.user, {loading: true})
			});

		// when we get the data merge it in
		case actionTypes.SPOTIFY_ME_SUCCESS:
			return Object.assign({}, state, {
				user: Object.assign({}, state.user, action.data, {loading: false})
			});

		// currently no failure state :(
		case actionTypes.SPOTIFY_ME_FAILURE:
			return state;

		default:
			return state;
	}
}

// Rewrite case statements into their own functions like setTracks(...) below
function setTracks(state, action) {
	const { tracks } = action;
	return [ ...state, ...tracks ];
}