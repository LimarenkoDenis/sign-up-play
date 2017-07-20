import { createStore, Store } from 'redux';
import { rootReducer } from '../reducers';


// tslint:disable-next-line
export const store: Store<any> = createStore(rootReducer, {});