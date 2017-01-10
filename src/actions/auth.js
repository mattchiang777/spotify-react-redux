import Spotify from 'spotify-web-api-node';
import * as actionTypes from '../constants/actionTypes';

const spotifyApi = new Spotify();

// Set the app's access and refresh tokens
export function setTokens({ accessToken, refreshToken }) {
	if (accessToken) {
		spotifyApi.setAccessToken(accessToken);
	}
	return { type: SPOTIFY_TOKENS, accessToken, refreshToken };
}

// Get the user's info from the /me api 
export function getMyInfo() {
	return dispatch => {
		dispatch({ type: SPOTIFY_ME_BEGIN });
		spotifyApi.getMe().then(data => {
			dispatch({ type: SPOTIFY_ME_SUCCESS, data: data });
		}).catch(e => {
			dispatch({ type: SPOTIFY_ME_FAILURE, error: e });
		});
	};
}