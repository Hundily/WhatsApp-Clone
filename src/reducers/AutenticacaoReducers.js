import { Actions } from "react-native-router-flux";

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    messageErr: ''
}

export default (state = INITIAL_STATE, action) => {

    console.log('action', action);

    if (action.type == 'change_value') {
        return { ...state, [action.state]: action.payload }
    }

    if (action.type == 'error_register') {
        return { ...state, messageErr: action.payload }
    }

    if (Actions.type == 'success_register') {
        return { ...state, name: '', password: '' }
    }

    // switch (action) {
    //     case action.type == 'change_value':
    //         return { ...state, [action.state]: action.payload }
    // }

    console.log('actions reducers', INITIAL_STATE);
    return state;
}