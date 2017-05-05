import React from 'react';
import ReactDOM from 'react-dom';
import "../src/stylesheets/myStyles.css"
import Layout from "../components/layout.jsx";
import store from "../store"
import {Provider} from 'react-redux';
import Products from "../pages/Products";
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

ReactDOM.render( <Provider store={store}>
    <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <Route path="about" component={Products}/>      
    </Route>
  </Router>
  </Provider>,
document.getElementById("container"));