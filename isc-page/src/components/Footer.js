import React from 'react'
import { Container } from 'react-bootstrap';

import {footer} from '../styles/Footer.module.css'

function Footer() {
    return (
        <footer className={footer}>
            <Container>
            <span className='text-muted'> This is the footer</span>
            </Container>
        </footer>
    )
}

export default Footer;
