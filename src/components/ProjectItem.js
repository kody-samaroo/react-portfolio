import React from 'react';
import { ProjectItemStyles } from '../styles/ProjectItemStyles'

export default function BlogItem({ title, img, desc, stack, github, website, demo }) {

    return (
        <ProjectItemStyles>
            <img className="project-item-img" src={img} alt="project-preview"/>
            <div className="project-item-info">
                <h3 className="project-item-title">{title}</h3>
                <p className="project-item-desc">{desc}</p>
            </div>
        </ProjectItemStyles>
    )
}