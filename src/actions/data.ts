import { Action } from 'redux';

export const ADD_DATA: string = 'ADD_DATA';
export const NEXT_VIEW: string = 'NEXT_VIEW';

// tslint:disable-next-line
export const stateActions = {
    // tslint:disable-next-line
    onStateChange(payload: { [key: string]: string  }) {
        return {
            type: ADD_DATA,
            payload
        };
    },
    onViewChange(): Action {
        return {
            type: NEXT_VIEW
        };
    }
};
