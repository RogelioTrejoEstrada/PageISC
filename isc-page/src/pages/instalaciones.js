import React from 'react'
import { Container } from 'react-bootstrap'
import Cabecera from '../components/Cabecera'
import Layout from '../components/Layout'

export default function Instalaciones() {
  return (
    <Layout>
      <div className='instalaciones'></div>
      <Container>
      <Cabecera
            titulo2="Instalaciones"
            titulo1="Ingeniería en Sistemas Computacionales"
          />
       
      </Container>
    </Layout>
  )
}
