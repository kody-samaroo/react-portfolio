import styled from 'styled-components';

export const BlogItemStyles = styled.div`
    .blog-item-img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid ${props => props.darkMode ? 'var(--dark-accent-2)' : 'var(--light-accent-2)'};
    }
    .blog-item-info {
        margin-top: 1rem;
        background-color: ${props => !props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
        padding: 1rem;
        border-radius: 12px;
    }
    .blog-links {
        font-size: 1.2rem;
    }
    .blog-item-title {
        color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
    }
    .blog-item-desc {
        color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .blog-item-img, {
            height: 350px;
        }
    }
`;