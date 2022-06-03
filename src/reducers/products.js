import { GET_PRODUCT } from './../actions/products';


export default function products(state = { products: [] }, action) {
    console.log("test");
    console.log(action.products);
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                // ...action.products
                products: [...action.products]
                // products: [...action.products]
                // products: [Object.assign({}, ...action.products)]
            }
        default:
            return state
    }
}
