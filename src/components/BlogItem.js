import React from 'react';
import { BlogItemStyles } from '../styles/BlogItemStyles'

export default function BlogItem({ title, img, desc, link }) {

    return (
        <BlogItemStyles>
            <a href={link}>
            <img className="blog-item-img" src={img} alt="blog-preview"/>
            </a>
            <div className="blog-item-info">
                <h3 className="blog-item-title">{title}</h3>
                <p className="blog-item-desc">{desc}</p>
            </div>
        </BlogItemStyles>
    )
}
