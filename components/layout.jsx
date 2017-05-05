import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Product from "./products/product.jsx";
import SideMenu from "./UI/sideMenu.jsx";
import Products from "../pages/Products";
import store from "../store"
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

export default class Layout extends React.Component{  
    constructor(){
        super();
        this.state = {
            title:"State, Props and Events"
        }
    }  
    changeTitle(title){
        this.setState({title});
    }
    render(){   
        return(        
            <div>              
               <Header>
                    <SideMenu>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>                
                    <li><a class="waves-effect" href="#!">All Collection</a></li>
                    <li><a class="waves-effect" href="#!">Bangeldd</a></li>
                    <li><a class="waves-effect" href="#!">Bangel2</a></li>    
                 </SideMenu>  
               </Header>                                     
        <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/topics">Topics</Link></li>
</ul>
                  
               {this.props.children}
            </div>
        ) 
    }
}