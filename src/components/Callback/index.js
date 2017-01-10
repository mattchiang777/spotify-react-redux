import React from 'react';

class Callback extends React.Component {

	componentDidMount() {
		// change this, it might cause issues
		window.setTimeout(opener.spotifyApi.connectCallback, 1);
	}

	render() {
		return <div><p>This page should close soon.</p></div>;
	}
}

export default Callback;