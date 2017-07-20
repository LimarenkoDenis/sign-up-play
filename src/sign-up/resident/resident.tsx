import * as React from 'react';
import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

export class Resident extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Are you UK resident?' icon='fa fa-home' />
                <NextButton />
            </div>
        );
    }
}