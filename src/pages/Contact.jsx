import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron.jsx';

class Contact extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <Jumbotron title="Contact" subtitle="About subtitle"/>
                <div className="container">
                    <h2>Welcome Contact</h2>
                    <p>
                        Contact
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;