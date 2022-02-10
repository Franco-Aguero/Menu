import axios from "axios";
import Swal from 'sweetalert2';

export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
const headers= {
    'content-type': 'application/json',
    'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  };
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
/* const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...'
  }
  
  axios.post(Helper.getUserAPI(), data, {
      headers: headers
    }) */