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
        error: null
    }

    componentDidMount(){
        this.setState({error: null})
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({error: null})
        const { name, email, phone, message} = e.target
        

        let template_params = {
            "reply_to": email.value,
            "from_name": name.value,
            "to_name": process.env.REACT_APP_NAME,
            "message_html": `${message.value}. Contact ${name.value} on ${phone.value}`
         }

         console.log(template_params)
         
         let service_id = process.env.REACT_APP_SERVICE
         let template_id = process.env.REACT_APP_TEMPLATE
         console.log(service_id, template_id)

         emailjs
            .send(service_id, template_id, template_params)
            .then((res) => {
                console.log('SUCCESS!', res.status, res.text);
            })
            .catch(err => {
                this.setState({error: `Failed to send email. Error: ${err}`})
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
                            <h2>Contact me</h2>
                            <ul>
                                <li>LinkedIn</li>
                                <li>GitHub</li>
                                <li>Email</li>
                                <li>Insta</li>
                            </ul>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            {this.state.error !== null && <p className="error">{this.state.error}</p>}
                            <div className="input-wrapper">
                                <input type="text" name="name" placeholder="Name" required/>
                                <input type="email" name="email" placeholder="Email" required/>
                                <input type="number" name="phone" placeholder="Phone"/>
                            </div>
                            <textarea className="textarea" name="message" rows="5" placeholder="Message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}