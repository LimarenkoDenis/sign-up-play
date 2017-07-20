

import * as React from 'react';
import './progress.css';


// tslint:disable-next-line
export const Progress: (props: { viewIndex: number }) => JSX.Element =
    (props: { viewIndex: number }) => (
        <div className='progress-bar' role='progressbar'
            aria-valuenow='60' aria-valuemin='0'
            aria-valuemax='100' style={{ width: `${props.viewIndex / 4 * 100}%` }} >
            <span className='sr-only'>60% Complete</span>
        </div>
    );