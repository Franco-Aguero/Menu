import { ADD_HOME, GET_DETAIL_PRODUCT, REMOVE_HOME, SEARCH_PRODUCT } from "../Actions/Products";
import utils from "../../Components/utils";
let { bringSomeLocalStorage } = utils,
localStorage = bringSomeLocalStorage("cart");
const initialState = {
    searchProduct: [],
    homeProduct: localStorage?.length > 0 ? localStorage : [],
    specificProduct: {},
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
        case GET_DETAIL_PRODUCT:
            return { ...state, specificProduct: payload }
        default:
            return state;
    }
}
export default Products;