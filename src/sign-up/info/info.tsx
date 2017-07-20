import * as React from 'react';

import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';


import { store } from '../../store/root.store';

import './info.css';


export class Info extends React.Component<{
    items: string[]
}> {

    public constructor() {
        super();
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
            <div>
                <Title title='Please tell us your name ...' icon='fa fa-id-card-o' />
                <select className='form-control' onChange={this.onChange.bind(this)} name='title'>
                    {this.props.items.map((item: string, i: number) => (<option key={i}>{item}</option>))}
                </select>
                <div>
                    <div>
                        <input className='form-control' type='text' name='name' onInput={this.onChange.bind(this)} />
                    </div>
                    <div>
                        <input className='form-control' type='text' name='surname' onInput={this.onChange.bind(this)} />
                    </div>
                </div>
                <NextButton />
            </div >
        );
    }
}