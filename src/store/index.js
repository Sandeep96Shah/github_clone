import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import github from '../reducers/index';

let store;

export function configureStore() {
    store = createStore(github, applyMiddleware(thunk, logger));
    return store;
}