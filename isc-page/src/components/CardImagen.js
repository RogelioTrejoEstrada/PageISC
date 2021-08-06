
import React from 'react'
import { Col } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'

function CardImagen({id, title, imagen}) {
    const rutaImagen = '../images/' + imagen
    console.log(rutaImagen)
    return (
        <Col md={6} sm={12} className='mb-4 mt-4' key = {id}>
            <h5>{title}</h5>
            <div className="cardImagen">
              <StaticImage
                src= {String(rutaImagen)}
                alt= {title}
                
              />
            </div>
          </Col>
    )
}

export default CardImagen;
