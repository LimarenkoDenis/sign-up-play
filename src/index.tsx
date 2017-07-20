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
        this.state = { currentView: 1 }
        store.subscribe(() => {
            console.log(store.getState().dataReducer);
            this.setState({ currentView: store.getState().viewReducer.viewIndex });
        });

    }

    // public update(e: React.ChangeEvent<HTMLSelectElement>): void {
    //     console.log(e);
    // }

    public render(): JSX.Element {
        let view: JSX.Element;
        switch (this.state.currentView) {
            case 1:
                view = <Info items={['1', '2', '3', '4', '5']} />;
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
                view = <Info items={['1', '2', '3', '4', '5']} />;
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