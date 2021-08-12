import React from "react";
import ProjectItem from './ProjectItem';
import { ProjectStyles } from '../styles/ProjectStyles';
import 'swiper/swiper-bundle.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

export default function Projects({ darkMode }) {

    SwiperCore.use([Navigation]);

    var uniqid = require('uniqid');

    const projects = [
        {
            id: uniqid(),
            title: 'Browser Code IDE',
            stack: ['Ruby on Rails', 'React', 'React-Bootstrap'],
            desc: 'A web broswer friendly development environment that allows programmers to write code and see the results of their builds',
            img: 'https://user-images.githubusercontent.com/73686621/115886524-0339e780-a41f-11eb-99b8-7a8b561e97d6.png',
            github: 'https://github.com/jodycola/Code-Bucket',
            website: 'https://code-bucket.netlify.app/',
            demo: 'https://youtu.be/bqG-OQ9KRnQ'
        },
        {
            id: uniqid(),
            title: 'TypeScript Weather App',
            stack: ['TypeScript', 'React', 'Web Scrapping'],
            desc: 'Search for weather data and forecast for cities in the US. Webscrapping Openweather API',
            img: 'https://user-images.githubusercontent.com/73686621/129249752-59e859ae-1cd9-464a-97df-fe31b23b08c2.png',
            github: 'https://github.com/jodycola/TypeScript-Weather-App',
            website: 'https://typescript-weather.netlify.app/',
            demo: null
        },
        {
            id: uniqid(),
            title: 'Java Tic-Tac-Toe',
            stack: ['Java', 'JavaFX', 'Apache NetBeans'],
            desc: 'A Tic-Tac-Toe game application',
            img: 'https://camo.githubusercontent.com/f7bec7627d81b1cbc006b07359cf19ba76cfdb2af0780813152071e65833abdc/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f45716c56415378525a46546a665a7479376d2f67697068792e676966?size=10',
            github: 'https://github.com/jodycola/java-tic-tac-toe',
            website: null,
            demo: null
        },
        {
            id: uniqid(),
            title: 'Full-Stack Fantasy Basketball App',
            stack: ['React', 'Ruby on Rails', 'PostgreSQL'],
            desc: 'Draft players to form a fantasy basketball team. Uses NBA api to fetch player data',
            img: 'https://user-images.githubusercontent.com/73686621/117356406-aeb45480-ae81-11eb-8958-d411ecdebff2.png',
            github: 'https://github.com/jodycola/fantasy_all_star/blob/main/README.md',
            website: null,
            demo: 'https://youtu.be/ieK0PDujrnk'
        },
        {
            id: uniqid(),
            title: 'My Messager',
            stack: ['React', 'NodeJS', 'React-Bootstrap'],
            desc: 'An instant messaging application that provides communication between multiple parties',
            img: 'data:image/png;base64,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',
            github: 'https://github.com/jodycola/React-Messager',
            website: null,
            demo: null
        },

    ]


    return (
        <ProjectStyles darkMode={darkMode}>
        <div className="projects">
            <h2> Projects </h2>
            <div className="project-items">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={project.id}>
                            <ProjectItem
                                title={project.title}
                                stack={project.stack}
                                desc={project.desc}
                                img={project.img}
                                github={project.github}
                                website={project.website}
                                demo={project.demo}
                                darkMode={darkMode}
                            />
                        </SwiperSlide>
                    );
                })}
                </Swiper>
            </div>
        </div>
        </ProjectStyles>
    )
}