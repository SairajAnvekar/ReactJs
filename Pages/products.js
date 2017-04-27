import React from "react";

import Product from "../components/products/product.jsx";

export default class Products extends React.Component{
 
  render(){
        const Products = [
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
            "Some Article",
            "Some Other Article",
            "Yet Another Article",
            "Still More",
        ].map((title, i) => <Product key={i} title={title} />);

      return(
        <div class="row">
           {Products}
       
        </div>        

      );
  }





}