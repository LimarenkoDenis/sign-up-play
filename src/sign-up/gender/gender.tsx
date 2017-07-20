import * as React from 'react';
import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

// tslint:disable-next-line
export class Gender extends React.Component<{ update: React.EventHandler<any> }> {
    public render(): JSX.Element {
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
                        />
                            Female
                    </label>
                </div>
                <NextButton />
            </div>
        );
    }
}