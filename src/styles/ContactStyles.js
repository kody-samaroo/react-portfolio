import styled from 'styled-components';

export const ContactStyles = styled.div`
    padding: 1rem;
    h2 {
        display: block;
        margin: auto;
        text-align: center;
        font-family: 'Garamond';
        font-size: 3.5rem;
        text-transform: uppercase;
        text-decoration: underline;
    }
    .contact-wrapper {
        display: block;
        margin: auto;
        text-align: center;
        justify-content: space-between;
    }
    .contact_wrapper::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .contact-form {
        display: block;
        margin: auto;
        text-align: center;
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
    }
    @media only screen and (max-width: 768px) {
        contact-wrapper::after {
            display: none;
        }
        contact-form {
            max-width: 100%;
            padding: 4rem 2rem 2rem 2rem;
        }
    }
    .form {
        width: 100%;
        margin-bottom: 2rem;
    }
    label {
        font-size: 1.8rem;
    }
    input, textarea {
        width: 100%;
        font-size: 2rem;
        padding: 1.2rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border: none;
        border-radius: 8px;
        margin-top: 1rem;
    }
    textarea {
        min-height: 250px;
        resize: vertical;
    }
    button[type='submit'] {
        font-size: 2rem;
        display: inline-block;
        border-radius: 8px;
        cursor: pointer;
    }
`;