import {
    connect,
    MapStateToProps
} from 'react-redux';


import { Header } from './header';

export type StateProps = {
    viewIndex: number
};

const mapStateToProps: MapStateToProps<StateProps, void> = (
    state: ModuleStore
): StateProps => ({
    viewIndex: state.viewReducer.viewIndex,
});

// TODO should think about type
// tslint:disable-next-line
export default connect(mapStateToProps)(Header);