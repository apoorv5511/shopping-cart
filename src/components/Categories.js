import React, { Component } from 'react';

class Categories extends Component{
    render(){
        return(
            <div className="container">
                
                <h3 className="center">Categories</h3>
                
                <div className="cat">
                <ul>
                    <li><h5>Mobiles & Computers</h5></li>
                    <li><h5>Sports & Fitness</h5></li>
                </ul>
            </div>
            </div>
        )
    }
}

export default Categories;