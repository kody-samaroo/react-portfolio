import styled from 'styled-components';

export const JourneyStyles = styled.div`
    padding: 1rem;
    background-color: ${props => props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
    h2 {
        color: ${props => props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
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
    .journey-item-img {
        text-align: center;
        max-height: 300px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .journey-items {
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
        background: ${props => props.darkMode ? 'var(--dark-accent-1)' : '#0049FF'};
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: ${props => props.darkMode ? 'var(--dark-text-1)' : 'var(--dark-text-1)'};
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .journey-items {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            gap: 5rem;
    }
}
`