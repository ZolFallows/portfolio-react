import React, { Component } from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            showNavLinks: false,
            screenWidth: window.innerWidth,
            show: true,
            scrollPos: 0
        }
    }

    handleShowNavLinks = () => {
        this.setState({
            showNavLinks: !this.state.showNavLinks
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
        window.addEventListener('scroll', this.handleScroll);
    }
    
    handleResize = () => {
        this.forceUpdate()
    }
    
    handleScroll = () => {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
    }


    renderNavLinks = (classname) => {
        let selected = this.props.current 
        return (
            <div className={classname}>
                <ul>
                    <li className={selected === 'home'? 'selected' : ''} onClick={() => this.props.handleTo('home')}>Home</li>
                    <li className={selected === 'projects'? 'selected' : ''} onClick={() => this.props.handleTo('projects')}>Project</li>
                    <li className={selected === 'contact'? 'selected' : ''} onClick={() => this.props.handleTo('contact')}>Contact</li>
                </ul>
            </div>
        )
    }

    renderNavIcon = ()=>{
        let toggleClass = this.state.showNavLinks ? 'open' : ''
        return (
            <>
                <div id="nav-icon" className={toggleClass} onClick={this.handleShowNavLinks}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </>
        )
    }

    render(){
        let show = this.state.show ? "active" : "hidden"
        let selected = this.props.current === 'home' ? 'clear' : `${show} white fixed`;

        return (
            <React.Fragment>
                <nav className={selected}>
                        <div className="nav-wrapper">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                                <div>
                                    <h1>ZOL FALLOWS</h1>
                                    <h4>FULL-STACK DEVELOPER</h4>
                                </div>
                            </div>
                            <div className="links">
                                {window.innerWidth <= 768 
                                    ? this.renderNavIcon()
                                    : this.renderNavLinks('nav-links')
                                }
                            </div>
                        </div>
                        {window.innerWidth <= 768 && this.state.showNavLinks && this.renderNavLinks('nav-mobile')}
                </nav>
            </React.Fragment>
        )
    }
}