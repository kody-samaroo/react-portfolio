import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { Button } from 'react-bootstrap';
import { ContactStyles } from '../styles/ContactStyles';

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

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
                        <Button type="submit"> Send </Button>
                    </div>
                </div>
            </div>
        </ContactStyles>
    )
}
