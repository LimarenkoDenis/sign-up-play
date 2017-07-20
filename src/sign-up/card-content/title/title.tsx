import * as React from 'react';

import './title.css';
// tslint:disable-next-line
export const Title: (props: { title: string, icon: string }) => JSX.Element =
    (props: { title: string, icon: string }) => (
        <div className='title'>
            <i className={props.icon} aria-hidden='true'></i>
            <span>{props.title}</span>
        </div>
    );