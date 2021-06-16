import React from 'react';
import { FooterStyles } from '../styles/FooterStyles';

export default function Footer() {
    return (
        <FooterStyles>
            <div className="footer">
                <h1 className="footer-title"> <p> Made by </p> Kody Samaroo</h1>
                <p> Business inquiries only, This application was made with the intetion of professionally broadcasting myself to serious employers. The source code for this portfolio can be found <a href="https://github.com/jodycola/react-portfolio">here</a> </p>
            </div>
        </FooterStyles>
    )
}
