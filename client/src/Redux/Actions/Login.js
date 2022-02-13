import axios from "axios";
import Swal from 'sweetalert2';

export const sendLogin = (info) => {
    return async() => {
        try {
            let { data } = await axios.post(`http://challenge-react.alkemy.org/`, info)
            localStorage.setItem("tokenMenu", data.token);
            window.location.assign(`${process.env.REACT_APP_URL_CLIENT}/home`);
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