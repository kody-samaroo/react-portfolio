import styled from 'styled-components';

export const HomeStyles = styled.div`
    .home {
        background-color: var(--dark-bg);
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
        border: 2px solid var(--gray-1);
    }
    .home-name {
        position: absolute;
        background-color: var(--white);
        top: 50%;
        left: 35%;
        max-height: 50px;
        width: 40%;
        max-width: 250px;
        overflow: hidden;
        p {
            display: inline-block;
            color: var(--gray-1);
            text-align: center;
            font-size: 36px;
        }
    }
    .home-bio {
        position: absolute;
        background-color: var(--deep-dark);
        top: 61%;
        left: 37%;
        max-height: 40px;
        width: 50%;
        max-width: 300px;
        overflow: hidden;
        p {
            display: inline-block;
            color: var(--white);
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
        .linkedin-icon {
            margin-right: 5px;
        }
        .medium-icon {
            margin-right: 5px;
        }
    }

    .home-about {
        display: flex;
        background-color: var(--dark-bg);
        margin-left: 15%;
        margin-right: 15%;
        text-align: center;
        font-size: 24px;
    }

    .home-buttons {
        text-align: center;
        white-space: nowrap;
    }
    button {
        font-size: 2rem;
        border-radius: 8px;
        cursor: pointer;
    }
`;