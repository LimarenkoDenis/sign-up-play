

import { combineReducers, Reducer } from 'redux';
import { viewReducer } from './view.reducer';
import { dataReducer } from './data.reducer';

// tslint:disable-next-line
export const rootReducer: Reducer<ModuleStore> = combineReducers({
    viewReducer,
    dataReducer
});