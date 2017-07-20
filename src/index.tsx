import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import { store } from './store/root.store';

import { Header } from './header/header';
import { SignUp } from './sign-up/sign-up';


class App extends React.Component<{}, { viewIndex: number }> {


    public constructor() {
        super();
        this.state = store.getState().viewReducer;
        // tslint:disable-next-line
        store.subscribe(() =>
            this.setState({ viewIndex: store.getState().viewReducer.viewIndex }));

    }

    public onChange(e: KeyboardEvent): void {
        // tslint:disable-next-line
        const el: any = e.target;
        store.dispatch({
            type: 'ADD_DATA',
            payload: { [el.name]: el.value }
        });
    }

    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <div>
                    <Header viewIndex={this.state.viewIndex} />
                    <SignUp viewIndex={this.state.viewIndex}/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);