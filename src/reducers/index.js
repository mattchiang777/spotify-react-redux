import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import track from './track';
import auth from './auth';
import search from './search';

export default combineReducers({
	track,
	auth,
	search,
	routing: routerReducer
});