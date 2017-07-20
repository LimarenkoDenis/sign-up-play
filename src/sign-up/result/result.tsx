import * as React from 'react';
import { store } from '../../store/root.store';

export class Result extends React.Component<{}, { [key: string]: string | number | boolean }> {

    public constructor() {
        super();
        this.state = store.getState().dataReducer;
    }

    public render(): JSX.Element {
        return (
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
        );
    }
}