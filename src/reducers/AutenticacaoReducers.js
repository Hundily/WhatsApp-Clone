import { CHANGE_VALUE, ERROR_REGISTER, ERROR_LOGIN, AUTH_USER, SUCCESS_REGISTER } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    messageErr: ''
}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, [action.state]: action.payload }
        case ERROR_REGISTER:
            return { ...state, messageErr: action.payload }
        case SUCCESS_REGISTER:
            return { ...state, name: '', password: '' }
        case AUTH_USER:
            console.log('authentication_user no reducers');
        case ERROR_LOGIN:
            return { ...state, messageErr: action.payload }
        default:
            return state;
    }
}