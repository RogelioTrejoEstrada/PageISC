import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      
      <Footer />
    </div>
  )
}
