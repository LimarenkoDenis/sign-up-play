import * as React from 'react';
import { Title } from '../title/title';

export class Gender extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Please tell us your gender ...' icon='fa fa-question-circle-o' />
            </div>
        );
    }
}