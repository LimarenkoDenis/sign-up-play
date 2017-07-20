import * as React from 'react';

import './card-content.css';

import { Info } from './info/info';
import { Gender } from './gender/gender';
import { Resident } from './resident/resident';
import { Result } from './result/result';

// tslint:disable-next-line
export const CardContent = (props: { viewIndex: number, update: any }) => {

    let view: JSX.Element;
    switch (props.viewIndex) {
        case 1:
            view = <Info update={props.update} />;
            break;
        case 2:
            view = <Gender update={props.update} />;
            break;
        case 3:
            view = <Resident update={props.update} />;
            break;
        case 4:
            view = <Result />;
            break;
        default:
            view = <Info update={props.update} />;
    }
    return (view);
};