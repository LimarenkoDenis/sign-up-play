import * as React from 'react';
import { store } from '../store/root.store';
import './sign-up.css';

import { CardFooter } from './card-footer/card-footer';
import { CardHeader } from './card-header/card-header';
import { CardContent } from './card-content/card-content';

// tslint:disable-next-line
export const SignUp = (props: { viewIndex: number }) => {

    const onChange: (e: KeyboardEvent) => void = (e: KeyboardEvent): void => {
        // tslint:disable-next-line
        const el: any = e.target;
        store.dispatch({
            type: 'ADD_DATA',
            payload: { [el.name]: el.value }
        });
    };

    return (
        <div className='container-fluid sign-up-form' >
            <CardHeader />
            <CardContent update={onChange} viewIndex={props.viewIndex} />
            <CardFooter />
        </div>
    );

};