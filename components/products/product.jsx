import React from "react";
// import "../src/stylesheets/myStyles.css";

export default class Product extends React.Component{
    render(){

        const { title ,image,body} = this.props;

        return (   
    
             <div class="col s12 m2">
                <div class="card Medium ">
                    <div class="card-image">                        
                        <img src={image}/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">{title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">{title}<i class="material-icons right">close</i></span>

                       
                        <p>{body}</p>
                    </div>
                </div>
             </div>
       
        )
    }
}