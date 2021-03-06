import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addHome, removeHome } from "../../Redux/Actions/Products";

const CardHome = ({ name, image, id, viewHome}) => {    //options view details and delete of menu
    const dispatch = useDispatch(),
    addingHome = () => dispatch( addHome(id)), 
    removeOfHome = (id) => dispatch( removeHome(id)); 
    
    return (
        <div className="col-3 d-print-flex justify-content-center" style={{width:"220px",}}>
            <div className="card">
                <img src={image} className="card-img-top" alt={name} style={{width:"200px", height:"200px", objectFit:"cover" , margin:".5rem auto 0"}}/>
                <div className="card-body">
                    <h5 className="card-title text-center">{name}</h5>
                </div>
            {
                viewHome ?
                <Link to="/home" style={{width:"80%",margin:"0 auto 8px"}} >
                    <button type="button" onClick={() => removeOfHome(id)} className="btn btn-outline-dark" style={{width:"100%", }}>Remove</button>
                </Link>
                : 
                <button type="button" onClick={() => addingHome()} className="btn btn-outline-dark" style={{width:"80%", margin:"0 auto 8px"}}>Add to menu</button>
            }    
            </div>
        </div>
    )
}
export default CardHome;