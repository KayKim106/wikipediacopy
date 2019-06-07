import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Navbar from '../nav/Navbar'
import Search from '../search/Search'

import './body.css'

import Snippet from '../search/Snippet'

class Body extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchResult:[],

        }
    }
    componentWillMount(){
        this.setState({
            searchResult:this.props.location.state.searchResult,


        })
    }

    render(){
        
        const { searchResult } = this.state;
     
        return(
            <div>
                <Navbar />
                <div className="bodyContent">
                {
                    searchResult &&
                     searchResult.map(( result, i)=>(
                        <Snippet key={ i } searchTitle = { result.title } searchBody = { result.snippet } searchList = {searchResult} />
                    ))
                }
                </div>
                
            </div>
            
        )
    }
}

export default Body