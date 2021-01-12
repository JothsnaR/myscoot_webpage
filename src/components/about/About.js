import React from 'react';
import SocialIcons from '../socialIcon/socialIcons';

import './About.css';

const About = () => {
    return (
        <div className="aboutContainer">
            <div className="imageContainer">
                <img src='/profile_photo.svg' alt="profileimg" className="profileImg" />
            </div>
            <div className="aboutData">
                <div className="aboutHeading">
                    <span className="about">About</span> 
                    <span className="name">Neelakshi</span>
                </div>
                <h4>Reiki Master | India’s first afro-latin DJ | iDance India Dance School Owner</h4>
                <div className="desc">
                    Neelakshi is a wellness coach who wears many hats to restore peace, joy and good health in all who she meets.
                    She runs her dance school in Delhi- iDance India Where she personally teaches salsa, bachata, Zouk, Kizomba and Bollywood. The academy offers more dance forms like Hip-hop, contemporary, Zumba, Bhangra. I am also a yogini, meditation coach, reiki master, hypnotherapist, access bars practitioner, Tarot reader, law of attraction Coach and Gratitude coach....
                    <span className="readMore">Read More</span>
                </div>
                <div className="socialIcons">
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default About;