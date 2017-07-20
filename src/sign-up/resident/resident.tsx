import * as React from 'react';
import { Title } from '../title/title';
import { NextButton } from '../next-button/next-button';

// tslint:disable-next-line
export class Resident extends React.Component<{ update: React.EventHandler<any> }>{
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Are you UK resident?' icon='fa fa-home' />
                <div className='radio'>
                    <label>
                        <input
                            className='btn btn-default'
                            type='radio'
                            name='resident'
                            id='optionsRadios1'
                            value='true'
                        />
                        Yes
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input
                            className='btn btn-default'
                            type='radio'
                            name='resident'
                            id='optionsRadios2'
                            value='false'
                        />
                        No
                    </label>
                </div>

                <NextButton />
            </div>
        );
    }
}