import * as React from 'react';

import CardHeader from '../card-header/card-header';
import CardFooter from '../card-footer/card-footer';

export class Resident extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <CardHeader />
                3
                <CardFooter />
            </div>
        );
    }
}