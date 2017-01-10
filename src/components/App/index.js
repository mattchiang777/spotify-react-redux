import React from 'react';
import SearchInput from '../SearchInput/index';

/*
	In future implementations you could use this component to have static Header, Footer, Playlist or Player components while the children are changing.
*/
function App({ children }) {
	return (
		<div>
			<SearchInput />
			{children}
		</div>
	)
}

export default App;