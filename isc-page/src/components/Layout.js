import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Footer from './Footer'
import Header from './Header'


export default function Layout({ children }) {
  const pagina = children[0].props.className
  return (
    <>
    <main className="layout">
      <Header pagina={pagina}/>
      <div className="content">{children}</div>
      
      <Footer />
    </main>
    </>
  )
}



