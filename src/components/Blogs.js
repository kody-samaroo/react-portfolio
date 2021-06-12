import React from 'react';
import BlogItem from './BlogItem';
import { BlogStyles } from '../styles/BlogStyles';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export default function Blogs() {

    SwiperCore.use([Navigation]);

    var uniqid = require('uniqid');

    const blogs = [
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
            title: 'GitHub introudction',
            desc: 'An introduction to a couple helpful Git commands',
            img: 'https://pbs.twimg.com/media/EOPWjS0XsAAqICb.jpg',
            link: 'https://kodysamaroo.medium.com/git-it-together-45f354c6023'
        }
    ]

    return (
        <BlogStyles>
        <div className="blogs">
            <h2> Articles </h2>
            <div className="blog-items">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                    640: { slidesPerView: 1 }
                    }}
                >
                {blogs.map((blog, index) => {
                    return (
                        <SwiperSlide key={blog.id}>
                            <BlogItem
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