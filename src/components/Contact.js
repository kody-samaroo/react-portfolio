import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ContactStyles } from '../styles/ContactStyles';

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    function handleSubmit(e) {
        e.preventDefault();

        fetch('/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(res => res.json())
        .then(res => {
            if ( res.status === 'Message Sent') {
                alert('Message sent. Thank you!')
                setName("")
                setEmail("")
                setMessage("")
            } else if ( res.status === 'Error' ) {
                alert('Message failed to send. Try again')
            }
        })
    }

    return (
        <ContactStyles>
            <div className="contact">
                <h2> Contact </h2>
                <br/>
                <div className="contact-wrapper">
                    <div className="contact-form">
                        <div className="form">
                            <label> Your Name </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label> Your Email </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label> Your Message </label>
                            <textarea
                                type="text"
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />  
                        </div>
                        <Button 
                            onClick={handleSubmit}
                            className="btn-light btn-lg"
                            type="submit"
                        > Send 
                        </Button>
                    </div>
                </div>
            </div>
        </ContactStyles>
    )
}
