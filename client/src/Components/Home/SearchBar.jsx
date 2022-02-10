import { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import { searchProduct } from "../../Redux/Actions/Products";

const SearchBar = () => {
    let [name, setName] = useState(""), dispatch = useDispatch();
    const handleChange = (e) => setName(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.length <= 2) return;
        dispatch(searchProduct(name))
        alert(name)
    }
    return (
        <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={name}
            onChange={handleChange}
            />
            <Button type="submit" variant="outline-success">Search</Button>
        </Form>
    )
}
export default SearchBar;


/* import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { Formik } from 'formik';
const SearchBar = () => {
    let [name, setName] = useState("");
    const handleChange = (e) => setName(e.target.value)

    return (
        <Formik
            initialValues={ { name:"", } }

            validate={ (valores, handleSubmit) => {
                if(valores.name.length > 2) handleSubmit()
            }}

            onSubmit={ (valores, {resertForm}) => {
                valores.preventDefault();
                alert(valores.name)
                resertForm()
            }}
        >
            { ({values, handleSubmit, handleChange}) => (

                <Form onSubmit={handleSubmit} className="d-flex">
                    <FormControl
                    type="search"
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
export default SearchBar; */