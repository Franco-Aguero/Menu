import { useSelector } from "react-redux";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner } from "react-bootstrap";
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Na = ({ higher, less, children, show, handleClose, handleShow} ) => {
    let searchProducts = useSelector( state => state.Products.searchProduct.products);
    
    return (
      <>
        { higher < less && 
        <div style={{position:"relative"}}>
          { searchProducts?.length > 0 && 
            <Spinner animation="grow" variant="success"style={{position:"absolute", top:"-4px", right:"-10px", width:"7px", height:"7px"}} />
          }
          <FontAwesomeIcon onClick={handleShow} style={{fontSize:"1.6rem", cursor:"pointer"}} icon={faBars} /> 
        </div>
        }
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{padding:"0 0 1rem"}}>
            { children }
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  }
export default Na;