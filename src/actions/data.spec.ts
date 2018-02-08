import { Action } from 'redux';
import { ADD_DATA, NEXT_VIEW, stateActions } from './data';

describe('NEXT_VIEW actions tests', () => {
  it('Should create add category action', () => {
    const expectedAction: Action = {
      type: NEXT_VIEW
    };
    expect(stateActions.onViewChange()).toEqual(expectedAction);
  });

  it('ADD_DATA action test', () => {
    const payload: { [key: string]: string } = { name: 'JsDaddy' };
    // TODO: use type Actions
    const expectedAction: { type: string, payload: { [key: string]: string }} = {
      type: ADD_DATA,
      payload
    };
    expect(stateActions.onStateChange(payload)).toEqual(expectedAction);
  });
});
