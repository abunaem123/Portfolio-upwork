import React from 'react';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
        </div>
        
    );
};

export default Home;