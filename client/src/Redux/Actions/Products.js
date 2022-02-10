import axios from "axios";
import Swal from 'sweetalert2';

export const SEARCH_PRODUCT = "SEARCH_PRODUCT",
ADD_HOME = "ADD_HOME",
REMOVE_HOME = "REMOVE_HOME",
GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";

export const searchProduct = (name) => {
    return async(dispatch) => {
        try {
            let { data } = await axios.get(`https://api.spoonacular.com/food/products/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
            dispatch({ type:SEARCH_PRODUCT , payload: data})
        }   
        catch (error) { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sucedio un error!',
              })
        }
    }
}
export const addHome = (data) => {
    return async(dispatch) => {
        try {           
            dispatch({ type:ADD_HOME , payload: data})
        }   
        catch (error) { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sucedio un error!',
              })
        }
    }
}
export const removeHome = (id) => {
    return async(dispatch) => {
        try {           
            dispatch({ type:REMOVE_HOME , payload: id})
        }   
        catch (error) { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sucedio un error!',
              })
        }
    }
}
export const getDetailProduct = (id) => {
    return async(dispatch) => {
        try {           
            let { data } = axios.get(`das`)
            dispatch({ type:GET_DETAIL_PRODUCT , payload: data})
        }   
        catch (error) { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sucedio un error!',
              })
        }
    }
}