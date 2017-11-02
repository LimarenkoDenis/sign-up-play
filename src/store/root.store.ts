import { compose, createStore, Store } from 'redux';
import { rootReducer } from '../reducers';

const initStore: () => Store<ModuleStore> = () => {
    // tslint:disable-next-line
    const composeEnhancers =
     // tslint:disable-next-line
        typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
         // tslint:disable-next-line
            ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                name: 'UWF module'
            })
            : compose;
    return createStore(
        rootReducer,
        composeEnhancers()
    );
};

export const store: Store<ModuleStore> = initStore();
