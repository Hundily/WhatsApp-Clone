import { CHANGE_VALUE, ERROR_REGISTER, ERROR_LOGIN, AUTH_USER, SUCCESS_REGISTER, LOADING } from '../actions/types';

const INITIAL_STATE = {
    email: '',
    messageErr: '',
    loading: false
}

export default (state = INITIAL_STATE, action) => {
    console.log('state', state);
    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, [action.state]: action.payload }
        default:
            return state;
    }
}