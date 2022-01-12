import React, { Component } from 'react'
import App from '../App'
import SearchField from './SearchField'
import { Link } from "react-router-dom";

export default class NavBar extends Component {

    render() {
        return(
            <div>
                <div> <h1>Student: Pjerind Zefi</h1></div>
                <div className="App-header">
                    <h1>GIPHY APP</h1>
                </div>

                <div className="nav-bar">
                    <Link to="/">
                        <button className="nav-button">
                            TRENDING
                        </button>
                    </Link>
                    <Link to="/Search">
                        <button className="nav-button">
                            SEARCH
                        </button>
                    </Link>
                    <Link to="/Random">
                        <button className="nav-button" onClick={() => window.location.href="/Random"}>
                            RANDOM
                        </button>
                    </Link>
                </div>
            </div> 
        )
    }
}

