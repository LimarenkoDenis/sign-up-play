import * as React from 'react';
import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

// tslint:disable-next-line
export const Gender = (props: { update: React.EventHandler<any> }) => {
    return (
        <div>
            <Title title='Please tell us your gender ...' icon='fa fa-question-circle-o' />
            <div className='radio'>
                <label>
                    <input
                        className='btn btn-default'
                        type='radio'
                        name='gender'
                        id='optionsRadios1'
                        value='male'
                        onChange={props.update}
                    />
                    Male
                    </label>
            </div>
            <div className='radio'>
                <label>
                    <input
                        className='btn btn-default'
                        type='radio'
                        name='gender'
                        id='optionsRadios2'
                        value='female'
                        onChange={props.update}
                    />
                    Female
                    </label>
            </div>
            <NextButton />
        </div>
    );
};