import * as React from 'react';
import { store } from '../store/root.store';
import './sign-up.css';
import { NextButton } from './card-content/next-button/next-button';
import { CardFooter } from './card-footer/card-footer';
import { CardHeader } from './card-header/card-header';
import { CardContent } from './card-content/card-content';

// tslint:disable-next-line
export class SignUp extends React.Component<{ viewIndex: number }> {

  public disabled: boolean = true;

  public constructor() {
    super();
    this.state = store.getState().viewReducer;
    // tslint:disable-next-line
    store.subscribe(() => {
      const { title, name, surname, resident, gender } = store.getState().dataReducer;
      const { viewIndex } = store.getState().viewReducer;

      switch (viewIndex) {
        case 1:
          this.disabled = !(title && name && surname);
          break;
        case 2:
          this.disabled = !gender;
          break;
        case 3:
          this.disabled = !resident;
          break;
        default:
          this.disabled = true;
      }
    });

  }

  public onChange: (e: KeyboardEvent) => void = (e: KeyboardEvent): void => {
    // tslint:disable-next-line
    const el: any = e.target;
    store.dispatch({
      type: 'ADD_DATA',
      payload: {
        [el.name]: el.value
      }
    });
  };


  public render(): JSX.Element {
    return (
      <div className='container-fluid sign-up-form'>
        <CardHeader/>
        <CardContent update={this.onChange} viewIndex={this.props.viewIndex}/>
        {this.props.viewIndex < 4 ? <NextButton disabled={this.disabled}/> : ''}
        <CardFooter/>
      </div>
    );
  }

}