import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()

  // ex: /help/contact --> help | contact

  let currentLink: string = ''
  const crumbs: JSX.Element[] = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '') // to remove the last empty string from the array
    .map((crumb) => {
      currentLink += `/${crumb}`
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })
  return <div className="breadcrumbs">{crumbs}</div>
}
