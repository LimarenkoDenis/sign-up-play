import { Reducer } from 'redux';
type Data = { [key: string]: number | boolean | string };
export const dataReducer: Reducer<Data> =
    (
        state: Data = {},
        // tslint:disable-next-line
        action: { type: string, payload: any }): Data => {
        if (action.type === 'ADD_DATA') {
            state = { ...state, ...action.payload };
        }
        return state;
    };