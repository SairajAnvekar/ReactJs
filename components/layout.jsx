import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Product from "./products/product.jsx";
import SideMenu from "./UI/sideMenu.jsx";
import Products from "../pages/Products";

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
                    <li><a class="waves-effect" href="#!">Bangel</a></li>
                    <li><a class="waves-effect" href="#!">Bangel2</a></li>    
                 </SideMenu>  
               </Header>                                     
               
                 <div> 
                      <Products/>                  
                 </div>





             
            </div>
        ) 
    }
}