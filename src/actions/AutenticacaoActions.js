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

export const registerUser = (name, email, password) => {
    return dispatch => {
        dispatch({ type: LOADING });
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                let emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`).push({ name })
                    .then(val => {
                        dispatch({ type: SUCCESS_REGISTER });
                        Actions.welcome();
                    })
            }).catch(err => {
                dispatch({ type: ERROR_REGISTER, payload: err.message });
            })
    }
}

export const autenticacaoUser = (email, password) => {

    return dispatch => {
        dispatch({ type: LOADING });

        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(res => {
            console.log('res', res);
            dispatch({ type: AUTH_USER });
            Actions.core();
            // return {
            //     type: 'teste_autenticacao_user'
            // }
            // AsyncStorage.setItem('token', JSON.stringify(res.user.refreshToken));
            // AsyncStorage.setItem('user_data', JSON.stringify(res));
            // global.token = res.user.refreshToken;
            // global.user = res;
            // this.setState({ loading: false })
            // Actions.core();
        }).catch(err => {
            console.log('err', err);
            dispatch({ type: ERROR_LOGIN, payload: err.message });
        })
    }


}