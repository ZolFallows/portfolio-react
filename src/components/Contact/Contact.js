import React, { Component } from 'react'
import * as emailjs from 'emailjs-com';
import Map from '../Map/Map'
import './Contact.css'


const styles = {
    width: '100%',
    height: '40vh'
  }

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleOnChange = (e) => {
        e.preventDefault()
        this.setState({
            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        })
        const name = e.target.name
        const value = e.target.value

        this.setState({[name]: value})
    }

    validateInputs = () => {
        let errors = this.state.errors
        let isValid = true
        if(!this.state.name || this.state.name.length < 3 ){
            errors.name = 'Minimum 3 symbols'
            isValid = false
        }
        if(!this.state.subject || this.state.subject.length < 3 ){
            errors.subject = 'Minimum 3 symbols'
            isValid = false
        }
        if(!this.state.message || this.state.message.length < 25 ){
            errors.message = 'Minimum 25 symbols'
            isValid = false
        }
        let regEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!regEmail.test(this.state.email)){
            errors.name = 'Email is not valid'
            isValid = false
        }

        this.setState({errors})
        return isValid
    }


    handleSendEmail = (e) => {
        e.preventDefault()
        this.setState({
            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        })
        if(!this.validateInputs())
            return
        
        let template ={
            from_name: this.state.name + ' (' + this.state.email +')',
            to_name: process.env.REACT_APP_NAME,
            subject: this.state.subject,
            message_html: this.state.message,
        }

        const template_id = process.env.REACT_APP_TEMPLATE
        const user_id =process.env.REACT_APP_USER_ID

         emailjs
            .send('gmail', template_id, template, user_id)
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch(err => {
                console.log(`Failed to send email. Error: ${err}`)
            })

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    render(){
        return (
            <React.Fragment>
                <div ref={this.props.contactRef} className="contact">
                 <div style={styles}>
                    <Map />
                    </div>
                    <div className="contact-info">
                        <div className="contact-links">
                            <h2 className="contact-me">Contact me</h2>
                            <ul>
                                <li>
                                    <a href="https://www.linkedin.com/in/zoljargal-fallows-5b630a107/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/z0174rg41/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github-square fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:zol.fallows@hotmail.com">
                                        <i className="fas fa-envelope-square fa-2x"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ZolFallows" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram fa-2x"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form>
                        
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                placeholder="Name" 
                                value={this.state.name}
                                onChange={this.handleOnChange}
                                required
                            />
                            {this.state.errors.name.length > 0 ? <p>{this.state.errors.name}</p> : ''}
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                placeholder="Email" 
                                value={this.state.email}
                                onChange={this.handleOnChange}
                                required
                            />
                            {this.state.errors.email.length > 0 ? <p>{this.state.errors.email}</p> : ''}
                            <input 
                                type="text" 
                                className="form-control" 
                                name="subject" 
                                placeholder="Subject"
                                value={this.state.subject}
                                onChange={this.handleOnChange}
                                required
                            />
                            {this.state.errors.subject.length > 0 ? <p>{this.state.errors.subject}</p> : ''}
                    
                            <textarea 
                                className="form-control" 
                                name="message" 
                                rows="8" 
                                placeholder="Message"
                                value={this.state.message}
                                onChange={this.handleOnChange}
                                required
                            >
                            </textarea>
                            {this.state.errors.message.length > 0 ? <p>{this.state.errors.message}</p> : ''}
                            <button 
                                type="button" 
                                onClick={this.handleSendEmail} 
                            >Send
                            </button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}