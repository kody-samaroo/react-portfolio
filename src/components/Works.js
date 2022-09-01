import React from 'react';
import WorkItem from './WorkItem';
import { WorkStyles } from '../styles/WorkStyles';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export default function Journeys({ darkMode }) {

    SwiperCore.use([Navigation]);

    var uniqid = require('uniqid');

    const works = [
        {
            id: uniqid(),
            company: 'Dun & Bradstreet',
            img: 'https://peprofessional.com/wp-content/uploads/2021/08/d-and-b-f1-1024x770.png',
            date: '09/21 - 08/22',
            desc: 'I worked as a software engineer for Dun & Bradstreet for a year. I specialized in automating and intergrated microservices. I built apis, troubleshooted customer issues and wrote code for complex JSON objects. My time there taught me a lot about cloud based technologies, agilie idealogies and versioning control.'
        },
        {
            id: uniqid(),
            company: 'Flatiron Bootcamp',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMeSulUZ5RiJtpz1ybIqUNrmy3Ss8qIPbN207HZEgdcgm2TtYQTNum7S4FFOrjrhm-P4&usqp=CAU',
            date: '11/20 - 04/21',
            desc: 'I enrolled in Flatiron\'s coding bootcamp the end of 2020 during the pandemic as a way to learn some skills remotely. It was an immersive experience where I spent close to 60 hours a week learning Ruby, React, building full stack projects and learning the basics of computer science. I learned so much quickly as well as the skills to step into new codebases and stacks.'
        }
    ]

    return (
        <WorkStyles darkMode={darkMode}>
        <div className="work">
            <h2> Work Experience </h2>
            <div className="work-items">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                >
                {works.map((work) => {
                    return (
                        <SwiperSlide key={work.id}>
                            <WorkItem
                                darkMode={darkMode}
                                company={work.company}
                                img={work.img}
                                date={work.date}
                                desc={work.desc}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </WorkStyles>
    )
}