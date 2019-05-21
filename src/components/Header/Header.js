import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="header-container" ref={this.props.homeRef}>
                    <div className="header">
                        <div className="header-content">
                            <h1>Full Stack Developer.</h1>
                            <h4>I believe that curiosity is my number one personality characteristic, which has led me to coding and got me hooked on it. I enjoy taking on challenges that come with every project. If you are an employer looking to hire, you can get in touch with me <span className="here" onClick={() => this.props.handleTo('contact')}>here</span>.</h4>
                        </div>
                        <div className="hire">
                            <span className="hire-btn" onClick={() => this.props.handleTo('contact')}>I'm looking to hire ></span>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}