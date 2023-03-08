import styled from 'styled-components';

export const HomeStyles = styled.div`
    .home {
        background-color: var(--bg-color);
        position: relative;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
    .home-splash {
        background-color: var(--bg-color);
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
        border: 2px solid var(--text-color);
    }
    .home-name {
        position: absolute;
        background-color: var(--accent-color-2);
        top: 65%;
        left: 35%;
        max-height: 50px;
        width: 40%;
        max-width: 250px;
        overflow: hidden;
        border: 2px solid var(--text-color);
        p {
            display: inline-block;
            color: var(--accent-color-1);
            text-align: center;
            font-size: 36px;
        }
    }
    .home-bio {
        position: absolute;
        background-color: var(--accent-color-1);
        top: 76%;
        left: 37%;
        max-height: 40px;
        width: 50%;
        max-width: 300px;
        overflow: hidden;
        border: 2px solid var(--text-color);
        p {
            display: inline-block;
            color: var(--accent-color-2);
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
            height: 70%;
            width: 70%;
            margin-right: 5px;
            stroke-width: 5px;
            fill: var(--accent-color-2);
        }
        .github-icon:hover {
            border: 3px solid var(--accent-color-2);
            border-radius: 50px;
        }
        .linkedin-icon {
            height: 70%;
            width: 70%;
            margin-right: 5px;
            stroke-width: 5px;
            fill: var(--accent-color-2);
        }
        .linkedin-icon:hover {
            border: 3px solid var(--accent-color-2);
            border-radius: 10px;
        }
    }

    .home-about {
        display: flex;
        background-color: var(--bg-color);
        color: var(--accent-color-2);
        margin-left: 20%;
        margin-right: 20%;
        text-align: center;
        font-size: 26px;
    }

    .home-buttons {
        text-align: center;
    }
    button {
        font-size: 2.5rem;
        border-width: 3px;
        border-radius: 25px;
        cursor: pointer;
    }
`;