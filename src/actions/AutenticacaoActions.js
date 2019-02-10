import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';

export const ChangeValue = (state, val) => {
    return {
        type: 'change_value',
        state: state,
        payload: val,
    }
}

export const registerUser = (name, email, password) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                let emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`).push({ name })
                    .then(val => {
                        dispatch({ type: 'success_register' });
                        Actions.welcome();
                    })
            }).catch(err => {
                dispatch({ type: 'error_register', payload: err.message });
            })
    }
}