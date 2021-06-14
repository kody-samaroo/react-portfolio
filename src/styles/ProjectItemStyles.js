import styled from 'styled-components';

export const ProjectItemStyles = styled.div`
    .project-item-img {
        width: 100%;
        height: 300px;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--white);
    }
    .project-item-info {
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .project-item-title {
        font-size: 2.2rem;
    }
    .project-item-desc {
        font-size: 1.6rem;
        font-family: 'Times New Roman';
        margin-top: 1rem;
    }
    @media only screen and (max-width: 768px) {
        .project-item-img, {
            height: 350px;
        }
    }
`;