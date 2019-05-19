import React, { Component } from 'react'
import './Projects.css'
export default class Projects extends Component {
    render(){
        return (
            <React.Fragment>
                <div ref={this.props.projectsRef} className="projects">

                </div>
            </React.Fragment>
        )
    }
}