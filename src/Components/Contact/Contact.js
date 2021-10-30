import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="div" id="contact">
            <h1>Contact Us</h1>
            <div className="parentDiv">
                <div className="child1">
                    <h2>Find us at</h2>
                    <p>Bashati Condominium (Floor 10/D), House # 15, Road # 17, Banani, Dhaka - 1213, Bangladesh</p>
                </div>
                <div className="child2">
                    <h2>Email us at</h2>
                    <p>ask@obokash.com</p>
                    <p>obokash.net@gmail.com</p>
                </div>
                <div className="child3">
                    <h2>Call us at</h2>
                    <p>+88-01945111444</p>
                    <p>+88-01931333888</p>
                </div>
            </div>

        </div>
    );
};

export default Contact;