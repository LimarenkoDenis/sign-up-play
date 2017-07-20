import * as React from 'react';
import { store } from '../../../store/root.store';

import './next-button.css';

// tslint:disable-next-line
export class NextButton extends React.Component {
    public changeView(): void {
        store.dispatch({
            type: 'NEXT_VIEW'
        });
    }

    public render(): JSX.Element {
        return (
            <div className='next-button'>
                <span onClick={this.changeView.bind(this)}>
                    <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </span>
            </div>
        );
    }
}