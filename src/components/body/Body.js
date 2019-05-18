import React, { Component } from 'react'
class Body extends Component {

    constructor(props) {
        super(props)
        this.state= {
        }
    }

    render(){

        return(
            <div className="bodyWrapper">
                <div className="row" style={{ padding:"30px 0 50px 30px" }}>
                    <div className="col-md-10">
                    <h3>Wikipedia Search result : {this.props.searchString}</h3>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-md-10" style={{ margin:"0 auto" }} dangerouslySetInnerHTML={{ __html: this.props.mainContent }}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body