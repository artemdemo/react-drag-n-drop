import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import { boards } from './reducers/boards';
import { tasks } from './reducers/tasks';

const myLocationsApp = combineReducers({
    boards,
    tasks,
    routing: routerReducer,
});

export const store = createStore(myLocationsApp, applyMiddleware(thunk));

export const history = syncHistoryWithStore(browserHistory, store);
