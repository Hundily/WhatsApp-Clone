import { CHANGE_VALUE, ERROR_ADD_CONTACT, LOADING_ADD_CONTACT } from '../actions/types';

const INITIAL_STATE = {
    email_contact: '',
    messageErrAddContact: '',
    loadingBtnContact: false
}

export default (state = INITIAL_STATE, action) => {
    console.log('state', state);
    switch (action.type) {
        case CHANGE_VALUE:
            return { ...state, [action.state]: action.payload }
        case ERROR_ADD_CONTACT:
            return { ...state, [action.state]: action.payload }
        case LOADING_ADD_CONTACT:
            return { ...state, loadingBtnContact: !state.loadingBtnContact }
        default:
            return state;
    }
}