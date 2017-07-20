import * as React from 'react';
import { Progress } from './progress/progress';

import './header.css';
// tslint:disable-next-line
export const Header: (props: { viewIndex: number }) => JSX.Element =
    (props: { viewIndex: number }) => (
        <header className='row' >
            <div className='progress col-md-8' >
                <Progress viewIndex={props.viewIndex} />
            </div>
        </header>
    );