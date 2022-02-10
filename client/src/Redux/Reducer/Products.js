import { ADD_HOME, REMOVE_HOME, SEARCH_PRODUCT } from "../Actions/Products";
const initialState = {
    searchProduct: [],
    homeProduct: []
}

const Products = ( state = initialState, action) => {
    let { type, payload} = action;
    switch (type) {
        case SEARCH_PRODUCT:
            return { ...state, searchProduct: payload}
        case ADD_HOME:
            return { ...state, homeProduct: [...state.homeProduct, payload]}
        case REMOVE_HOME:
            return { ...state, homeProduct: state.homeProduct.filter( el => el.id !== payload) }
        default:
            return state;
    }
}
export default Products;