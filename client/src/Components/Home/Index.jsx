import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CardHome from "../Views/CardHome";
import Accordion from 'react-bootstrap/Accordion'
const Home = () => {
    let searchProducts = useSelector( state => state.Products.searchProduct.products)
    return (
        <article>
            <SearchBar/>
            
            <Accordion defaultActiveKey={['0']} alwaysOpen className="col-9">
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="text-center">Resultados</Accordion.Header>
                    <Accordion.Body className="d-grid justify-content-center" style={{gridTemplateColumns:"repeat(3,auto)", rowGap:"1rem", columnGap:"1rem"}}>                  
                        {
                            searchProducts?.length > 0 ?
                            searchProducts.map( el => <CardHome
                                key={el.id}
                                name={el.title}
                                image={el.image}
                                features={el.features}
                            /> ) 
                            : <span>No hay nada</span>
                        }
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </article>
    )
}
export default Home;