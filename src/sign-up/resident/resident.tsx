import * as React from 'react';
import { Title } from '../title/title';

export class Resident extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Are you UK resident?' icon='fa fa-home' />
                <div className='radio'>
                    <label>
                        <input className='btn btn-default' type='radio' name='residentRadios' id='optionsRadios1' value='true' checked />
                        Yes
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input className='btn btn-default' type='radio' name='residentRadios' id='optionsRadios2' value='false' />
                        No
                    </label>
                </div>

            </div>
        );
    }
}