import { Reducer } from 'redux';
import { ADD_DATA } from '../actions/data';
export type Data = {
  title: string,
  name: string,
  surname: string,
  gender: string,
  resident: string
};

export const initData: Data = {
  title: '',
  name: '',
  surname: '',
  gender: '',
  resident: ''
};
type dataKey = keyof Data;

export const dataReducer: Reducer<Data> =
  (
    state: Data = initData,
    // tslint:disable-next-line
    action: { type: string, payload: { [key in dataKey]: string  }}): Data => {
    if (action.type === ADD_DATA) {
      state = { ...state, ...action.payload };
    }
    return state;
  };
