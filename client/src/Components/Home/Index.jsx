import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useModal } from "../../ModalSettings/useModal";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-bootstrap/Spinner'
import CardHome from "../Views/CardHome";
import ListResults from "../ModalComponents/ListResults";
import ImgDefault from "./menu.png";
import SearchBar from "./SearchBar";
import utils from "../utils";
import { loadingToggleAction } from "../../Redux/Actions/Login";
import NavBarClosed from "../ModalComponents/NavBarClosed"
import "./indexHome.css";

const Home = () => {
    let menuProducts = useSelector( state => state.Products.homeProduct), dispatch = useDispatch(),
    searchProducts = useSelector( state => state.Products.searchProduct.products);
    let [isOpenShow, openModalShow, closeModalShow] = useModal(false), 
    [togleFlag, setTogleFlag] = useState(true),
    {addSomethingLocalStorage, totalPriceCart} = utils;

    const openModalListResult = () => {
        openModalShow();
        handleClose();
    },
    resetToken = () => {
        localStorage.clear();
        return window.location.assign(`${process.env.REACT_APP_URL_CLIENT}/login`)
    };
    const [show, setShow] = useState(false),
    handleClose = () => setShow(false),
    handleShow = () => setShow(true);

    useEffect( () => {
        if(togleFlag) return setTogleFlag( togleFlag = false );
        addSomethingLocalStorage("cart", menuProducts)
    },[menuProducts])
    
    return (
        <article className="d-flex flex-column" style={{height: "calc(100vh - 2.6rem)"}}>
            <div className="d-flex justify-content-center" style={{width:"100%"}}>
                <div className="Home__ContainerNavBar" >
                    <NavBarClosed higher={8} less={10} show={show} handleShow={handleShow} handleClose={handleClose}>
                        <ul className="Home__MenuUl">
                            <li>
                                Full menu price: {totalPriceCart(menuProducts)}$
                            </li>
                            <li onClick={openModalListResult} style={{position:"relative"}}>
                                Search Result 
                                { searchProducts?.length > 0 && <Spinner animation="grow" variant="success"style={{position:"absolute", top:"12px", right:"135px", width:"7px", height:"7px"}} />}
                            </li>
                            <li onClick={resetToken}>
                                Log Out
                            </li>
                        </ul>
                    </NavBarClosed>  
                    <SearchBar handleClick={openModalShow} />
                </div>
            </div>
            <>
                {
                    menuProducts?.length > 0 ?
                    <div className="d-grid justify-content-center" id="Home__ContainerResults">
                        {
                        menuProducts.map( (el, index) => 
                            <Link to={`/details/${el.id}`} key={index} onClick={()=> dispatch( loadingToggleAction(true))} style={{textDecoration:"none", color:"black"}}>
                                <CardHome
                                    viewHome={true}
                                    id={el.id}
                                    name={el.title}
                                    image={el.image}
                                /> 
                            </Link>
                            ) 
                        }
                    </div>
                    : 
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{marginTop:"7rem"}}>
                        <h4 className="text-center" style={{marginBottom:"1.2rem"}}>You have no dishes <br /> on the menu</h4>
                        <div className="position-relative">
                            <img src={ImgDefault} alt="menu default" />
                            <FontAwesomeIcon icon={faXmark} className="position-absolute" style={{fontSize:"3rem",bottom:"-1.5rem",right:".2rem"}} />
                        </div>
                        <span className="text-center" style={{marginTop:"2rem"}}>
                            We invite you to search for our <br />
                            dishes in the search bar at the top
                        </span>
                    </div>
                }

            </>
            { isOpenShow && <ListResults isOpenShow={isOpenShow} closeModalShow={closeModalShow} />}
        </article>
    )
}
export default Home;