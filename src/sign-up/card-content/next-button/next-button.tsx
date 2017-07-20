import * as React from 'react';
import { store } from '../../../store/root.store';

import './next-button.css';

// tslint:disable-next-line
export const NextButton = (props: { disabled: boolean }) => {
  const changeView: () => void = (): void => {
    store.dispatch({
      type: 'NEXT_VIEW'
    });
  };

  return (
    <div className='next-button'>
                <button onClick={changeView} disabled={props.disabled}>
                    <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </button>
    </div>
  );
};