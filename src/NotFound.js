import React, { Component } from "react";
import MainContainer from "./MainContainer";


class NotFound extends Component {
    render(){
        return(
            <MainContainer>
                 <h1 className="page-header">{this.props.title}</h1>
                 <span> Not Found </span>
            </MainContainer>
        )
    }
}

export default NotFound;