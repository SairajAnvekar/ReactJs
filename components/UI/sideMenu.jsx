import React from "react";
// import "../src/stylesheets/myStyles.css";

export default class SideMenu extends React.Component{

    componentDidMount() {
        //access to array, containing <div>test</div><div>test</div>
        console.log(this.props.children);
        //would log childtext, because I am grabbing the child of the first <div> in the array
        console.log(this.props.children[1].props.children);
    }
    render(){
        return (
            <div>
                <ul id="slide-out" class="side-nav">                
                 {this.props.children}
                </ul>
                <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu j</i></a>        
            </div>

        )
    }
}