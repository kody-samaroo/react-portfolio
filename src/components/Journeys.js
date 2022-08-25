import React from 'react';
import JourneyItem from './JourneyItem';
import { JourneyStyles } from '../styles/JourneyStyles';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export default function Journeys({ darkMode }) {

    SwiperCore.use([Navigation]);

    var uniqid = require('uniqid');

    const journeys = [
        {
            id: uniqid(),
            company: 'Dun & Bradstreet',
            img: 'https://peprofessional.com/wp-content/uploads/2021/08/d-and-b-f1-1024x770.png',
            date: '09/21 - 08/22',
            desc: 'This was my first software engineering role and it taught me a lot. I was responsible for intergrating microservices and building rest apis. I wrote code in Javascript and Java, observed the health of customer environments and worked with other teams to release a live web application for our customers to use.'
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
        <JourneyStyles darkMode={darkMode}>
        <div className="journey">
            <h2> Work Experience </h2>
            <div className="journey-items">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                >
                {journeys.map((journey) => {
                    return (
                        <SwiperSlide key={journey.id}>
                            <JourneyItem
                                darkMode={darkMode}
                                company={journey.company}
                                img={journey.img}
                                date={journey.date}
                                desc={journey.desc}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </JourneyStyles>
    )
}