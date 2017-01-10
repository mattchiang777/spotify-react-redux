import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { browserHistory, hashHistory } from 'react-router';
import { routerMiddleware, syncHistory } from 'react-router-redux';
import rootReducer from '../reducers/index';

const logger = createLogger();
const router = routerMiddleware(browserHistory);
// const router = routerMiddleware(hashHistory);
// const reduxRouterMiddleware = syncHistory(hashHistory);

const createStoreWithMiddleware = applyMiddleware(router, logger)(createStore);

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
}