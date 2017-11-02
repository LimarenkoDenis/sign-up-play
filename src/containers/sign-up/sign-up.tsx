import * as React from 'react';
import './sign-up.css';
import { NextButton } from './card-content/next-button/next-button';
import { CardFooter } from './card-footer/card-footer';
import { CardHeader } from './card-header/card-header';
import { CardContent } from './card-content/card-content';
import { Data } from '../../reducers/data.reducer';

export type Props = {
  viewIndex: number,
  onChangeState: (payload: { [key: string]: string }) => void;
  onChangeView: () => void;
  disabled: boolean;
  data: Data
};

// tslint:disable-next-line
export class SignUp extends React.Component<Props> {

  public onChange: (e: KeyboardEvent) => void = (e: KeyboardEvent): void => {
    // tslint:disable-next-line
    const el: HTMLInputElement = e.target as HTMLInputElement;
    this.props.onChangeState({
      [el.name]: el.value
    });
  };


  public render(): JSX.Element {
    const { viewIndex, onChangeView, disabled, data } = this.props;
    return (
      <div className='container-fluid sign-up-form'>
        <CardHeader />
        <CardContent update={this.onChange} viewIndex={viewIndex} data={data} />
        {viewIndex < 4
          ? <NextButton disabled={disabled} onChangeView={onChangeView} />
          : ''
        }
        <CardFooter />
      </div>
    );
  }

}