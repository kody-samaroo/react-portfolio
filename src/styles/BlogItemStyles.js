import styled from 'styled-components';

export const BlogItemStyles = styled.div`
    .blog-item-img {
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img{
            height: 100%;
        }
    }
    .blog-item-info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .blog-item-title {
        font-size: 2.2rem;
    }
    .blog-item-desc {
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 700px) {
        .blog-item-img {
            height: 350px;
        }
    }

`;