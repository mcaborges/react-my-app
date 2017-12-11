import React, { Component } from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron.jsx';

class About extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <Jumbotron title="About" subtitle="About subtitle"/>
                <div className="container">
                    <h2>Welcome</h2>
                    <p>
                        About
                    </p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;