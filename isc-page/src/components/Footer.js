import React from 'react'
import { Container } from 'react-bootstrap';

import {footer} from '../styles/Footer.module.css'

function Footer() {
    return (

        <div className={footer}>
            <Container>
            <span className='text-muted'> This is the footer</span>
            </Container>
        </div>
    )
}

export default Footer;
