import React from 'react'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const Layout = () => {
  return (
   <>
     <div style={{background : "var(--black)" , overflow : "hidden"}}>
      <Header/>
      <Outlet/> {/* helps in rendering child routes */}
    </div>
      <Footer/>
   </>
  )
}

export default Layout
