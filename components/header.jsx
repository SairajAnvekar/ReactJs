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
        <div>
            <header className="makeCenter">
                 <Title title={this.props.title}/>
            </header>
            <input type="text" value={this.props.title} 
            onChange ={this.handleChange.bind(this)}/>
        </div>
        )
    }
}