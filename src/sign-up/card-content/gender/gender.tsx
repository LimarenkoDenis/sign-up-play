import * as React from 'react';
import { Title } from '../title/title';

import './gender.css';

// tslint:disable-next-line
export const Gender = (props: { update: React.EventHandler<any> }) => {
    return (
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
                    Male
                </label>
                <label className='btn btn-default'>
                    <input
                        type='radio'
                        name='gender'
                        id='optionsRadios2'
                        value='female'
                        onChange={props.update}
                    />
                    Female
                    </label>
            </div>
        </div>
    );
};