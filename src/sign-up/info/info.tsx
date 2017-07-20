import * as React from 'react';

import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

import './info.css';


// tslint:disable-next-line
export class Info extends React.Component<{ update: React.EventHandler<any> }> {

    public roles: string[] = [
        'Angular dev',
        'React dev',
        'Manager',
    ];

    public render(): JSX.Element {
        return (
            <div>
                <Title title='Please tell us your name ...' icon='fa fa-id-card-o' />
                <select onChange={this.props.update.bind(this)} name='title' className='form-control' >
                    <option disabled selected> select your title</option>
                    {this.roles.map((item: string, i: number) => (<option key={i}>{item}</option>))}
                </select>
                <div >
                    <input type='text' className='form-control'
                        placeholder='Name' name='name' onInput={this.props.update.bind(this)} />
                    <input type='text' className='form-control'
                        placeholder='Surname' name='surname' onInput={this.props.update.bind(this)} />

                </div>
                <NextButton />
            </div >
        );
    }
}