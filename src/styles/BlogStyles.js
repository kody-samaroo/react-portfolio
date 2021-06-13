import styled from 'styled-components';

export const BlogStyles = styled.div`
    padding: 2rem 0;
    h2 {
        display: block;
        margin: auto;
        text-align: center;
        font-family: 'Garamond';
        font-size: 3.5rem;
        text-transform: uppercase;
        text-decoration: underline;
    }
    @media only screen and (max-width: 700px) {
        h2 {
            text-align: center;
            font-size: 3.6rem;
        }
    }
    .blog-item-img {
        max-height: 300px;
        max-width: 500px;
    }

    .blog-items {
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }

    .swiper-container {
        padding-top: 8rem;
        text-align: center;
        width: 50%;
        max-width: 500px;
        mex-height: 500px;
    }
    @media only screen and (max-width: 700px) {
        text-align: center;
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
    @media only screen and (max-width: 700px) {
        .blog-items {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .blog-item-img {
                width: 75%%;
            }
        }
    }
`;