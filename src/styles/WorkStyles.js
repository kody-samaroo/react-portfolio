import styled from 'styled-components';

export const WorkStyles = styled.div`
    padding: 1rem;
    background-color: var(--bg-color);
    h2 {
        color: var(--text-color);
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
    .work-item-img {
        text-align: center;
        max-height: 300px;
        max-width: 500px;
    }
    @media only screen and (max-width: 768px) {
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .work-items {
        display: block;
        margin: auto;
        gap: 3rem;
    }
    .swiper-container {
        padding-top: 6rem;
        max-width: 500px;
    }
    .swiper-button-prev, .swiper-button-next {
        position: absolute;
        right: 40px;
        left: auto;
        top: 20px;
        height: 30px;
        width: 30px;
        background: var(--bg-color);
        z-index: 10;
        transform: translateY(50%);
        color: var(--text-color);
        border-radius: 10px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after, .swiper-button-next::after {
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
        .work-items {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            gap: 5rem;
    }
}
`