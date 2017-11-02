import * as React from 'react';
import { Progress } from './progress/progress';

import './header.css';

export type Props = { viewIndex: number };
// tslint:disable-next-line
export const Header: (props: Props) => JSX.Element =
    (props: Props) => (
        <header className='row' >
            <div className='progress col-md-8' >
                <Progress viewIndex={props.viewIndex} />
            </div>
        </header>
    );