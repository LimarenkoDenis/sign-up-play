

import { combineReducers, Reducer } from 'redux';
import { viewReducer } from './view.reducer';

// tslint:disable-next-line
export const rootReducer: Reducer<any> = combineReducers({
    viewReducer
});