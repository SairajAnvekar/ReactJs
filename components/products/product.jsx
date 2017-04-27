import React from "react";
// import "../src/stylesheets/myStyles.css";

export default class Product extends React.Component{
    render(){

        const { title } = this.props;

        return (   
    
             <div class="col s12 m2">
                <div class="card small ">
                    <div class="card-image">                        
                        <img src="http://materializecss.com/images/sample-1.jpg"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">{title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>

                        <table>
                            <tr>
                                <td>hello</td>
                                <td>check</td>
                                </tr>
                            </table>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
             </div>
       
        )
    }
}