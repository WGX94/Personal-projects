import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';
import SideNavBar from "./components/SideNavBar/SideNavBar"
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Map from './pages/map/Map';
import Event from './pages/event/Event';
import './index.scss';
import { path } from 'd3';
import Setting from './pages/setting/Setting';






function App() {

  const Layout = () => {
    return (
      <div className='container'>
          <SideNavBar></SideNavBar>
        <div className='contentContainer'>
          <Outlet></Outlet>
        </div>
        <svg className='svg-defs'>
          <defs>
            <linearGradient id="Gradient1" x1="0" x2="1" y1="0" y2="1">
              <stop  offset="0" stopColor={'#7D2C6C'} />
              <stop  offset="0.2472" stopColor={'#AA267B'} />
              <stop  offset="0.8146" stopColor={'#DF242F'} />
              <stop  offset="1" stopColor={'#DF242F'} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )

  };
  

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'Analyse',
          element: <Dashboard></Dashboard>,
        }
        ,
        {
          path: 'Carte',
          element: <Map />,
        },
        {
          path: 'Event',
          element: <Event />
        },
        {
          path: 'Reglages',
          element: <Setting />
        }
      ]
    },
  
  ])

  return <RouterProvider router={router}/>
  
  
};


export default App

