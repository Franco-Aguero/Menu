import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../../Redux/Actions/Products";
import { Link } from "react-router-dom";

const DetailProduct = ({id}) => {
    const dispatch = useDispatch(), specificProduct = useSelector( state => state.Products?.specificProduct);
    useEffect( () => {
        dispatch( getDetailProduct(id))
    },[])
    return (
        <article style={{height:"calc(100vh - 2.6rem)"}}>
            { 
            Object.keys(specificProduct).length > 1 ?
            <div className="d-flex align-items-center justify-content-center" style={{height:"100%", gap:"4.5rem", padding:"0 1rem"}}>
                <div className=""> 
                    <img src={specificProduct.image} alt={specificProduct.title} />
                </div>

                <div>
                    <p style={{maxWidth:"435px", margin: "0 0 .5rem 0"}}><b>Name:</b> {specificProduct.title}</p> 
                   {/*  <p>{specificProduct.generatedText}</p> */}
                    <span className="d-block"><b>Brand:</b>  {specificProduct.brand || "---"}</span>
                    <span className="d-block">Price: <b style={{color:"#ff7455"}}>{specificProduct.price}$</b></span>
                    <div style={{borderBottom:"1px solid #ffefef", margin:".5rem 0"}} ></div>
                    {
                    specificProduct.ingredientList && 
                        <p style={{maxWidth:"435px"}}>
                            <b className="d-block ">List of ingredients:</b>
                            {specificProduct.ingredientList.length > 647? (specificProduct.ingredientList.slice(0, 648)+"."): specificProduct.ingredientList} 
                        </p>
                    }
                    <div className="d-flex" style={{gap:"2rem"}}>
                        <span>Calories: {specificProduct.nutrition.calories || "--"}</span>
                        <span>Protein: {specificProduct.nutrition.protein || "--"}</span>
                        <span>Carbs: {specificProduct.nutrition.carbs || "--"}</span>
                    </div>
                </div>
                <Link to="/home" style={{position:"absolute",top:".3rem", right:"40px", color:"black", fontSize:"1.2rem",textDecoration:"none",fontWeight:"400"}}>Back to menu</Link>
            </div>
            : 
                <span>Se rompio</span>
            }
        </article>
    )
}
export default DetailProduct;