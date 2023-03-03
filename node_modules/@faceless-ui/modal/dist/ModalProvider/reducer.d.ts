import { ModalStatus, ModalState } from './context';
export declare type UPDATE_MODAL = {
    type: 'UPDATE_MODAL';
    payload: ModalStatus;
};
export declare type OPEN_MODAL = {
    type: 'OPEN_MODAL';
    payload: {
        slug: string;
    };
};
export declare type CLOSE_MODAL = {
    type: 'CLOSE_MODAL';
    payload: {
        slug: string;
    };
};
export declare type TOGGLE_MODAL = {
    type: 'TOGGLE_MODAL';
    payload: {
        slug: string;
    };
};
export declare type REMOVE_MODAL = {
    type: 'REMOVE_MODAL';
    payload: {
        slug: string;
    };
};
export declare type CLOSE_LATEST_MODAL = {
    type: 'CLOSE_LATEST_MODAL';
    payload?: undefined;
};
export declare type CLOSE_ALL_MODALS = {
    type: 'CLOSE_ALL_MODALS';
    payload?: undefined;
};
export declare type Action = UPDATE_MODAL | OPEN_MODAL | REMOVE_MODAL | CLOSE_MODAL | TOGGLE_MODAL | CLOSE_LATEST_MODAL | CLOSE_ALL_MODALS;
declare const reducer: (state: ModalState, action: Action) => ModalState;
export default reducer;
