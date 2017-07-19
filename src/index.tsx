import * as React from 'react';
import * as ReactDOM from 'react-dom';

// tslint:disable-next-line
const Widget: (props: { update: React.EventHandler<React.ChangeEvent<HTMLInputElement>>, text: string }) => JSX.Element
    = (props: { update: React.EventHandler<React.ChangeEvent<HTMLInputElement>>, text: string }) => (
        <div>
            <input type='text' onChange={props.update} />
            <h1>{props.text}</h1>
        </div>
    );

class App extends React.Component<{ text: string, cat: number }, { text: string }> {


    public constructor() {
        super();
        this.state = { text: 's' };
    }

    public update(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            text: e.target.value
        });
    }

    public render(): JSX.Element {
        return (
            <Widget update={this.update.bind(this)} text={this.state.text} />
        ); // React.createElement('h1', {}, 'Hello Series 111');
    }
}

// tslint:disable-next-line
// const App: () => JSX.Element = () => <h1>Hello Series</h1>;

ReactDOM.render(
    <App text='Hello Series' cat={1} />,
    document.querySelector('#root')
);