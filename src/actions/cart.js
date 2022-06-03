export const SAVE_PRODUCT = 'SAVE_PRODUCT';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function save_Product_to_cart(product) {

    return {
        type: SAVE_PRODUCT,
        product
    }
}

export function delete_Product_from_cart(id) {

    return {
        type: REMOVE_ITEM,
        id
    }
}

export function increment_count(id) {

    return {
        type: INCREMENT,
        id
    }
}

export function decrement_count(id) {

    return {
        type: DECREMENT,
        id
    }
}
