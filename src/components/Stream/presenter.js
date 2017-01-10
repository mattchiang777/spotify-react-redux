import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Stream extends Component {

	render() {
		const { tracks = [], onSearch } = this.props;
		return (
			<div>
				<div>
					
				</div>
				<br/>
				<div>
					{
						tracks.map((track, key) => {
							return <div className="track" key={key}>{track.title}</div>;
						})
					}
				</div>
			</div>
		);
	}
}

export default Stream;