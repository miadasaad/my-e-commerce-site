import { get_users, addUser } from '../actions/users'
import { get_products } from '../actions/products'
import { setAuthedUser } from '../actions/authedUser'
import { _getProducts, _getUsers, _saveUser } from '../utils/data'
import { _saveProduct } from './../utils/data';
import { save_Product_to_cart, delete_Product_from_cart, increment_count, decrement_count } from '../actions/cart'

const AUTHED_ID = null

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ users, products }) => {
            dispatch(get_users(users))
            dispatch(get_products(products))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

export function saveProduct(product) {
    return (dispatch) => {

        return _saveProduct(product)
            .then((product) => {
                dispatch(save_Product_to_cart(product))
            })
    }
}
export function saveUser(user) {
    console.log(user)
    return (dispatch) => {
        return _saveUser(user)
            .then((user) => {
                dispatch(addUser(user))
            })
    }
}

export function deleteProduct(id) {
    return (dispatch) => {
        dispatch(delete_Product_from_cart(id))
    }
}
export function increment(id) {
    return (dispatch) => {
        dispatch(increment_count(id))
    }
}
export function decrement(id) {
    return (dispatch) => {
        dispatch(decrement_count(id))
    }
}


function getInitialData() {
    return Promise.all([_getUsers(), _getProducts()]).then(([users, products]) => ({
        users,
        products
    }))

}

