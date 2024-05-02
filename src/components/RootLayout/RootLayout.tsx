import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './RootLayout.scss'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

export default function RootLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </header>
        <Breadcrumbs />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
