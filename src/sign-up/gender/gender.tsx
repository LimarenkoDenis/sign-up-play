import * as React from 'react';
import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

export class Gender extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Please tell us your gender ...' icon='fa fa-question-circle-o' />
                <NextButton />
            </div>
        );
    }
}