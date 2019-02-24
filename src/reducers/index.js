import { combineReducers } from 'redux';
import AutenticacaoReducers from './AutenticacaoReducers';
import AppReducers from './AppReducers';

export default combineReducers({
    AutenticacaoReducers: AutenticacaoReducers,
    AppReducers: AppReducers,
})