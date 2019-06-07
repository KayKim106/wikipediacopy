import React, { Component } from 'react'
import axios from 'axios'
import fecth from 'isomorphic-unfetch'
import { Link } from "react-router-dom"


import logo from '../../assets/images/logo.png'
import Body from '../body/Body'
import Navbar from '../nav/Navbar'
import './search.css'

import { relative } from 'path';

class Search extends Component {
    
    constructor(props) {
        super(props)

        this.myRef = React.createRef()
        this.state = {
        
            searchValue: '',
            wikipediaResultData: [],
            searchResult: [],
            fullContent: '',
            isShowSuggestion: false,
        }
    }

    // Get New result list while user input text

    componentDidUpdate(prevProps, prevState) {
    
        if (prevState.searchValue !== this.myRef.current.value){
            
            let searchString = this.stringConvert(this.myRef.current.value)
            this.getWikipediaListAPICall(searchString)

        } 

    }

    // Get Input Value and Set it to State

    onSearchInput = () => {

        let searchValue = this.myRef.current.value

        this.setState({ searchValue })
    
    }

    // Call Wikipedia API Content to back end side

    getWikipediaContentAPICall(searchString) {

        let URL = 'http://localhost:4000/api/v1/content?titles=' + searchString

        fetch(URL)
            .then(response => response.json())
            .then(response => this.setState({ fullContent: response }))

    }

    // Get Suggestion List by user typing

    getWikipediaListAPICall(searchString) {
       
        let URL = 'http://localhost:4000/api/v1/list?search=' + searchString

        fetch(URL)
            .then(res => res.json())
            .then(res => this.setState({
                wikipediaResultData: res.query,
                searchResult: res && res.query && res.query.search ? res.query.search : [],
                searchListClicked: true
            }))
    }

    // String empty value convert to "_"

    stringConvert(inputString) {

        let searchString = inputString

        searchString = searchString.replace(/\s+/g,'_')
        
        return searchString
    }

    // Search Content with Input String

    onSearchBtnClicked = () => { 
    
        let searchString = this.stringConvert(this.state.searchValue)
     
        this.getWikipediaContentAPICall(searchString)

        this.setState({ 
            searchResult: [],
             isShowSuggestion: false 
            })
            

    }

    // Search Content with Clicked List String

    onSearchListClicked = (e) => {

        let searchString = this.stringConvert(e.currentTarget.dataset.title)

        this.getWikipediaContentAPICall(searchString)
    
        this.setState({searchValue: e.currentTarget.dataset.title})

        this.setState({ 
            searchResult: [],
            isShowSuggestion: false,
        })
    }

    showSuggestion = () => {

        this.setState({ isShowSuggestion: true })
    }
    componentWillUnmount(){

    }

    
    render() {
      
        let {searchValue,searchResult,fullContent,isShowSuggestion} = this.state
    
        return(
            <div className="searchSectionWrapper">
                <div className="searchContainer col-md-12">
                    <div className="row logoWrapper">
                        <div className="pageLogo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="searchBar col-md-7" style={{ position:"relative", margin:"0 auto" }}>
                          <div className="listWrapper input-group row" >
                                <ul id="result-list">
                                        {isShowSuggestion &&
                                            searchResult.map(( result, i) => (
                                                <li key={ i } className="col-md-12 form-control result-li" data-title={result.title} onClick={this.onSearchListClicked} style={{ listStyle: 'none', border:"1px solid black", margin:"0 auto" }}>{result.title}</li>
                                            ))
                                        }
                                </ul>
                                <input autoComplete="off" type="text" className="col-md-12 form-control"  onKeyPress={this.showSuggestion}  placeholder="Enter here..." id="searchValue" value={searchValue} onChange={ this.onSearchInput } ref={this.myRef} />
                                <Link to={{ pathname:"/search-list",
                                            state:{
                                                searchResult:this.state.searchResult,
                                                searchList:this.state.searchList,
                                                }
                                        }}>
                                    <button className="btn btn-primary btn-md" type="submit" onClick={this.onSearchBtnClicked}><i className="fa fa-search"></i> Search</button>   
                                </Link>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        )
    }
}
export default Search