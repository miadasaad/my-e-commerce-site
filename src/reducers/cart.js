import { SAVE_PRODUCT, REMOVE_ITEM, INCREMENT, DECREMENT } from './../actions/cart'

export default function cart(state = { cart: [] }, action) {
    switch (action.type) {

        case SAVE_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.product]
            }

        case REMOVE_ITEM:
            return {
                ...state,
                cart: [...state.cart.filter((item) => {
                    return item.product.id !== action.id
                })]
            }

        case INCREMENT:
            return {
                ...state,
                cart: [...state.cart.map(item => {
                    if (item.product.id === action.id) {
                        item.product.count++
                    }
                    return item
                })]
            }
        case DECREMENT:
            const index = state.cart.findIndex(p => p.product.id === action.id);
            state.cart.forEach(item => {
                if (item.product.id === action.id) {
                    if (item.product.count === 1) {
                        state.cart.splice(index, 1);
                    }
                    else {
                        item.product.count--
                    }
                }
            })
            return {
                ...state,
                cart: [...state.cart]
            }
        default:
            return state
    }
}
