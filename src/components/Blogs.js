import React from 'react';
import BlogItem from './BlogItem';
import { BlogStyles } from '../styles/BlogStyles';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export default function Blogs({ darkMode }) {

    SwiperCore.use([Navigation]);

    var uniqid = require('uniqid');

    const blogs = [
        {
            id: uniqid(),
            title: 'Dysfunctional Directories: 5 tips for organizing a directory',
            desc: '5 tips to organize your code',
            img: 'https://miro.medium.com/max/1282/1*kOVFnICgW59JBenCrApwFw.jpeg',
            link: 'https://kodysamaroo.medium.com/dysfunctional-directories-5-tips-for-organizing-a-directory-3816b15edc3d'
        },
        {
            id: uniqid(),
            title: 'React & Rails - Action Cable - Real-time chat application',
            desc: 'Learn to build a real-time chat application using React, Rails and ActionCable',
            img: 'https://miro.medium.com/max/499/1*dycDToeldyET2w-UvOAQKQ.jpeg',
            link: 'https://kodysamaroo.medium.com/learn-action-cable-and-react-by-building-a-real-time-messaging-application-9e4c15a5d913'
        },
        {
            id: uniqid(),
            title: 'Java — Access Modifiers — Public, Private, Protected & Default',
            desc: 'Use Access Modifiers in your next Java project or application to control data flow and regulate classes',
            img: 'https://developers.redhat.com/sites/default/files/blog/2014/09/java-icon-240c2a0c397c2a0171.jpeg',
            link: 'https://kodysamaroo.medium.com/java-access-modifiers-public-private-protected-default-38a71d0c1dd'
        },
        {
            id: uniqid(),
            title: 'Big O Notation: Calculate Time & Space Complexity',
            desc: 'Learn about big O notation and how to quickly implement in your next algorithm',
            img: 'https://miro.medium.com/max/520/0*BbK1CWx3QoyJ0YPG.jpg',
            link: 'https://kodysamaroo.medium.com/calculate-time-space-complexity-b516884823dc'
        },
        {
            id: uniqid(),
            title: 'JavaScript - Compare array elements',
            desc: 'Learn to compare arrays and sort elements within them.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdYEka2IGBPAM9hbgoiBl_s-BEiCGLqICldE2jhPItbS-7gQ8or0IUkWX51g1RpedjQs&usqp=CAU',
            link: 'https://kodysamaroo.medium.com/javascript-how-to-compare-elements-in-an-array-6a52a7a04339',
        },
        {
            id: uniqid(),
            title: 'JavaScript - "this" keyword',
            desc: 'Explore a powerful concept of context in JavaScript',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgdYEka2IGBPAM9hbgoiBl_s-BEiCGLqICldE2jhPItbS-7gQ8or0IUkWX51g1RpedjQs&usqp=CAU',
            link: 'https://kodysamaroo.medium.com/a-look-at-this-keyword-in-javascript-3c951aab7f1f'
        },
        {
            id: uniqid(),
            title: 'Deploy Rails API to Heroku',
            desc: 'How to deploy backends and APIs to Heroku',
            img: 'https://miro.medium.com/max/1024/0*4fveuXuWP0k2k1xj.png',
            link: 'https://kodysamaroo.medium.com/how-to-deploy-a-railsapi-to-heroku-9a86e9651833'
        },
        {
            id: uniqid(),
            title: 'React deploying on Netlify',
            desc: 'How to deploy frontend applications to Netlify',
            img: 'https://miro.medium.com/max/1300/0*oXxzCnJGoFErDsQ1.jpg',
            link: 'https://kodysamaroo.medium.com/react-deploying-frontend-on-netlify-6a2737c4c5b5'
        },
        {
            id: uniqid(),
            title: 'GitHub introudction',
            desc: 'An introduction to a couple helpful Git commands',
            img: 'https://cdn.uconnectlabs.com/wp-content/uploads/sites/46/2019/04/GitHub-Mark.png',
            link: 'https://kodysamaroo.medium.com/git-it-together-45f354c6023'
        }
    ]

    return (
        <BlogStyles darkMode={darkMode}>
        <div className="blogs">
            <h2> Blogs </h2>
            <div className="blog-items">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                >
                {blogs.map((blog) => {
                    return (
                        <SwiperSlide key={blog.id}>
                            <BlogItem
                                darkMode={darkMode}
                                title={blog.title}
                                img={blog.img}
                                desc={blog.desc}
                                link={blog.link}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </BlogStyles>
    )
}