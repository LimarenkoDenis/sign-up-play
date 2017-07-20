import { Reducer } from 'redux';

export const viewReducer: Reducer<{ viewIndex: number }> =
  (
    state: { viewIndex: number } = { viewIndex: 1 },
    action: { type: string, payload: any }
  ): { viewIndex: number } => {
    if (action.type === 'NEXT_VIEW' && state.viewIndex < 4) {
      state.viewIndex = state.viewIndex + 1;
    }
    return state;
  };