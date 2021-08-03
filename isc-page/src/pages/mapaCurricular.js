import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'

export default function MapaCurricular() {
    return (
        <Layout>
          <div className='mapaCurricular'></div>
        <Container>
        <Cabecera
              titulo2="Mapa Curricular"
              titulo1="Ingeniería en Sistemas Computacionales"
            />
         
        </Container>
      </Layout>
    )
}
