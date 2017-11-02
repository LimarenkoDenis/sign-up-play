import * as React from 'react';

import './title.css';

export type Props = { title: string, icon: string };
// tslint:disable-next-line
export const Title: (props: Props) => JSX.Element =
    (props: Props) => (
        <div className='title'>
            <i className={props.icon} aria-hidden='true'></i>
            <span>{props.title}</span>
        </div>
    );