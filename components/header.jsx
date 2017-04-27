import React from "react";
import Title from "./header/title.jsx";
// import "../src/stylesheets/myStyles.css";

export default class Header extends React.Component{
    handleChange(evt){
      const title = evt.target.value;
      //this.props.title = title; // not possible - props are immutable
      this.props.changeTitle(title);      
    }
    render(){
        return (
        <div  class="header" >
                       {this.props.children}
        </div>
        )
    }
}