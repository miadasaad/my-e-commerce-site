export const GET_PRODUCT = 'GET_PRODUCT';


export function get_products(products) {
    return {
        type: GET_PRODUCT,
        products
    }
}

