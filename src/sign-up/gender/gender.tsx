import * as React from 'react';
import { Title } from '../title/title';

export class Gender extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <Title title='Please tell us your gender ...' icon='fa fa-question-circle-o' />
                <div className='radio'>
                    <label>
                        <input className='btn btn-default' type='radio' name='optionsRadios' id='optionsRadios1' value='male' checked />
                            male
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input className='btn btn-default' type='radio' name='optionsRadios' id='optionsRadios2' value='female' />
                            female
                    </label>
                </div>
            </div>
        );
    }
}