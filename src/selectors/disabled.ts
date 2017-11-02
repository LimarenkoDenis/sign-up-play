import { createSelector } from 'reselect';
import { Data } from '../reducers/data.reducer';
import { View } from '../reducers/view.reducer';

const getIndex: (state: ModuleStore) => View = (
    state: ModuleStore
) => state.viewReducer;

const getData: (state: ModuleStore) => Data = (
    state: ModuleStore
) => state.dataReducer;


// tslint:disable-next-line:typedef
export const isDisabledSelector = createSelector(
    [getIndex, getData],
    (view: View, data: Data) => {
        const { title, name, surname, resident, gender } = data;
        switch (view.viewIndex) {
            case 1:
                return !(title && name && surname);
            case 2:
                return !gender;
            case 3:
                return !resident;
            default:
                return true;
        }
    });