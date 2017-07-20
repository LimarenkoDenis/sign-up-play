import * as React from 'react';
import { Title } from '../title/title';

export class Resident extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Are you UK resident?' icon='fa fa-home' />
            </div>
        );
    }
}