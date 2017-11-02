import * as React from 'react';

import './next-button.css';


export type Props = {
  disabled: boolean;
  onChangeView: Function;
};
// tslint:disable-next-line
export const NextButton = (props: Props) => {
  const changeView: () => void = (): void => {
    props.onChangeView();
  };

  return (
    <div className='next-button'>
      <button onClick={changeView} disabled={props.disabled}>
        <i className='fa fa-arrow-right' aria-hidden='true'></i>
      </button>
    </div>
  );
};