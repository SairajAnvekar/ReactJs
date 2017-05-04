import React from "react";
import { connect } from "react-redux"
import Product from "../components/products/product.jsx";

import { fetchProduct } from "../actions/productActions";

@connect((store) => {

    console.log("store");
        console.log(store);
  return {
    // //1
     product: store.product.product, // userreducer.user property
    
  };
})




export default class Products extends React.Component{

	componentWillMount() {
		this.props.dispatch(fetchProduct())
	}

 
fetchTweets() {
    this.props.dispatch(fetchProduct())
  }

  render(){
      const {product}=this.props;
       console.log("product");
      console.log(product);
    const Products = product.map((title, i) => <Product key={i} {...title} />);

      return(
        <div class="row">		
           {Products}  
        </div>        

      );
  }





}

