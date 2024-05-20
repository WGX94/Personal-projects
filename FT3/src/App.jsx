import { useState } from 'react'
import { Outlet, RouterProvider, createBrowserRouter} from  'react-router-dom'
import './index.scss'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Car from './pages/car/Car'
import Account from './pages/account/Account'

function App() {

  const Layout = () => {

    return (
      <div id='mainContainer'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div> 
    )
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/peugeot308',
          element: <Car></Car>,
        },
        {
          path: '/moncompte',
          element: <Account></Account>,
        }

      ]
    },
  ])

  return <RouterProvider router={router}/>


};


export default App
