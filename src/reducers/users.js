import { GET_USERS, ADD_USER } from './../actions/users';

export default function users(state = { users: [] }, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case ADD_USER:
            console.log(action.user)
            return {
                ...state,
                users: [...state.users, action.user]
            }
        default:
            return state
    }
}
