import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './navbar.css'
class Navbar extends Component {

    constructor(props){
        super(props)
    }
    render() {
      
        return(
            <div className="navbarWrapper">
                <div className="menu">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        {this.props.searchList &&
                            <Link to={{
                                        pathname:"/search-list",
                                        state:{
                                            searchResult:this.props.searchList
                                            }
                                    }}>
                                <li>List</li>
                            </Link>
                        }
                    </ul>                      
                </div>   
            </div>
        )
    }
}
export default Navbar