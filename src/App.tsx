import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import './style.scss'
import RootLayout from './components/RootLayout/RootLayout'
import About from './components/About/About'
import MovieError from './components/MovieError/MovieError'
import Contact, { contactAction } from './components/Contact/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/movie/:imdbID"
        element={<MovieDetail />}
        errorElement={<MovieError />}
      />
      <Route path="/contact" element={<Contact />} action={contactAction} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
)
export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
