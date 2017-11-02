import { Reducer } from 'redux';
import { NEXT_VIEW } from '../actions/data';

export type View = { viewIndex: number };

export const viewReducer: Reducer<View> =
  (
    state: View = { viewIndex: 1 },
    action: { type: string, payload: void }
  ): { viewIndex: number } => {
    if (action.type === NEXT_VIEW && state.viewIndex < 4) {
      state.viewIndex = state.viewIndex + 1;
    }
    return { ...state };
  };