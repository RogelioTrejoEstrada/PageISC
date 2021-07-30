import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
      <div className="layout">
        <Navbar />
        <div className="content">
          {/* Contenido de cada pagina*/}
          {children}
        </div>
        <footer></footer>
      </div>
    )
}
