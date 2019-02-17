const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    messageErr: ''
}

export default (state = INITIAL_STATE, action) => {

    if (action.type == 'change_value') {
        return { ...state, [action.state]: action.payload }
    }

    if (action.type == 'error_register') {
        return { ...state, messageErr: action.payload }
    }

    if (action.type == 'success_register') {
        return { ...state, name: '', password: '' }
    }

    if (action.type == 'authentication_user') {
        console.log('authentication_user no reducers');
    }

    if (action.type == 'error_login') {
        return { ...state, messageErr: action.payload }
    }

    // switch (action) {
    //     case action.type == 'change_value':
    //         return { ...state, [action.state]: action.payload }
    // }
    return state;
}