import axios from "axios";
import Swal from 'sweetalert2';

export const LOADING_TOGGLE = "LOADING_TOGGLE";

export const sendLogin = (info) => {
    return async(dispatch) => {
        try {
            let oldUrl = process.env.REACT_APP_ALKEMY;
            let newUrl = new URL("/", oldUrl);  
            dispatch( loadingToggleAction(true))
            let { data } = await axios.post(`${newUrl}`, info)
            localStorage.setItem("tokenMenu", data.token);
            dispatch( loadingToggleAction(false))
            window.location.assign(`${process.env.REACT_APP_URL_CLIENT}/home`);
        }   
        catch (error) { 
            dispatch( loadingToggleAction(false))
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sucedio un error!',
              })
        }
    }
}

export const loadingToggleAction = (state) => {
    return (dispatch) => {
        dispatch({type: LOADING_TOGGLE, payload: state})
    }
}