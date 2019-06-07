import React, { Component } from "react"
import { Link } from "react-router-dom"

import './search.css'


class Snippet extends  Component{
   
    render(){
        return(
            <div className="snippetBoxWrapper">
                <div className="searchTitle">
                   <Link to={{
                       pathname:'/main-content',
                       state:{
                           searchTitle:this.props.searchTitle,
                           searchList:this.props.searchList,
                       }
                   }}> 
                        <h3>
                            { this.props.searchTitle }
                        </h3>
                    </Link>
                </div>
                <div className="searchLink">
                    { this.props.searchLink }
                </div>
                <div className="searchBody" dangerouslySetInnerHTML={{ __html: this.props.searchBody }}>
                </div>
            </div>
        )
    }

}
export default Snippet