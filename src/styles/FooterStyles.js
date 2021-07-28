import styled from 'styled-components';

export const FooterStyles = styled.div`
    background-color: ${props => props.darkMode ? 'var(--dark-accent-1)' : 'var(--light-accent-3)'};
    padding-top: 3rem;
    padding-bottom: 3rem;
    .footer {
        display: flex;
        gap: 3rem;
        margin-left: 10px;
    }

    .footer-title {
        position: relative;
        font-size: 3.5rem;

    }
    h1, p {
        color: ${props => props.darkMode ? 'var(--dark-text-1)' : 'var(--light-text-1)'}
    }
    p {
        font-size: 1.5rem;
    }
`;