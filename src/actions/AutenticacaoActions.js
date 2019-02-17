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

export const autenticacaoUser = (email, password) => {
    console.log('autenticacaoUser email', email);
    console.log('autenticacaoUser password', password);


    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(
            email,
            password
        ).then(res => {
            console.log('res', res);
            dispatch({ type: 'authentication_user' });
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
            dispatch({ type: 'error_login', payload: err.message });
            // this.setState({ message: err.code, loading: false })
        })
    }


}