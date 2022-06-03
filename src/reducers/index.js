import { combineReducers } from 'redux';
import authedUser from './authedUser'
import users from './users'
import products from './products';
import cart from './cart';


export default combineReducers({
    authedUser,
    users,
    products,
    cart
})