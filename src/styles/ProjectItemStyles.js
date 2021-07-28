import styled from 'styled-components';

export const ProjectItemStyles = styled.div`
    .project-item-img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid ${props => props.darkMode ? 'var(--dark-accent-2)' : 'var(--light-accent-2)'};
    }
    .project-item-info {
        margin-top: 1rem;
        background-color: ${props => !props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
        padding: 1rem;
        border-radius: 12px;
    }
    .project-item-title {
        font-size: 2.2rem;
    }
    .project-links {
        width: 25px;
        white-space: nowrap;
    }
    h3,h5 {
        color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
    }
    .project-item-desc {
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
        color: ${props => !props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
    }
    @media only screen and (max-width: 768px) {
        .project-item-img, {
            height: 350px;
        }
    }
`;