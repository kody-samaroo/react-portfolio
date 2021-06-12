import React from 'react';
import resume from '../assets/resume.pdf';
import { FaGithub, FaLinkedin, FaMediumM } from 'react-icons/fa';
import { HomeStyles } from '../styles/HomeStyles';
import { Button } from 'react-bootstrap';

export default function Home() {

    function viewResume(){
        window.open(resume)
    }

    return (
        <HomeStyles>
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
                <FaMediumM 
                    className="medium-icon"
                    onClick={() => window.open('https://kodysamaroo.medium.com/')}
                />
            </div>

            <br/>
            <br/>
            <br/>

            <div className="home-about">
                Full stack software engineer with a background in informatics and big data. I am a passionate programmer looking to find simple solutions to solve complex problems.
            </div>

            <br/>
            <br/>

            <div className="home-buttons">
                <Button 
                    className="m-2 w-50 btn-dark font-weight-bold"
                    onClick={viewResume}
                > View Resume 
                </Button>

                {/* Button doesn't work - Link to contact page */}
                <Button 
                    className="m-2 w-50 btn-light font-weight-bold"
                > 
                Read more 
                </Button>

            </div>

        </HomeStyles>
    )
}
