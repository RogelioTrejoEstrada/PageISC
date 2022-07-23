import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Footer from './Footer'
import Header from './Header'


export default function Layout({ children }) {
  const pagina = children[0].props.title
  
  return (
    <>
    <main className="layout">
      <Header pagina={pagina}/>
      <div className="content">{children}</div>
      {/* <script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script> */}
      <Footer />
    </main>
    </>
  )
}



