import { useSelector } from "react-redux";
import Modal from "../../ModalSettings/modal";
import CardHome from "../Views/CardHome";
import LoadingSpinner from "../Views/LoadingSpinner";
import "./ListResults.css"

const ListResults = ({ isOpenShow, closeModalShow}) => {
    let searchProducts = useSelector( state => state.Products.searchProduct.products),
    showSpinner = useSelector( state => state.Products.showLoading);
    return (
        <Modal isOpen={isOpenShow} closeModal={closeModalShow}>
            <div className="d-flex text-center" style={{height:"2.5rem",background:"#ffff", borderBottom: "1px solid #dfdfdf"}}>
                <h4 style={{margin:"auto", cursor:"pointer"}} onClick={closeModalShow}>To close</h4>
            </div>
            <div className="ContainerScroll">
                {
                    searchProducts?.length > 0 ?
                    <div className="d-grid justify-content-center" id="ListResults__ContainerResults">                  
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
            { showSpinner && <LoadingSpinner /> }
            </div>
        </Modal>
    )
}
export default ListResults;