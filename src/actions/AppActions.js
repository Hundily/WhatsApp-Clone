import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { CHANGE_VALUE, ERROR_REGISTER, ERROR_LOGIN, AUTH_USER, SUCCESS_REGISTER, LOADING } from './types';

export const ChangeValue = (state, val) => {
    return {
        type: CHANGE_VALUE,
        state: state,
        payload: val,
    }
}

export const AddContact = (val) => {
    console.log('AddContactAddContact', val);
    return dispatch => {
        dispatch({ type: LOADING });
    }
    // return {
    //     type: CHANGE_VALUE,
    //     state: state,
    //     payload: val,
    // }
}