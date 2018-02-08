import * as React from 'react';

import { Title } from '../title/title';
import './gender.css';

export type Props = { update: (e: React.FormEvent<HTMLInputElement>) => void };

// tslint:disable-next-line
export const Gender = (props: Props) => (
    <div>
        <Title title='Please tell us your gender ...' icon='fa fa-question-circle-o' />
        <div className='btn-group col-md-12' data-toggle='buttons'>
            <label className='btn btn-default'>
                <input
                    type='radio'
                    name='gender'
                    id='optionsRadios1'
                    value='male'
                    onChange={props.update}
                />
                <span>Male</span>
                <i className='fa fa-mars' aria-hidden='true'></i>
            </label>
            <label className='btn btn-default'>
                <input
                    type='radio'
                    name='gender'
                    id='optionsRadios2'
                    value='female'
                    onChange={props.update}
                />
                <span>Female</span>
                <i className='fa fa-venus' aria-hidden='true'></i>
            </label>
        </div>
    </div>
);
