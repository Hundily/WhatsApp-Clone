import { CHANGE_VALUE, ERROR_REGISTER, ERROR_LOGIN, AUTH_USER, SUCCESS_REGISTER, LOADING } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    messageErr: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, [action.state]: action.payload }
        case ERROR_REGISTER:
            return { ...state, messageErr: action.payload, loading: false }
        case SUCCESS_REGISTER:
            return { ...state, name: '', password: '', loading: false }
        case AUTH_USER:
            return { ...state, loading: false }
        // console.log('authentication_user no reducers');
        case ERROR_LOGIN:
            return { ...state, messageErr: action.payload, loading: false }
        case LOADING:
            // console.log('loading', LOADING);
            return { ...state, loading: true }
        default:
            return state;
    }
}