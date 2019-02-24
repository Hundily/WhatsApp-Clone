import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { CHANGE_VALUE, ERROR_ADD_CONTACT, ERROR_LOGIN, AUTH_USER, SUCCESS_REGISTER, LOADING } from './types';

export const ChangeValue = (state, val) => {
    return {
        type: CHANGE_VALUE,
        state: state,
        payload: val,
    }
}

export const AddContact = (email) => {
    // dispatch({ type: LOADING });


    return dispatch => {
        let emailB64 = b64.encode(email);

        firebase.database().ref(`/contatos/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    const { currentUser } = firebase.auth();
                    let emailUser = b64.encode(currentUser.email);

                    firebase.database().ref(`/user_contact/${emailUser}`)
                        .push({ email, name: 'Nome contato' })
                        .then(console.log('sucesso'))
                        .catch(console.log('err'))
                } else {
                    dispatch({
                        type: ERROR_ADD_CONTACT,
                        state: 'messageErrAddContact',
                        payload: 'Usuário não encontrado'
                    })
                }
                // dispatch({ type: LOADING });
            })
    }
}