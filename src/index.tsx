import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import { store } from './store/root.store';

import { Header } from './header/header';
import { Info } from './sign-up/info/info';
import { Gender } from './sign-up/gender/gender';
import { Resident } from './sign-up/resident/resident';
import { Result } from './sign-up/result/result';
import { CardFooter } from './sign-up/card-footer/card-footer';
import { CardHeader } from './sign-up/card-header/card-header';

class App extends React.Component<{}, { currentView: number }> {


    public constructor() {
        super();
        // tslint:disable-next-line
        store.subscribe(() =>
            this.setState({ currentView: store.getState().viewReducer.viewIndex }));

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
        let view: JSX.Element;
        switch (this.state.currentView) {
            case 1:
                view = <Info update={this.onChange} />;
                break;
            case 2:
                view = <Gender update={this.onChange} />;
                break;
            case 3:
                view = <Resident update={this.onChange} />;
                break;
            case 4:
                view = <Result />;
                break;
            default:
                view = <Info update={this.onChange} />;
        }
        return (
            <Provider store={store}>
                <div>
                    <Header viewIndex={this.state.currentView} />
                    <div className='container-fluid sign-up-form' >
                        <CardHeader />
                        <div className='container-fluid form-container' >
                            {view}
                        </div>
                        <CardFooter />
                    </div>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);