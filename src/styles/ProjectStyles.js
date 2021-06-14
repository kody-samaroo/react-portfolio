import styled from 'styled-components';

export const ProjectStyles = styled.div`
    padding: 1rem;
    .projects {
        display: block;
        margin: auto;
    }
    h2 {
        display: block;
        margin: auto;
        text-align: center;
        font-family: 'Garamond';
        font-size: 3.5rem;
        text-transform: uppercase;
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
        h2 {
            font-size: 3.6rem;
        }
    }
    .project-item-img {
        text-align: center;;
        max-height: 300px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .project-items {
        display: block;
        margin: auto;
        gap: 3rem;
    }

    .swiper-container {
        padding-top: 8rem;
        max-width: 500px;
    }

    .swiper-button-prev, .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .project-items {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            gap: 5rem;
        }
    }
`;