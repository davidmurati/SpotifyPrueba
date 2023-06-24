import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login.js';
import Registro from './Registro.js';
import EliminarM from './EliminarM.js';
import Principal from './Principal.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>  
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/Registro" component={Registro} />
      <Route path="/EliminarM" component={EliminarM} />
      <Route path="/Principal" component={Principal} />
    </Switch>      
  </Router>
);

reportWebVitals();
