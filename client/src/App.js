import { Redirect, Route, Switch } from 'react-router-dom';
import Nav from "./Components/Nav/Index"
import Error from './Components/PageNotFound/Index';
import Login from "./Components/Login/Index";
import Home from "./Components/Home/Index"
import DetailProduct from './Components/Views/DetailProduct';

function App() {
let user = localStorage.getItem("tokenMenu");
console.log(user)
  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path="/" render={ () => { return user? <Redirect to="/home" /> : <Login/> } }/>
        <Route exact path="/login" render={ () => { return user? <Redirect to="/home" /> : <Login/> } }/>
        <Route exact path="/home" render={ () => { return user? <Home/> : <Redirect to="/login" /> } }/>
        <Route exact path="/details/:id" 
          render={ ({match}) => { return user?  <DetailProduct id={match.params.id}/> : <Redirect to="/login" /> } 
        }/>
        
        <Route path="*" render={ () => { return user? <Error/> : <Redirect to="/login" /> } } />
      </Switch>
    </>
  )
}

export default App;