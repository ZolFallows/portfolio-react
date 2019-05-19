import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
// import Map from '../Map/Map'
import './App.css';

export default class App extends Component {
  constructor(){
    super()
    this.homeRef = React.createRef()
    this.projectsRef = React.createRef()
    this.contactRef = React.createRef()
    this.state ={
      isLoading: true,
      current: 'home'
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
    this.setState({
      isloading: false,
      current: 'home'
    })
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const homeNode = this.homeRef.current
    const projectNode = this.projectsRef.current
    // const contactNode = this.contactRef.current
    let homeBottom = homeNode.offsetHeight
    let projectBotttom = homeBottom + projectNode.offsetHeight
    // let contactBottom = projectBotttom + contactNode.offsetHeight

    // console.log('header height: ', homeBottom)
    // console.log('window pos: ', window.scrollY)
    if (window.scrollY < homeBottom) {
      // console.log('header bottom NOT reached')
      this.setLocation('home')
    }
    if(window.scrollY > homeBottom && window.scrollY < projectBotttom){
      this.setLocation('projects')
    }

    if(window.scrollY > projectBotttom){
      this.setLocation('contact')
    }

  }

  setLocation = (loc) => {
    this.setState({current : loc})
  }

  handleTo = (loc) => {
    let top;
    if(loc === 'home') {
      top = this.homeRef.current.offsetTop
    }
    if(loc === 'projects') {
      top = this.projectsRef.current.offsetTop
    }
    if(loc === 'contact') {
      top = this.contactRef.current.offsetTop
    }
    this.setLocation(loc)
    window.scrollTo({
      top, 
      behavior: "smooth" 
    })
  }

  render(){
    return (
      <div className="App">
        <Navbar handleTo={this.handleTo} current={this.state.current}/>
        <Header homeRef={this.homeRef} handleTo={this.handleTo}/>
        <Projects projectsRef={this.projectsRef} />
        <Contact contactRef={this.contactRef} />
      </div>
    )
  }

}


