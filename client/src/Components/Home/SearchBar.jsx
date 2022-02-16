import { Formik } from 'formik';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { searchProduct } from "../../Redux/Actions/Products";

const SearchBar = ({ handleClick }) => {
    let dispatch = useDispatch();
    return (
        <Formik
            initialValues={ { name:"", } }
            onSubmit={ (valores) => {
                if(valores.name.length <= 2 ) return Swal.fire("3 character minimum search");
                dispatch( searchProduct(valores.name));
                handleClick();
            }}
        >
        { ({values, handleSubmit, handleChange}) => (

            <Form onSubmit={handleSubmit} className="d-flex">
                <FormControl
                type="text"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id="name"
                value={values.name}
                onChange={handleChange}
                />
                <Button type="submit" variant="outline-success">Search</Button>
            </Form>
        )}
    </Formik>
    )
}
export default SearchBar;