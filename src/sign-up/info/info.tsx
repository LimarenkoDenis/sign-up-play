import * as React from 'react';

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
        <div>
            <input type='text' />
        </div>
        <div>
            <input type='password' />
        </div>
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