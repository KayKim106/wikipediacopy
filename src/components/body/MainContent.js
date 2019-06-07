import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Navbar from '../nav/Navbar'

import './body.css'

import Snippet from '../search/Snippet'

class MainContent extends Component {

    constructor(props){
        super(props)

        this.state = {
            searchResult:[],
            fullContent:'',
        }
    }
    componentWillMount(){
        let searchTitle = this.props.location.state.searchTitle;
    
        this.setState({
            searchTitle:searchTitle,
             
        })
        this.getWikipediaContentAPICall(searchTitle)
    }


    getWikipediaContentAPICall(searchTitle) {

        let URL = 'http://localhost:4000/api/v1/content?titles=' + searchTitle

        fetch(URL)
            .then(response => response.json())
            .then(response => this.setState({ fullContent: response }))

    }
    render(){
        
        const { fullContent } = this.state; 

        return(
            <div className="bodyWrapper">
                <Navbar searchList = { this.props.location.state.searchList }/>
                <div className="row">
                    <div className="col-md-10  bodyHeader">
                    <h3>Wikipedia Search result : { this.state.searchTitle }</h3>
                    </div>    
                </div>
                
                { fullContent && 
                    <div className="row bodyContainer">
                        <div className="col-md-10 contents" dangerouslySetInnerHTML={{ __html: fullContent.parse.text["*"] }}>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MainContent