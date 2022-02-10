import { Route } from 'react-router-dom';
import './App.css';
import Nav from "./Components/Nav/Index"
import Login from "./Components/Login/Index";
import Home from "./Components/Home/Index"
import DetailProduct from './Components/Views/DetailProduct';
function App() {

  return (
    <div>
      <Route path="/" component={Nav} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/details/:id" component={DetailProduct}/>
    </div>
  )
}

export default App;
