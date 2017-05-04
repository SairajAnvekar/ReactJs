import React from "react";
import Title from "./header/title.jsx";
// import "../src/stylesheets/myStyles.css";
import SideMenu from "./UI/sideMenu.jsx";

export default class Header extends React.Component{
    handleChange(evt){
      const title = evt.target.value;
      //this.props.title = title; // not possible - props are immutable
      this.props.changeTitle(title);      
    }
    render(){
        return (      		
		<div>
			<nav>
			<div class="nav-wrapper">
			<a href="#!" class="brand-logo">Product</a>
			<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
			<ul class="right hide-on-med-and-down">
			<li><a href="sass.html">Sass</a></li>
			<li><a href="badges.html">Components</a></li>
			<li><a href="collapsible.html">Javascript</a></li>
			<li><a href="mobile.html">Mobile</a></li>
			</ul>
			<ul class="side-nav" id="mobile-demo">
			<li><a href="sass.html">Sass</a></li>
			<li><a href="badges.html">Components</a></li>
			<li><a href="collapsible.html">Javascript</a></li>
			<li><a href="mobile.html">Mobile</a></li>
			</ul>
			</div>
			</nav>          
		
		
		</div>
        )
    }
}