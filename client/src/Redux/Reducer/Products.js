import { SEARCH_PRODUCT } from "../Actions/Products";
const initialState = {
    searchProduct: [],
    homeProduct: []
}

const Products = ( state = initialState, action) => {
    let { type, payload} = action;
    switch (type) {
        case SEARCH_PRODUCT:
            return { ...state, searchProduct: payload}
        default:
            return state;
    }
}
export default Products;