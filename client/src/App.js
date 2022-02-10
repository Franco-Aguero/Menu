import { Route } from 'react-router-dom';
import './App.css';

import Login from "./Components/Login/Index";
import Home from "./Components/Home/Index"
function App() {

  return (
    <div>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </div>
  )
}

export default App;
