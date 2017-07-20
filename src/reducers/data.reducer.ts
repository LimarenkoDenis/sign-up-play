import { Reducer } from 'redux';

type Data = {
  title: string,
  name: string,
  surname: string,
  gender: string,
  resident: string
};

const initData: Data = {
  title: '',
  name: '',
  surname: '',
  gender: '',
  resident: ''
};


export const dataReducer: Reducer<Data> =
  (
    state: Data = initData,
    // tslint:disable-next-line
    action: { type: string, payload: any }
  ): Data => {
    if (action.type === 'ADD_DATA') {
      state = { ...state, ...action.payload };
    }
    return state;
  };