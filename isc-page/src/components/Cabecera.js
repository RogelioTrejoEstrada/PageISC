import React from 'react'
import { Col, Row} from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'
//import {GatsbyImage} from 'gatsby-plugin-image'


function Cabecera(props) {
   const {titulo1, titulo2, imagen} = props
   //const {imagen} = props
    return (

      
       <BackgroundImage className="masthead" fluid={imagen} fadeIn>
        <div className="black-overlay">
          <Row className="tituloPrincipal  m-auto">
            <Col md={12} sm={4}>
              <h2>{titulo1}</h2>
              <h1>{titulo2}</h1>
              {/* <div className='mt-5'>
                <a href='https://upa.edu.mx/oferta-educativa/convocatoria-2022/' target="_blank" rel='noreferrer' className='btn outline-primary convocatoria-zoom'>
                  Estudia con nosotros
                </a>
              </div> */}
            </Col>           
          </Row>
        </div> 
      </BackgroundImage> 
    
     
    )
}
export default Cabecera;

