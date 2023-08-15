import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactFormStyles.css";

function ContactFrom() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9w7549w', 'template_s8gvpvd', form.current, 'DMFKY6zbYMQF_Xtq2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form-container">
            <h1>Join Us</h1>
            <p>To Be Better.</p>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name='user_name' required />
                <input type="email" placeholder="Email" name='user_email' required />
                <input type="tel" placeholder="Mobile No." name='user_no' maxLength={10} minLength={10} required />
                <textarea placeholder="Message" rows="4" name='user_msg'></textarea>
                <button>Join</button>
            </form>
        </div>
    )
}

export default ContactFrom;