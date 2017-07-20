import * as React from 'react';

import CardHeader from '../card-header/card-header';
import CardFooter from '../card-footer/card-footer';

// tslint:disable-next-line
const Select:
    (props: { update: React.EventHandler<React.ChangeEvent<HTMLSelectElement>>, items: string[] }) => JSX.Element
    = (props: { update: React.EventHandler<React.ChangeEvent<HTMLSelectElement>>, items: string[] }) => (
        <select onChange={props.update}>
            {props.items.map((item: string, i: number) => (<option key={i}>{item}</option>))}
        </select>
    );
// tslint:disable-next-line
const Login: () => JSX.Element = () => (
    <div>
        <CardHeader />
        <div>
            <input type='text' />
        </div>
        <div>
            <input type='password' />
        </div>
        <CardFooter />
    </div>
);

export class Info extends React.Component<{
    update:
    React.EventHandler<React.ChangeEvent<HTMLSelectElement>>,
    items: string[]
}> {
    public render(): JSX.Element {
        return (
            <div>
                <Select update={this.props.update} items={this.props.items} />
                <Login />
            </div>
        );
    }
}