import { combineReducers } from 'redux';
import users from './users';
import userFriends from './userFriends';
import modal from './modal';



export default combineReducers({
    users,
    userFriends,
    modal,
});
