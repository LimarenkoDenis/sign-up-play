import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import { rootReducer } from './reducers';


// tslint:disable-next-line
const store: Store<any> = createStore(rootReducer, {});

// tslint:disable-next-line


import { Info } from './sign-up/info/info';
import { Gender } from './sign-up/gender/gender';
import { Resident } from './sign-up/resident/resident';
import { Result } from './sign-up/result/result';


class App extends React.Component<{}, { currentView: number }> {


    public constructor() {
        super();
        // tslint:disable-next-line
        this.state = { currentView: 0 }
        store.subscribe(() =>
            this.setState({ currentView: store.getState().viewReducer.viewIndex }));
    }

    public update(e: React.ChangeEvent<HTMLSelectElement>): void {
        console.log(e);
    }

    public changeView(): void {
        store.dispatch({
            type: 'NEXT_VIEW'
        });
    }

    public render(): JSX.Element {
        let view: JSX.Element;
        switch (this.state.currentView) {
            case 1:
                view = <Info update={this.update.bind(this)} items={['1', '2', '3', '4', '5']} />;
                break;
            case 2:
                view = <Gender />;
                break;
            case 3:
                view = <Resident />;
                break;
            case 4:
                view = <Result />;
                break;
            default:
                view = <Info update={this.update.bind(this)} items={['1', '2', '3', '4', '5']} />;
        }
        const button: JSX.Element = <button onClick={this.changeView.bind(this)} > Next View  </button>;
        return (
            <Provider store={store}>
                <div>
                    {view}
                    {this.state.currentView < 4 ? button : ''}
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);