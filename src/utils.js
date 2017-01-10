// Utility functions and global Spotify API

import Spotify from 'spotify-web-api-node';
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './constants/auth';

const spotifyApi = new Spotify({
  	clientId : CLIENT_ID,
  	clientSecret : CLIENT_SECRET,
  	redirectUri : REDIRECT_URI
});

// Good exercise to rewrite this with arrow functions
export default function searchTracksWithKeyword(keyword) {
	spotifyApi.searchTracks(keyword)
		.then(function(data) {
			console.log('Search by ' + keyword, data.body);
		}, function(err) {
			console.error(err);
		});
}