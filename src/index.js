import React from 'react';
import ReactDOM from 'react-dom';
import "../src/stylesheets/myStyles.css"
import Layout from "../components/layout.jsx";
import store from "../store"
import {Provider} from 'react-redux';


ReactDOM.render( <Layout/>,
document.getElementById("container"));