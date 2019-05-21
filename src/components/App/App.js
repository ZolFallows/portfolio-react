import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
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
    let homeBottom = homeNode.offsetHeight
    let projectBotttom = homeBottom + projectNode.offsetHeight

    if (window.scrollY < homeBottom) {
      this.setLocation('home')
    }
    if(window.scrollY > homeBottom && window.scrollY < projectBotttom){
      this.setLocation('projects')
    }

    if(window.scrollY > projectBotttom-60){
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
      top = this.projectsRef.current.offsetTop - 60
      console.log(top)
    }
    if(loc === 'contact') {
      top = this.contactRef.current.offsetTop
    }
    window.scrollTo({
      top, 
      behavior: "smooth" 
    })

    this.setLocation(loc)
  }

  render(){
    return (
      <div className="App">
        <Navbar handleTo={this.handleTo} current={this.state.current}/>
        <Header homeRef={this.homeRef} handleTo={this.handleTo}/>
        <Projects projectsRef={this.projectsRef} />
        <Contact contactRef={this.contactRef} />
        <Footer />
      </div>
    )
  }

}


