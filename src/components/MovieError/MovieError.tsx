import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function MovieError() {
  const error = useRouteError()
  return <div>{error.message}</div>
}
