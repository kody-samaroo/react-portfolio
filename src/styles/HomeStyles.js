import styled from 'styled-components';

export const HomeStyles = styled.div`
    .home {
        background-color: ${props => props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
        position: relative;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
    .home-img {
        position: relative;
        margin: 10rem;
        right: 20%;
        max-width: 250px;
        border: 2px solid ${props => props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'};
    }
    .home-name {
        position: absolute;
        background-color: ${props => props.darkMode ? 'var(--dark-accent-2)' : '#0049FF'};
        top: 50%;
        left: 35%;
        max-height: 50px;
        width: 40%;
        max-width: 250px;
        overflow: hidden;
        p {
            display: inline-block;
            color: ${props => props.darkMode ? 'var(--dark-accent-1)' : 'var(--light-accent-3)'};
            text-align: center;
            font-size: 36px;
        }
    }
    .home-bio {
        position: absolute;
        background-color: ${props => props.darkMode ? 'var(--dark-accent-1)' : 'var(--light-bg-1)'};
        top: 61%;
        left: 37%;
        max-height: 40px;
        width: 50%;
        max-width: 300px;
        overflow: hidden;
        p {
            display: inline-block;
            color: ${props => props.darkMode ? 'var(--dark-accent-2)' : 'var(--light-accent-2)'};
            text-align: center;
            font-size: 28px;
        }
    }
    .home-icons{
        display: flex;
        width: 30%;
        max-width: 200px;
        margin: auto;
        .github-icon {
            margin-right: 5px;
        }
        .github-icon:hover {
            border: 3px solid ${props => props.darkMode ? 'var(--dark-accent-2)' : '#0049FF'};
            border-radius: 50px;
        }
        .linkedin-icon {
            margin-right: 5px;
        }
        .linkedin-icon:hover {
            border: 3px solid ${props => props.darkMode ? 'var(--dark-accent-2)' : '#0049FF'};
            border-radius: 15px;
        }
        .medium-icon {
            margin-right: 5px;
        }
        .medium-icon:hover {
            border: 3px solid ${props => props.darkMode ? 'var(--dark-accent-2)' : '#0049FF'};
            border-radius: 50px;
        }
    }

    .home-about {
        display: flex;
        background-color: ${props => props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
        color: ${props => props.darkMode ? 'var(--dark-accent-2)' : 'var(--light-accent-2)'};
        margin-left: 15%;
        margin-right: 15%;
        text-align: center;
        font-size: 24px;
    }

    .home-buttons {
        background-color: ${props => props.darkMode ? 'var(--dark-bg)' : 'var(--light-bg)'};
        text-align: center;
        white-space: nowrap;
    }
    button {
        font-size: 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;