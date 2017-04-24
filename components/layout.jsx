import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Product from "./products/product.jsx";

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
                <h1> Product Listing</h1>
                <Header title={this.state.title} changeTitle={this.changeTitle.bind(this)}/>
                <div>

                      <Product/>

                </div>

                <Footer/>
            </div>
        ) 
    }
}