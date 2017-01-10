import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream/index';
import Login from './components/Login';
import Error from './components/Error';
import User from './components/User';
import QuestionMaster from './components/QuestionMaster/index';

const tracks = [
	{
		title: 'Some track'
	},
	{
		title: 'Some other track'
	}
];

const store = configureStore();
// store.dispatch(actionCreator(payload));
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);
// const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Stream} />
				<Route path="/" component={Stream} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);