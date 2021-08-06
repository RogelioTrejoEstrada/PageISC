import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'


function Cabecera(props) {
   const {titulo1, titulo2, imagen} = props
   
    return (
      <BackgroundImage className="masthead" fluid={imagen} fadeIn>
        <div className="black-overlay">
          <Row className="justify-content-md-center tituloPrincipal mt-0 m-auto">
            {/* <Col md={2}>
              <StaticImage
                src="../images/UPA_Logo.png"
                width={150}
                alt="UPA Logo"
              />
            </Col> */}
            <Col>
              <h2>{titulo1}</h2>
              <h1>{titulo2}</h1>
            </Col>
            {/* <Col md={2}>
              <StaticImage
                src="../images/ISEI_Logo.png"
                width={80}
                alt="UPA Logo"
              />
            </Col> */}
          </Row>
        </div>
      </BackgroundImage>
    )
}
export default Cabecera;

