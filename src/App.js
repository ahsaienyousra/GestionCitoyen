import React from "react";
import DataFetching from './DataFetching';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from "./Heading";
import AddCitoyen from './AddCitoyen'
import EditCitoyen from "./EditCitoyen";
import { Container } from "reactstrap";

function App() {
  return (
    <div>
     {/* <div style={{maxWidth: "80rem", margin: "3rem auto"}}> */}
      
      <Router>
      <Heading/>
      <div className="container"style={{maxWidth: "80rem", margin: "3rem auto"}}>
        <Switch>
      <Route exact path="/" component={DataFetching}/>
      <Route path="/add" component={AddCitoyen}/>
      <Route path="/edit/:idcitoyen" component={EditCitoyen}/>
      </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
