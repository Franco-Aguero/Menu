import { useState } from 'react';
import { useDispatch } from "react-redux"
import { Form } from "react-bootstrap";
import { sendLogin } from "../../Redux/Actions/Login";

const Login = () => {
  let [state, setState] = useState({
    email:"",
    password:"",
  });
  let dispatch = useDispatch();
  const handleChange = (e) => setState({ ...state, [e.target.name] : e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch( sendLogin(state));
  }

  return (
    <article className='d-flex justify-content-center align-items-center' style={{height:"calc(100vh - 2.6rem)"}}>
      <Form onSubmit={handleSubmit} className='d-flex flex-column w-100' style={{maxWidth:"370px"}}>
        <h2 className="text-center mb-4">Log In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={state.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>

        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </Form>
    </article>
  );
}

export default Login;