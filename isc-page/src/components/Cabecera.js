import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function Cabecera({titulo1, titulo2}) {
    return (
        <Row className="justify-content-md-center tituloPrincipal ">
           <Col md={2}>
             <StaticImage
               src="../images/UPA_Logo.png"
               width={150}
               alt="UPA Logo"
             />
           </Col>
           <Col md={8}>
             <h2>{titulo1}</h2>
             <h1>{titulo2}</h1>
           </Col>
           <Col md={2}>
             <StaticImage
               src="../images/ISEI Logo.png"
               width={80}
               alt="UPA Logo"
             />
           </Col>
         </Row>
    )
}
