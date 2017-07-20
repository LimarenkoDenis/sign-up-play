import * as React from 'react';
import { Title } from '../title/title';

import './resident.css';

// tslint:disable-next-line
export const Resident = (props: { update: React.EventHandler<any> }) => {
    return (
        <div>
            <Title title='Are you UK resident?' icon='fa fa-home' />
            <div className='btn-group col-md-12' data-toggle='buttons'>
                <label className='btn btn-default'>
                    <input
                        type='radio'
                        name='resident'
                        id='optionsRadios1'
                        value='true'
                        onChange={props.update}
                    />
                    Yes
                </label>
                <label className='btn btn-default'>
                    <input
                        type='radio'
                        name='resident'
                        id='optionsRadios2'
                        value='false'
                        onChange={props.update}
                    />
                    No
                    </label>
            </div>
        </div>
    );
};