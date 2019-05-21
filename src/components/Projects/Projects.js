import React, { Component } from 'react'
import spaced from '../../images/spaced.png'
import spenful from '../../images/spendful.png'
import thinkforum from '../../images/thinkforum.png'
import quiz from '../../images/quiz.png'
import './Projects.css'
export default class Projects extends Component {
    render(){
        return (
            <React.Fragment>
                <div ref={this.props.projectsRef} className="projects">
                    <div className="project">
                        <div className="grid-50">
                            <img src={spenful} alt="Spendful"/> 
                        </div>
                        <div className="grid-50 description">
                            <h1>
                                <a href="https://spendful.now.sh/" target="_blank" rel="noopener noreferrer">Spendful</a>
                            </h1>
                            <p>A full stack React application developed for you to reach your financial goals by tracking every dollar you spend and earn. This app allows you to add all of your incomes and expenses and visualize them through convenient charts and graphs. </p>
                            <hr/>
                            <div className="centre">
                                <p className="tech"><strong>Techs: </strong>HTML, CSS, React, Context API, Moment, Graphjs, Node, Express, Knex, PostgreSQL, RRule, Luxon</p>
                            </div>
                            <p className="centre">
                                <a href="https://github.com/ZolFallows/spendful-client" target="_blank" rel="noopener noreferrer">Client</a> 
                        
                                <a href="https://github.com/ZolFallows/spendful-server" target="_blank" rel="noopener noreferrer">Server</a>
                            </p>
                        </div>  
                    </div>
                    <hr className="project-seperator"/>
                    <div className="project">
                        <div className="grid-50">
                            <img src={spaced} alt="Ripetizione spaziale"/> 
                        </div>
                        <div className="grid-50 description">
                            <h1>
                                <a href="https://ripetizione.now.sh/" target="_blank" rel="noopener noreferrer">Ripetizione spaziale</a>
                            </h1>
                            <p>A full stack React application developed to improve your learning potential through utilising linked-list data structure with Postgresql. The algorithm updates the memory location to each corresponding word with the user guess. To put it simply, the words you get correct show up less frequently since you don’t need as much practice!</p>
                            <hr/>
                            <div className="centre">
                                <p className="tech"><strong>Techs: </strong>HTML, CSS, React, Context API, Node, Express, Knex, PostgreSQL, Linked-list data structure</p>
                            </div>
                            <p className="centre">
                                <a href="https://github.com/ZolFallows/spaced-repetition-client-zol-geordie" target="_blank" rel="noopener noreferrer">Client</a> 
                                
                                <a href="https://github.com/ZolFallows/spaced-repetition-server-zol-geordie" target="_blank" rel="noopener noreferrer">Server</a>
                            </p>
                        </div>  
                    </div>
                    <hr className="project-seperator"/>
                    <div className="project">
                        <div className="grid-50">
                            <img src={thinkforum} alt="thinkforum-app"/> 
                        </div>
                        <div className="grid-50 description">
                            <h1>
                                <a href="https://thinkforum.now.sh/" target="_blank" rel="noopener noreferrer">ThinkForum</a>
                            </h1>
                            <p>A full stack React application for exchanging ideas and views on any particular issues through form of posted messages/discussions.</p>
                            <hr/>
                            <div className="centre">
                                <p className="tech"><strong>Techs: </strong>HTML, CSS, React, Context APINode, Express, Knex, PostgreSQL</p>
                            </div>
                            <p className="centre">
                                <a href="https://github.com/ZolFallows/thinkforum-client" target="_blank" rel="noopener noreferrer">Client</a> 
                               
                                <a href="https://github.com/ZolFallows/thinkforum-server" target="_blank" rel="noopener noreferrer">Server</a>
                            </p>
                        </div>  
                    </div>
                    <hr className="project-seperator"/>
                    <div className="project">
                        <div className="grid-50">
                            <img src={quiz} alt="quiz-app"/>  
                        </div>
                        <div className="grid-50 description">
                            <h1>
                               <a href="https://zolfallows.github.io/quiz.html" target="_blank" rel="noopener noreferrer">LFC Quiz App</a>
                            </h1>
                            <p>An interactive quiz app, designed for Liverpool FC supporters to test their knowledge on the history of everything at Anfield.</p>
                            <hr/>
                            <div className="centre">
                                <p className="tech"><strong>Techs: </strong>HTML, CSS, JavaScript, jQuery</p>
                            </div>
                            <p className="centre">
                                <a href="https://github.com/ZolFallows/lfc-quiz-app" target="_blank" rel="noopener noreferrer">Client</a>
                            </p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}