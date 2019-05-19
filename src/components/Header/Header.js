import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="header" ref={this.props.homeRef}>
                    <div className="header-content">
                        <h1>Full Stack Developer.</h1>
                        <p>Based out of London...</p>
                    </div>
                    <div className="hire">
                        <span className="hire-btn" onClick={() => this.props.handleTo('contact')}>I'm looking to hire ></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}