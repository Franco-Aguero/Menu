import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImgDefault from "./menu.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./SearchBar";
import CardHome from "../Views/CardHome";
import { useModal } from "../Modal/useModal";
import Modal from "../Modal/modal";
import "./indexHome.css"
const Home = () => {
    let searchProducts = useSelector( state => state.Products.searchProduct.products);
    let menuProducts = useSelector( state => state.Products.homeProduct);
    let [isOpenShow, openModalShow, closeModalShow] = useModal(false);
    return (
        <article className="d-flex flex-column" style={{height: "calc(100vh - 2.6rem)"}}>
            <div className="d-flex justify-content-end" style={{margin:"1rem 3rem 0 0"}}>
                <div className="w-50 d-flex align-items-center justify-content-between">
                    <span onClick={openModalShow} style={{cursor:"pointer"}}>Search Result</span>
                    <SearchBar handleClick={openModalShow} />
                </div>
            </div>
            <>
                {
                    menuProducts?.length > 0 ?
                    <div className="d-grid justify-content-center" style={{margin:"2.5rem auto", paddingBottom:"2rem" , gridTemplateColumns:"repeat(3,auto)", rowGap:"1rem", columnGap:"2.5rem"}}>
                        {
                        menuProducts.map( (el, index) => 
                            <Link to={`/details/${el.id}`} key={index} style={{textDecoration:"none", color:"black"}}>
                                <CardHome
                                    viewHome={true}
                                    id={el.id}
                                    name={el.name}
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
            {
                isOpenShow && 
                <Modal isOpen={isOpenShow} closeModal={closeModalShow}>
                    <div className="d-flex text-center" style={{height:"2.5rem",background:"#ffff", borderBottom: "1px solid #dfdfdf"}}>
                        <h4 style={{margin:"auto", cursor:"pointer"}} onClick={closeModalShow}>To close</h4>
                    </div>
                    <div className="ContainerScroll">
                        {
                            searchProducts?.length > 0 ?
                            <div className="d-grid justify-content-center" style={{ height:"500px", paddingBottom:"1.5rem", gridTemplateColumns:"repeat(3,auto)", rowGap:"1rem", columnGap:"1rem"}}>                  
                                {
                                    searchProducts.map( el => <CardHome
                                        key={el.id}
                                        id={el.id}
                                        name={el.title}
                                        image={el.image}
                                    /> ) 
                                }
                            </div>
                            : <h3 className="text-center" style={{margin:"1.5rem 0"}}>Without results</h3>
                        }
                    </div>
                </Modal>
            }
        </article>
    )
}
export default Home;