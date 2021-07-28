import React from 'react';
import { ProjectItemStyles } from '../styles/ProjectItemStyles'
import { AiOutlinePlayCircle, AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'


export default function BlogItem({ title, img, desc, stack, github, website, demo, darkMode }) {

    const renderStack = stack.map((language) => {
        return `${language} `
    })

    return (
        <ProjectItemStyles darkMode={darkMode}>
            <img className="project-item-img" src={img} alt="project-preview"/>
            <div className="project-item-info">
                <h3 className="project-item-title">{title}</h3>
                <h4 className="project-links">
                    { demo ? <AiOutlinePlayCircle onClick={() => window.open(`${demo}`)}/> : null } 
                    { website ? <RiExternalLinkLine onClick={() => window.open(`${website}`)}/> : null }
                    { github ? <AiFillGithub style={{ color: 'red' }} onClick={() => window.open(`${github}`)}/> : null } 
                </h4>
                <h5> {renderStack} </h5>
                <p className="project-item-desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    )
}