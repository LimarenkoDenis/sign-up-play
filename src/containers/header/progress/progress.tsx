

import * as React from 'react';
import './progress.css';

export type Props = { viewIndex: number };

// tslint:disable-next-line
export const Progress: (props: Props) => JSX.Element =
    (props: Props) => (
        <div className='progress-bar' role='progressbar'
            aria-valuenow='60' aria-valuemin='0'
            aria-valuemax='100' style={{ width: `${props.viewIndex / 4 * 100}%` }} >
            <span className='sr-only'>60% Complete    {props.viewIndex }</span>
        </div>
    );