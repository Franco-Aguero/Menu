import axios from "axios";
import Swal from 'sweetalert2';

export const sendLogin = (info) => {
    return async() => {
        try {
            let { data } = await axios.post(`http://challenge-react.alkemy.org/`, info)
            alert("logeo exitoso")
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