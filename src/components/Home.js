import React from 'react';
import resume from '../assets/resume.pdf';
import { Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai'
import { HomeStyles } from '../styles/HomeStyles';

export default function Home({ darkMode }) {

    function downloadCV(){
        window.open(resume)
    }

    return (
        <HomeStyles darkMode={darkMode}>
            <div className="home">
                <img className="home-img" src="https://avatars.githubusercontent.com/u/73686621?v=4" alt="Profile"/>

                <div className="home-name">
                    <p> Kody Samaroo </p>
                </div>
                <div className="home-bio">
                    <p> Software Engineer </p>
                </div>
            </div>

            <div className="home-icons">
                <FaGithub
                    className="github-icon"
                    onClick={() => window.open('https://github.com/jodycola?tab=repositories')}
                />
                <FaLinkedin 
                    className="linkedin-icon"
                    onClick={() => window.open('https://www.linkedin.com/in/kody-samaroo/')}
                />
                <AiFillMediumCircle 
                    className="medium-icon"
                    onClick={() => window.open('https://kodysamaroo.medium.com/')}
                />
            </div>

            <br/>

            <div className="home-about">
            Full Stack Software Engineer proficient in JavaScript, React and Ruby frameworks with a background study in  Information Technology, Data Analytics and Data Management. I am a competent team member able to shine in any role and empower the team members around me. I am motivated to use new technologies to find simple solutions to solve complex problems. 
            </div>

            <br/>

            <div className="home-buttons">
                <Button 
                    className={darkMode ? 'btn-light btn-lg': 'btn-primary btn-lg'}
                    onClick={downloadCV}
                > Download CV 
                </Button>
            </div>

        </HomeStyles>
    )
}
