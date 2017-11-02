import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import { store } from './store/root.store';

import Header from './containers/header';
import SignUp from './containers/sign-up';


class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <SignUp />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);