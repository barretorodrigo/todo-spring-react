import React, {Component} from 'react'
import './menu.css'

export default class Menu extends Component{
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-tasks"> </i> ToDo - List
                </a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                </div> */}
            </nav>   
            </div>   
        )
    }
}
